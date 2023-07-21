import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'

import GlobalStyle from 'styles/global'
import MainLayout from 'layouts/index'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
      <Analytics />
    </>
  )
}
