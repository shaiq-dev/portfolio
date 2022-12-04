import Image from 'next/image'
import { useEffect, useState } from 'react'
import { HiGlobeAsiaAustralia } from 'react-icons/hi2'

import Constants from 'constants/index'

import { ProfileCardContainer } from './profileCard.styled'
import Socials from './Socials'

const ProfileCard = ({ avatar }: { avatar: string }) => {
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
        <div className="profile__header d-flex ac">
          <div className="profile__header--name d-flex f-1 jsb">
            <div>
              <h2>Shaiq Kar</h2>
              <span>A Coder</span>
            </div>
            <div></div>
          </div>
          <div className="profile__header--avatar d-flex ac">
            <div className="img">
              <Image src={avatar} alt="Shaiq" width={119} height={128} />
            </div>
          </div>
        </div>
        <div className="profile__resume d-flex ac">
          <a
            href={resumeLink}
            target="_blank"
            className="link"
            rel="noreferrer"
          >
            <span className="profile__resume--icon">
              <HiGlobeAsiaAustralia size={24} />
            </span>
            Download Resume
          </a>
        </div>
        <Socials />
      </div>
    </ProfileCardContainer>
  )
}

export default ProfileCard
