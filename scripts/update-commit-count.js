import { Octokit } from 'octokit'
import { paginateRest } from '@octokit/plugin-paginate-rest'
import { restEndpointMethods } from '@octokit/plugin-rest-endpoint-methods'
import { throttling } from '@octokit/plugin-throttling'
import { kv } from '@vercel/kv'
import 'dotenv/config'

import { debug } from './util.js'

const blacklistedRepos = (process.env.BLACKLISTED_REPOS || '').split(',')
const blacklistedOrgs = (process.env.BLACKLISTED_ORGS || '').split(',')

const PluggedKit = Octokit.plugin(throttling, paginateRest, restEndpointMethods)
const octokit = new PluggedKit({
  auth: process.env.GIT_PAT_TOKEN,
  headers: {
    Accept: 'application/vnd.github.preview',
  },
  throttle: {
    onRateLimit: (retryAfter, options, octokit) => {
      octokit.log.warn(`Request quota exhausted for request ${options.method} ${options.url}`)

      if (options.request.retryCount === 0) {
        octokit.log.info(`Retrying after ${retryAfter} seconds!`)
        return true
      }
    },
    onSecondaryRateLimit: (retryAfter, options, octokit) => {
      octokit.log.warn(`Abuse detected for request ${options.method} ${options.url}`)
    },
  },
})

octokit.hook.error('request', async (error, options) => {
  octokit.log.error(`Error occurred for request ${options.method} ${options.url}`)
  octokit.log.error(error)
})

console.log("Started the script. Let's see how many commits we have made so far")

const repos = (
  await octokit.paginate(octokit.rest.repos.listForAuthenticatedUser, {
    visibility: 'all',
    per_page: 100,
  })
)
  .filter(repo => {
    const [org, name] = repo.full_name.split('/')
    return !blacklistedOrgs.includes(org) && !blacklistedRepos.includes(name)
  })
  .map(repo => repo.full_name)

// Get branches for all repos
const repoTree = {}

await Promise.all(
  repos.map(async repo => {
    const [org, repoName] = repo.split('/')
    const repoBranches = await octokit.paginate(octokit.rest.repos.listBranches, {
      owner: org,
      repo: repoName,
      per_page: 100,
    })
    repoTree[repo] = repoBranches.map(branch => branch.name)
  })
)

console.log('Retrieved all branches. Proceeding to collect commit data')

const commitsCount = (
  await Promise.all(
    Object.entries(repoTree).map(async ([repo, branches]) => {
      const [org, repoName] = repo.split('/')
      const contributions = await Promise.all(
        branches.map(async branch => {
          const commits = await octokit.paginate(octokit.rest.repos.listCommits, {
            owner: org,
            repo: repoName,
            sha: branch,
            author: process.env.GIT_USERNAME,
            per_page: 100,
          })
          return commits.map(commit => commit.sha)
        })
      )
      const count = new Set(contributions.flat()).size
      debug(`${org} | ${repoName} | ${count}`)
      return count
    })
  )
).reduce((acc, curr) => acc + curr, 0)

console.log(`Total ${commitsCount} commits 💪 made so far`)

/**
 * Commit count can be stored anywhere. I am using vercel kv database (redis by upstash)
 * to store it.
 */
await kv.hset('config', { commits: commitsCount })
