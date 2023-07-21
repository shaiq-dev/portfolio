import Image from 'next/image'
import { useEffect, useState } from 'react'
import { HiGlobeAsiaAustralia } from 'react-icons/hi2'

import Constants from 'constants/index'
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
    fetch(Constants.Api.Resume)
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
              <h2>Shaiq Kar</h2>
              <span>A Coder</span>
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
          >
            <span className="icon">
              <HiGlobeAsiaAustralia size={24} />
            </span>
            Download Resume
          </a>
        </ProfileCardResume>
        <ProfileCardBio>{bio}</ProfileCardBio>
        <Socials />
      </div>
    </ProfileCardContainer>
  )
}

export default ProfileCard
