import { Octokit } from 'octokit'
import { throttling } from '@octokit/plugin-throttling'
import { paginateRest } from '@octokit/plugin-paginate-rest'
import { restEndpointMethods } from '@octokit/plugin-rest-endpoint-methods'

const GIT_TOKEN = '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'
const GIT_USER = 'shaiq-dev'
const GIT_EMAIL = 'shaiqkar@gmail.com'

/**
 * These are empty repos. GitHub Api returns an error if
 * trying to request any data from them. This list can
 * also include the orgs you want to ignore.
 */
const blackListedRepos = ['gowebknot/Package-Registry']
const blackListedOrgs = ['EpicGames']

// List of things to ignore in branches
const bots = ['dependabot', 'dependabot-preview', 'restyled/']

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
    repoTree[repo] = repoBranches
      .map((branch) => branch.name)
      // filter out bot branches
      .filter((branch) => !bots.some((bot) => branch.includes(bot)))
  })
)

const allContributions = (
  await Promise.all(
    Object.entries(repoTree).map(async ([repo, branches]) => {
      const [org, repoName] = repo.split('/')
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
      return new Set(contributions.flat()).size
    })
  )
).reduce((acc, curr) => acc + curr, 0)

console.log(allContributions)
