import { kv } from '@vercel/kv'

import { AppBar } from 'components/Widgets'
import WorkExperience from 'components/WorkExperience'
import LatestPosts from 'components/LatestPosts'
import ProfileCard from 'components/ProfileCard'
import PeopleAlsoAsk from 'components/PeopleAlsoAsk'
import type { MediumShortPost, WorkExperience as Experience } from 'types/index'
import HygraphService from 'services/hygraph'
import {
  HomeCenterColumn,
  HomeContainer,
  HomeRightColumn,
} from 'styles/_pages.styled'

type HomePageProps = {
  workExperience: Experience
  commits: number
  avatar: string
  bio: string
  posts: MediumShortPost[]
}

export default function Home({
  workExperience,
  commits,
  avatar,
  bio,
  posts,
}: HomePageProps) {
  return (
    <>
      <AppBar commits={commits} />
      <HomeContainer>
        <HomeCenterColumn>
          <WorkExperience data={workExperience} />
          <LatestPosts posts={posts} />
          <PeopleAlsoAsk />
        </HomeCenterColumn>
        <HomeRightColumn>
          <ProfileCard avatar={avatar} bio={bio} />
        </HomeRightColumn>
      </HomeContainer>
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
