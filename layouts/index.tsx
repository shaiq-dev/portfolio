import Head from 'next/head'

import Header from 'components/Header'
import TopNav from 'components/TopNav'
import Footer from 'components/Footer'

import {
  MainLayoutContainer,
  MainLayoutContent,
  MainLayoutSeperator,
} from './_styled'

const MainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>shaiq kar - Google Search</title>
      </Head>
      <Header />
      <MainLayoutContainer>
        <MainLayoutContent>
          <MainLayoutSeperator />
          <TopNav />
          {children}
        </MainLayoutContent>
        <Footer />
      </MainLayoutContainer>
    </>
  )
}

export default MainLayout
