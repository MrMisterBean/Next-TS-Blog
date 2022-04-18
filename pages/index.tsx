import type { NextPage } from 'next'
import Head from 'next/head'

import Layout, { siteTitle } from '../components/layout'

const Home: NextPage = () => {
  return (
    <Layout home={true}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className='flex justify-center'>
        <div className='flex flex-col gap-4 max-w-[40%] min-w-[42rem] py-6 text-2xl text-left'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sint
            distinctio, itaque, architecto sunt velit voluptate cupiditate.
          </p>
          <p>
            Corrupti nulla non aut aliquid sapiente totam iusto libero maxime
            officia! Eligendi, porro!
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default Home
