import { NextPageContext } from 'next'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import { AppStrings } from 'constants/index'
import { ErrorPageLogo } from 'styles/_pages.styled'

interface ErrorPageProps {
  statusCode: number
}

const ErrorPage = ({ statusCode }: ErrorPageProps) => {
  const router = useRouter()

  return (
    <>
      <NextLink href="/">
        <ErrorPageLogo />
      </NextLink>
      <p>
        <b>${statusCode}.</b> <ins>That&rsquo;s an error.</ins>
      </p>
      {statusCode === 404 ? (
        <p>
          The requested URL {router.asPath} was not found on this server.{' '}
          <ins>That&rsquo;s all we know.</ins>
        </p>
      ) : (
        <p>
          Something went wrong on this server.{' '}
          <ins>That&rsquo;s all we know.</ins>
        </p>
      )}
    </>
  )
}

ErrorPage.displayName = AppStrings.ERROR_PAGE_DISPLAY_NAME

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default ErrorPage
