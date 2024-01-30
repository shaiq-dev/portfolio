import Image from 'next/image'
import { useEffect, useState } from 'react'
import { HiGlobeAsiaAustralia } from 'react-icons/hi2'

import { Api, AppStrings } from 'constants/index'
import {
  ProfileCardAvatar,
  ProfileCardBio,
  ProfileCardContainer,
  ProfileCardHeader,
  ProfileCardResume,
  ProfileCardTitle,
} from './_styled'
import Socials from './Socials'

const ProfileCard = ({ avatar, bio }: { avatar: string; bio: string }) => {
  const [resumeLink, setResumeLink] = useState('')

  useEffect(() => {
    fetch(Api.RESUME)
      .then((res) => res.json())
      .then((res) => {
        setResumeLink(res.artifact)
      })
  }, [])

  return (
    <ProfileCardContainer className="profile">
      <div>
        <ProfileCardHeader>
          <ProfileCardTitle>
            <div>
              <h2>{AppStrings.PROFILE_CARD_NAME}</h2>
              <span>{AppStrings.PROFILE_CARD_TITLE}</span>
            </div>
            <div></div>
          </ProfileCardTitle>
          <ProfileCardAvatar>
            <div className="img">
              <Image src={avatar} alt="Shaiq" width={119} height={119} />
            </div>
          </ProfileCardAvatar>
        </ProfileCardHeader>
        <ProfileCardResume>
          <a
            href={resumeLink}
            target="_blank"
            className="link"
            rel="noreferrer"
            title={resumeLink ? undefined : 'Loading'}
          >
            <span className="icon">
              <HiGlobeAsiaAustralia size={24} />
            </span>
            {AppStrings.PROFILE_CARD_RESUME_LINK_TEXT}
          </a>
        </ProfileCardResume>
        <ProfileCardBio>{bio}</ProfileCardBio>
        <Socials />
      </div>
    </ProfileCardContainer>
  )
}

export default ProfileCard
