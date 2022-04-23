import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const name = 'Bean Blop'
export const siteTitle = 'Next.js Sample Website'

type Props = {
  children: React.ReactNode
  home?: boolean
}

const Layout = ({ children, home }: Props) => {
  return (
    <div>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Learn how to build a personal website using Next.js'
        />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <header className='flex flex-col items-center'>
        {home ? (
          <>
            <Image
              className='rounded-full'
              priority
              src='/images/profile.jpg'
              height={582 / 4}
              width={808 / 7}
              alt={name}
            />
            <h1 className='text-5xl font-bold'>{name}</h1>
          </>
        ) : (
          <>
            <Link href='/'>
              <a>
                <Image
                  className='rounded-full'
                  priority
                  src='/images/profile.jpg'
                  height={582 / 4}
                  width={808 / 7}
                  alt={name}
                />
              </a>
            </Link>
            <div>
              <Link href='/'>
                <a className='text-5xl font-bold'>{name}</a>
              </Link>
            </div>
          </>
        )}
      </header>
      <main className=''>{children}</main>
      {!home ? (
        <Link href='/'>
          <a className='block text-3xl text-center text-blue-600'>
            Back to home! &rarr;
          </a>
        </Link>
      ) : (
        <Link href='posts/first-post'>
          <a className='block text-3xl text-center text-blue-600'>
            First post! &rarr;
          </a>
        </Link>
      )}
    </div>
  )
}

export default Layout
