import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        {/* <h1 className={styles.title}>
          Learn <a href="https://nextjs.org">Next.js!</a>
        </h1> */}

        <h1 className='p-24 pb-6 font-bold text-center text-7xl text-bold'>
          Read{' '}
          <Link href="/posts/first-post">
            <a className='text-blue-600'>this page!</a>
          </Link>
        </h1>

        <p className='text-2xl font-semibold text-center font-'>
          Get started by editing{' '}
          <code className='p-2 text-xl rounded-lg bg-neutral-50' >pages/index.tsx</code>
        </p>

        <div className='grid-container'>
          <a className='grid-item' href="https://nextjs.org/docs">
            <h2 className='grid-item-header'>Documentation &rarr;</h2>
            <p className='grid-item-content'>Find in-depth information about Next.js features and API.</p>
          </a>

          <a className='grid-item' href="https://nextjs.org/learn">
            <h2 className='grid-item-header'>Learn &rarr;</h2>
            <p className='grid-item-content'>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a className='grid-item' href="https://github.com/vercel/next.js/tree/canary/examples">
            <h2 className='grid-item-header'>Examples &rarr;</h2>
            <p className='grid-item-content'>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a className='grid-item' href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <h2 className='grid-item-header'>Deploy &rarr;</h2>
            <p className='grid-item-content'>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
