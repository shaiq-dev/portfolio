import type { AppProps } from 'next/app'

import GlobalStyle from 'styles/global'
import GlobalErrorStyle from 'styles/global.errors.styled'
import HomeLayout from 'layout/index'

export default function App({ Component, pageProps }: AppProps) {
  console.log(pageProps)

  // Error page is not wrapped with layout
  if (pageProps.__isLayoutDisabled) {
    return (
      <>
        <GlobalErrorStyle />
        <Component {...pageProps} />
      </>
    )
  }

  return (
    <>
      <GlobalStyle />
      <HomeLayout>
        <Component {...pageProps} />
      </HomeLayout>
    </>
  )
}
