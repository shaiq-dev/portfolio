import { kv } from '@vercel/kv'

import { AppBar } from 'components/Widgets'
import WorkExperience from 'components/WorkExperience'
import LatestPosts from 'components/LatestPosts'
import ProfileCard from 'components/ProfileCard'
import type { MediumShortPost, WorkExperience as Experience } from 'types/index'
import { xTimeAgo } from 'utils/index'
import { AppContants, VercelKVKeys } from 'constants/index'
import { HygraphService } from 'services/hygraph'
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
  const cachedData = await kv.get<HomePageProps>(
    VercelKVKeys.HOME_PAGE_STATIC_PROPS
  )

  if (cachedData) {
    return { props: cachedData }
  }

  const { workExperiences } = await HygraphService.instance().executeHpcQuery(`
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

  const { configurations } = await HygraphService.instance().executeHpcQuery(`
    {
      configurations {
        commitCount
        profileBio
        profileCardAvatar {
          url
        }
      }
    }
  `)

  const _getMediumPosts = async () => {
    const api = process.env.MEDIUM_FEED_API as string
    const data = await fetch(api)
    const feed: { items: MediumShortPost[] } = await data.json()

    const posts: MediumShortPost[] = feed.items.map((item) => {
      const { title, link, pubDate, categories, thumbnail } = item
      return {
        title,
        link,
        thumbnail,
        pubDate: xTimeAgo(new Date(pubDate)),
        categories,
      }
    })
    return [...posts, ...posts, ...posts]
  }

  const { commitCount, profileBio, profileCardAvatar } = configurations[0]

  const props: HomePageProps = {
    workExperience: workExperiences,
    commits: commitCount,
    avatar: profileCardAvatar.url,
    bio: profileBio,
    posts: await _getMediumPosts(),
  }

  await kv.set(VercelKVKeys.HOME_PAGE_STATIC_PROPS, props, {
    ex: AppContants.REDIS_TTL,
  })

  return {
    props,
  }
}
