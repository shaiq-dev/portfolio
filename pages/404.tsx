import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import { AppStrings } from 'constants/index'
import { GlobalErrorStyle } from 'styles/global'

const Error = dynamic(() => import('components/Error'), { ssr: false })

export default function Error404() {
  const router = useRouter()

  return (
    <>
      <GlobalErrorStyle />
      <Head>
        <title>{AppStrings.ERROR_PAGE_HEAD_TITLE}</title>
      </Head>
      <Error
        code={404}
        title={AppStrings.ERROR_PAGE_TITLE}
        description={AppStrings.ERROR_PAGE_404_DESCRIPTION.replace(
          '$1',
          router.asPath
        )}
        kind={AppStrings.ERROR_PAGE_WHAT_WE_KNOW}
      />
    </>
  )
}
