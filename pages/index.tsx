import { kv } from '@vercel/kv'

import CommitCount from 'components/CommitCount'
import WorkExperience from 'components/WorkExperience'
import LatestPosts from 'components/LatestPosts'
import ProfileCard from 'components/ProfileCard'
import PeopleAlsoAsk from 'components/PeopleAlsoAsk'
import type { MediumShortPost, WorkExperience as Experience } from 'types/index'
import HygraphService from 'services/hygraph'
import { PageCenterColumn, PageContainer, PageRightColumn } from 'styles/shared'
import { withLayout } from 'layout/index'

type HomePageProps = {
  workExperience: Experience[]
  commits: number
  avatar: string
  bio: string
  posts: MediumShortPost[]
}

function Home({ workExperience, commits, avatar, bio, posts }: HomePageProps) {
  return (
    <>
      <CommitCount count={commits} />
      <PageContainer>
        <PageCenterColumn>
          <WorkExperience data={workExperience} />
          <LatestPosts posts={posts} />
          <PeopleAlsoAsk />
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

  const { workExperiences } = await hygraphService.query(`
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
    }
  `)

  const { configurations } = await hygraphService.query(`
    {
      configurations {
        profileBio
        profileCardAvatar {
          url
        }
      }
    }
  `)

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
    workExperience: workExperiences,
    commits,
    avatar: profileCardAvatar.url,
    bio: profileBio,
    posts,
  }

  return {
    props,
  }
}

export default withLayout(Home)
