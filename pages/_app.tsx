import type { AppProps } from 'next/app'

import GlobalStyle from 'styles/global'
import HomeLayout from 'layout/index'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <HomeLayout>
        <Component {...pageProps} />
      </HomeLayout>
    </>
  )
}
