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
      <h1 className='pt-12 text-4xl font-bold text-center'>First Post</h1>
      <section className='flex justify-center'>
        <p className='flex flex-col gap-4 max-w-[40%] min-w-[42rem] py-6 text-2xl text-left'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatem, doloremque, quia quibusdam quisquam dolorum, quidem
          voluptatibus, quam doloremque quisquam.
        </p>
      </section>
    </Layout>
  )
}

export default FirstPost
