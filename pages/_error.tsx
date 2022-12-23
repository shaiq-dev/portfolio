import { NextPageContext } from 'next'
import * as Sentry from '@sentry/nextjs'

import E404 from 'components/Errors/E404'

type Props = {
  __isLayoutDisabled: boolean
  statusCode: number
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Error = (props: Props) => {
  return <E404 />
}

Error.getInitialProps = async (contextData: NextPageContext) => {
  await Sentry.captureUnderscoreErrorException(contextData)
  return { __isLayoutDisabled: true, statusCode: contextData.res?.statusCode }
}

export default Error
