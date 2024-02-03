import { kv } from '@vercel/kv'

import CommitCount from 'components/CommitCount'
import WorkExperience from 'components/WorkExperience'
import LatestPosts from 'components/LatestPosts'
import ProfileCard from 'components/ProfileCard'
import PeopleAlsoAsk, {
  type PeopleAlsoAskQuestion,
} from 'components/PeopleAlsoAsk'
import type { MediumShortPost, WorkExperience as Experience } from 'types/index'
import HygraphService from 'services/hygraph'
import { PageCenterColumn, PageContainer, PageRightColumn } from 'styles/shared'
import { withLayout } from 'layout/index'
import { AppStrings } from 'constants/index'

type HomePageProps = {
  workExperiences: Experience[]
  commits: number
  avatar: string
  bio: string
  posts: MediumShortPost[]
  peopleAlsoAskQuestions: PeopleAlsoAskQuestion[]
}

function Home({
  workExperiences,
  commits,
  avatar,
  bio,
  posts,
  peopleAlsoAskQuestions,
}: HomePageProps) {
  return (
    <>
      <CommitCount count={commits} info={AppStrings.DATA_INFO_COMMITS} />
      <PageContainer>
        <PageCenterColumn>
          <WorkExperience experiences={workExperiences} />
          <LatestPosts posts={posts} />
          <PeopleAlsoAsk questions={peopleAlsoAskQuestions} />
        </PageCenterColumn>
        <PageRightColumn>
          <ProfileCard avatar={avatar} bio={bio} />
        </PageRightColumn>
      </PageContainer>
      <div style={{ height: '1500px', background: '#fff' }}></div>
    </>
  )
}

export const getStaticProps = async () => {
  const hygraphService = HygraphService.getInstance()

  const { workExperiences, configurations, peopleAlsoAskQuestions } =
    await hygraphService.query(`
    {
      workExperiences {
        company
        description
        id
        positions {
          id
          role
          startDate
          endDate
          description
        }
      }

      configurations {
        profileBio
        profileCardAvatar {
          url
        }
      }

      peopleAlsoAskQuestions {
        question
        description
        hasSearchResult
        searchResultLink {
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
    }
  `)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  peopleAlsoAskQuestions.forEach((question: any) => {
    if (question.searchResultLink) {
      question.searchResultLink.icon = question.searchResultLink.icon.url
    }
  })

  const { profileBio, profileCardAvatar } = configurations[0]

  const commits = (await kv.hget('config', 'commits')) as number

  const latestPostIds: string[] = await kv.zrange('posts:update', 0, 9)
  latestPostIds.reverse()
  const postsSet = await kv.hmget('posts', ...latestPostIds)

  if (!postsSet) {
    throw new Error('Medium posts set failed to load')
  }
  const posts = Object.values(postsSet) as MediumShortPost[]

  const props: HomePageProps = {
    workExperiences,
    commits,
    avatar: profileCardAvatar.url,
    bio: profileBio,
    posts,
    peopleAlsoAskQuestions,
  }

  return {
    props,
  }
}

export default withLayout(Home)
