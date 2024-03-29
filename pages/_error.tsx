import { NextPageContext } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import { AppStrings } from 'constants/index'
import { GlobalErrorStyle } from 'styles/global'

export type ErrorPageProps = {
  statusCode: number
}

const Error = dynamic(() => import('components/Error'), { ssr: false })

export default function ErrorPage({ statusCode }: ErrorPageProps) {
  return (
    <>
      <GlobalErrorStyle />
      <Head>
        <title>{AppStrings.ERROR_PAGE_HEAD_TITLE}</title>
      </Head>
      <Error
        code={statusCode}
        title={AppStrings.ERROR_PAGE_TITLE}
        description={AppStrings.ERROR_PAGE_OTHER_ERROR_DESCRIPTION}
        kind={AppStrings.ERROR_PAGE_WHAT_WE_KNOW}
      />
    </>
  )
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}
