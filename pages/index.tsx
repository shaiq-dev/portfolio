import { GraphQLClient, gql } from 'graphql-request'

import { AppBar } from 'components/Widgets'
import WorkExperience from 'components/WorkExperience'
import ProfileCard from 'components/ProfileCard'
import type { WorkExperience as Experience } from 'types/index'
import { HomeContainer } from 'styles/home.styled'

type Props = {
  workExperience: Experience
  commits: number
  avatar: string
}

export default function Home({ workExperience, commits, avatar }: Props) {
  return (
    <>
      <AppBar commits={commits} />
      <HomeContainer>
        <div className="center">
          <WorkExperience data={workExperience} />
        </div>
        <div className="right">
          <ProfileCard avatar={avatar} />
        </div>
      </HomeContainer>
    </>
  )
}

export const getStaticProps = async () => {
  const gqlClient = new GraphQLClient(
    process.env.HYGRAPH_READONLY_API as string
  )
  const queryFetchWorkExp = gql`
    query getWorkExperiences {
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
  `

  const queryFetchConfiguration = gql`
    {
      configurations {
        commitCount
        profileCardAvatar {
          url
        }
      }
    }
  `

  const { workExperiences } = await gqlClient.request(queryFetchWorkExp)
  const { configurations } = await gqlClient.request(queryFetchConfiguration)

  const { commitCount, profileCardAvatar } = configurations[0]

  return {
    props: {
      workExperience: workExperiences,
      commits: commitCount,
      avatar: profileCardAvatar.url,
    },
  }
}
