'use client'

import { usePathname } from 'next/navigation'

import { useText } from '@/hooks'
import { ErrorWrapper } from '@/components/ErrorWrapper'

export const NotFound = () => {
  const { t } = useText()
  const path = usePathname()

  return (
    <>
      <ErrorWrapper
        code={404}
        title={t('errorPage.404.title')}
        description={t('errorPage.404.description', [path])}
        kind={t('errorPage.404.kind')}
      />
    </>
  )
}
