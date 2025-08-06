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
    <div className="ml-px mt-1.5 rounded-lg border border-solid border-ash-100 bg-white pb-4 text-sm leading-norm">
      <div>
        <div className="flex items-center overflow-hidden rounded-t-lg border-b border-solid border-ash-100">
          <div className="flex-1 px-[15px] py-3">
            <h2>{t('profile.name')}</h2>
            <div className="my-1 text-ash-200">{t('profile.description')}</div>
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
        <div className="flex items-center border-b border-solid border-ash-100 py-2 leading-norm">
          <a href={'https://resume.shaiq.dev'} target="_blank" className="_link" rel="noreferrer">
            <span className="ml-[15px] mr-6 inline-block size-6 align-middle text-ash-200">
              <HiGlobeAsiaAustralia size={24} />
            </span>
            {t('profile.mainLinkText')}
          </a>
        </div>
        <div className="mb-1.5 mt-[13px] px-[15px] text-ash-300">{t('profile.about')}</div>
        <div className="px-[15px]">
          <div className="mt-6 font-heading text-lg leading-6">
            {t('profile.sections.social.title')}
          </div>
          <SocialProfiles profiles={SOCIAL_PROFILES} />
        </div>
      </div>
    </div>
  )
}
