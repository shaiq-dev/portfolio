import { NextPageContext } from 'next'
import * as Sentry from '@sentry/nextjs'

import E404 from 'components/Errors/E404'

const Error = ({
  statusCode,
}: {
  __isLayoutDisabled: boolean
  statusCode: number
}) => {
  console.log('Error Occured ', statusCode)
  return <E404 />
}

Error.getInitialProps = async (contextData: NextPageContext) => {
  await Sentry.captureUnderscoreErrorException(contextData)
  return { __isLayoutDisabled: true, statusCode: contextData.res?.statusCode }
}

export default Error
