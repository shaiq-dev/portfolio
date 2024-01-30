import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'

import { doodleInformation } from 'utils/console'

export default function App({ Component, pageProps }: AppProps) {
  // Console easter eggs
  doodleInformation()

  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
