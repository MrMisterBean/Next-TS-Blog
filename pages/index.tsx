import type { NextPage } from 'next'
import Head from 'next/head'

import Layout, { siteTitle } from '../components/layout'

const Home: NextPage = () => {
  return (
    <Layout home={true}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>[Your Self Introduction]</p>
      </section>
    </Layout>
  )
}

export default Home
