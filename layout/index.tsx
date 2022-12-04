import Head from 'next/head'

import Header from 'components/Header'
import TopNav from 'components/TopNav'

import { HomeLayoutContainer } from './layout.styled'

const HomeLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>shaiq kar - Google Search</title>
      </Head>
      <Header />
      <HomeLayoutContainer>
        <div className="content">
          <div className="sep" />
          <TopNav />
          {children}
        </div>
      </HomeLayoutContainer>
    </>
  )
}

export default HomeLayout
