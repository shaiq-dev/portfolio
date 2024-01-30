import Head from 'next/head'
import styled from 'styled-components'

import SiteHeader from 'components/SiteHeader'
import TopNav from 'components/TopNav'
import Footer from 'components/Footer'
import GlobalStyle from 'styles/global'

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>shaiq kar - Google Search</title>
      </Head>
      <SiteHeader />
      <div style={{ width: '100%' }}>
        <Content>
          <ContentSeperator />
          <TopNav />
          {children}
        </Content>
        <Footer />
      </div>
    </>
  )
}

export const withLayout = <P extends {}>(
  PageComponent: React.ComponentType<P>
) => {
  return (props: P) => (
    <Layout>
      <PageComponent {...props} />
    </Layout>
  )
}

export default Layout

const Content = styled.div`
  padding-top: 20px;
`

const ContentSeperator = styled.div`
  margin: 6px 0 4px;
  height: 65px;
`
