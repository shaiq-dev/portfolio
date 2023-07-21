import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'

import GlobalStyle, { GlobalErrorStyle } from 'styles/global'
import MainLayout from 'layouts/index'
import { AppStrings } from 'constants/index'

export default function App({ Component, pageProps }: AppProps) {
  // Render error pages without any layout
  if (Component.displayName === AppStrings.ERROR_PAGE_DISPLAY_NAME) {
    return (
      <>
        <GlobalErrorStyle />
        <Component {...pageProps} />
        <Analytics />
      </>
    )
  }

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
