import Head from 'next/head'

import Header from 'components/Header'
import TopNav from 'components/TopNav'

import { HomeLayoutContainer } from './layout.styled'
import Footer from '../components/Footer'

const HomeLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>shaiq kar - Google Search</title>
        <meta
          name="google-site-verification"
          content="ouDVbST3T8-LW94heAgxjwU_cY7m60Qr3z3vkxt7sSU"
        />
      </Head>
      <Header />
      <HomeLayoutContainer>
        <div className="content">
          <div className="sep" />
          <TopNav />
          {children}
        </div>
        <Footer />
      </HomeLayoutContainer>
    </>
  )
}

export default HomeLayout
