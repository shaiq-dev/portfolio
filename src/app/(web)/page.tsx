import { kv } from '@vercel/kv'

import HygraphService from '@/services/hygraph'
import { Page } from '@/components/Page'
import { ProfileCard } from '@/components/ProfileCard'
import { WorkExperience } from '@/components/WorkExperience'
import { PeopleAlsoAsk } from '@/components/PeopleAlsoAsk'
import { LatestPosts } from '@/components/LatestPosts'
import { RelatedSearches } from '@/components/RelatedSearches'
import type { ShortPost } from '@/types'

const getHomePageData = async () => {
  'use server'

  const hygraphService = HygraphService.getInstance()
  const { experiences, questions, relatedSearches } = await hygraphService.query(`
    {
      experiences {
        id
        company
        description
        positions {
          id
          role
          startDate
          endDate
          description
        }
      }

      questions {
        ask
        answer
        hasSearchResult
        searchResult {
          website
          icon {
            url
          }
          cite
          href
          title
        }
        searchResultGoogleUrl
      }

      relatedSearches (
        where: {
          enabled: true
        }
      ) {
        query_
        href
      }
    }
  `)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  questions.forEach((question: any) => {
    if (question.searchResult) {
      question.searchResult.iconUrl = question.searchResult.icon.url
    }
  })

  const commits = (await kv.hget<number>('config', 'commits')) || 0

  // Get 9 latest posts
  const postIds: string[] = await kv.zrange('posts:update', 0, 9)
  postIds.reverse()
  const posts = (await kv.hmget<Record<string, ShortPost>>('posts', ...postIds)) || {}

  return {
    commits,
    experiences,
    questions,
    posts: Object.values(posts),
    searches: relatedSearches,
  }
}

const HomePage = async () => {
  const { commits, experiences, posts, questions, searches } = await getHomePageData()

  return (
    <>
      <div className="font-heading text-ash-200 ml-[--center-abs-margin] flex h-[43px] items-center text-sm">
        <span>About {commits} commits</span>
      </div>
      <Page
        center={
          <>
            <WorkExperience data={experiences} />
            <LatestPosts posts={posts} />
            <PeopleAlsoAsk questions={questions} />
            <RelatedSearches searches={searches} />
          </>
        }
        right={<ProfileCard />}
      />
    </>
  )
}

export default HomePage
