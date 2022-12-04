import { NextPageContext } from 'next'
import NextErrorComponent, { ErrorProps } from 'next/error'
import * as Sentry from '@sentry/nextjs'

const ErrorComponent = (props: ErrorProps) => {
  return <NextErrorComponent statusCode={props.statusCode} />
}

ErrorComponent.getInitialProps = async (contextData: NextPageContext) => {
  await Sentry.captureUnderscoreErrorException(contextData)
  return NextErrorComponent.getInitialProps(contextData)
}

export default ErrorComponent
