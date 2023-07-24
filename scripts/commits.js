import { Octokit } from 'octokit'
import { throttling } from '@octokit/plugin-throttling'
import { paginateRest } from '@octokit/plugin-paginate-rest'
import { restEndpointMethods } from '@octokit/plugin-rest-endpoint-methods'

import { updateCommitCount } from './hygraph.js'
import { startNewBuild } from './vercel.js'

const GIT_TOKEN = process.env.GIT_TOKEN
const GIT_USER = process.env.GIT_USER

/**
 * These are empty repos. GitHub Api returns an error if
 * trying to request any data from them. This list can
 * also include the orgs you want to ignore.
 */
const blackListedRepos = [...(process.env.BLACK_LISTED_REPOS || '').split(',')]
const blackListedOrgs = [...(process.env.BLACK_LISTED_ORGS || '').split(',')]

const PluggedKit = Octokit.plugin(throttling, paginateRest, restEndpointMethods)
const octokit = new PluggedKit({
  auth: GIT_TOKEN,
  headers: {
    Accept: 'application/vnd.github.preview',
  },
  throttle: {
    onRateLimit: (retryAfter, options, octokit) => {
      octokit.log.warn(
        `Request quota exhausted for request ${options.method} ${options.url}`
      )

      if (options.request.retryCount === 0) {
        octokit.log.info(`Retrying after ${retryAfter} seconds!`)
        return true
      }
    },
    onAbuseLimit: (retryAfter, options, octokit) => {
      octokit.log.warn(
        `Abuse detected for request ${options.method} ${options.url}`
      )
    },
  },
})

console.log(
  "🏁 Started the script. Let's see how many commits we have made so far"
)

const repos = (
  await octokit.paginate(octokit.rest.repos.listForAuthenticatedUser, {
    visibility: 'all',
    per_page: 100,
  })
)
  .map((repo) => repo.full_name)
  .filter((repo) => !blackListedRepos.includes(repo))
  .filter((repo) => !blackListedOrgs.includes(repo.split('/')[0]))

// Get branches for all repos
const repoTree = {}

await Promise.all(
  repos.map(async (repo) => {
    const [org, repoName] = repo.split('/')
    const repoBranches = await octokit.paginate(
      octokit.rest.repos.listBranches,
      {
        owner: org,
        repo: repoName,
        per_page: 100,
      }
    )
    repoTree[repo] = repoBranches.map((branch) => branch.name)
  })
)

console.log("🌳 Got all the branches for all the repos. Let's get the commits")

const allContributions = (
  await Promise.all(
    Object.entries(repoTree).map(async ([repo, branches]) => {
      const [org, repoName] = repo.split('/')
      console.log(`[${repoName}]`)
      const contributions = await Promise.all(
        branches.map(async (branch) => {
          const commits = await octokit.paginate(
            octokit.rest.repos.listCommits,
            {
              owner: org,
              repo: repoName,
              sha: branch,
              author: GIT_USER,
              per_page: 100,
            }
          )
          return commits.map((commit) => commit.sha)
        })
      )
      const contributionsCount = new Set(contributions.flat()).size
      console.log(`${repoName} | ${contributionsCount}`)
      return contributionsCount
    })
  )
).reduce((acc, curr) => acc + curr, 0)

console.log(`Total ${allContributions} 💪 made so far`)

/**
 * The total can be stored anywhere now. I am using hygraph as a
 * headless CMS for this project, so i will be storing it there.
 */
updateCommitCount(allContributions).then(async () => {
  /**
   * The website use next js `getStaticProps` which caches the props at
   * build time, so to reflect the new commits a new build is required.
   * This is better than `getServerSideProps` which increase the page
   * load time.
   */
  await startNewBuild()
})
