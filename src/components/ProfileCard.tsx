import { cloneElement } from 'react'
import Image from 'next/image'
import { HiGlobeAsiaAustralia } from 'react-icons/hi2'

import { SocialProfile } from '@/types'
import { useText } from '@/hooks'
import { SOCIAL_PROFILES } from '@/constants'

const SocialProfiles = ({ profiles }: { profiles: SocialProfile[] }) => {
  return (
    <div className="m-[10px_-8px_-10px_-8px] flex justify-between">
      {profiles.map(({ name, handle, icon }, idx) => (
        <div key={idx} className="inline-block w-[72px] px-2 pb-2.5 leading-[1.29]">
          <a
            href={handle}
            className="_link flex flex-col items-center"
            target="_blank"
            rel="noreferrer"
          >
            <div>{cloneElement(icon, { className: 'size-8' })}</div>
            <span className="mt-1">{name}</span>
          </a>
        </div>
      ))}
    </div>
  )
}

export const ProfileCard = () => {
  const { t } = useText()

  return (
    <div className="border-ash-100 leading-norm mt-1.5 ml-px rounded-lg border border-solid bg-white pb-4 text-sm">
      <div>
        <div className="border-ash-100 flex items-center overflow-hidden rounded-t-lg border-b border-solid">
          <div className="flex-1 px-[15px] py-3">
            <h2>{t('profile.name')}</h2>
            <div className="text-ash-200 my-1">{t('profile.description')}</div>
          </div>
          <div className="flex min-h-40 max-w-40 items-center">
            <div className="m-4 h-full">
              <Image
                src="https://media.graphassets.com/QELOGExSRQabkCCeHvv2"
                alt="Profile Photo"
                width={119}
                height={119}
              />
            </div>
          </div>
        </div>
        <div className="border-ash-100 leading-norm flex items-center border-b border-solid py-2">
          <a href={'https://resume.shaiq.dev'} target="_blank" className="link" rel="noreferrer">
            <span className="text-ash-200 mr-6 ml-[15px] inline-block size-6 align-middle">
              <HiGlobeAsiaAustralia size={24} />
            </span>
            {t('profile.mainLinkText')}
          </a>
        </div>
        <div className="text-ash-300 mt-[13px] mb-1.5 px-[15px]">{t('profile.about')}</div>
        <div className="px-[15px]">
          <div className="font-heading mt-6 text-lg leading-6">
            {t('profile.sections.social.title')}
          </div>
          <SocialProfiles profiles={SOCIAL_PROFILES} />
        </div>
      </div>
    </div>
  )
}
