'use client'

import Link from 'next/link'

import SearchIcon from '@/assets/icons/search.svg'
import { useText, useMounted } from '@/hooks'
import { SearchQuery } from '@/types'

import Section from './Section'

export interface Props {
  searches: SearchQuery[]
}

export const RelatedSearches = ({ searches }: Props) => {
  // TODO: Find a fix for hydration error
  // Using `dangerouslySetInnerHTML` below is causing a hydration error, this is a
  // workaround for now.
  const mounted = useMounted()
  const { t } = useText()

  if (!mounted) {
    return null
  }

  return (
    <Section heading={t('releatedSearches.heading')} withBorder>
      <div>
        <div className="grid grid-cols-[auto_auto] gap-x-4 gap-y-2 pt-7">
          {searches.map((search, idx) => (
            <Link
              key={idx}
              href={search.href}
              className="relative box-border flex max-h-none min-h-12 cursor-pointer items-center rounded-[100px] bg-[#f1f3f4] px-[17px] hover:underline"
            >
              <div className="size-5 bg-none text-[#6f6f70]">
                <SearchIcon fill="currentColor" />
              </div>
              <span
                className="text-heading ml-[26px] line-clamp-2 max-w-[227px] flex-1 text-base"
                dangerouslySetInnerHTML={{
                  __html: search.query_,
                }}
              />
            </Link>
          ))}
        </div>
      </div>
    </Section>
  )
}
