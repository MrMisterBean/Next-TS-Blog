import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout'

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src='https://connect.facebook.net/en_US/sdk.js'
        strategy='lazyOnload'
        onLoad={() =>
          console.log('script loaded crorectly, window.FB has been populated')
        }
      />
      <h1 className='text-3xl'>First Post</h1>
    </Layout>
  )
}

export default FirstPost
