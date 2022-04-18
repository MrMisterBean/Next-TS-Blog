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
              priority
              src='/images/profile.jpg'
              height={582 / 4}
              width={808 / 7}
              alt={name}
            />
            <h1>{name}</h1>
            <Link href='posts/first-post'>
              <a> First post! </a>
            </Link>
          </>
        ) : (
          <>
            <Link href='/'>
              <a>
                <Image
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
                <a>{name}</a>
              </Link>
            </div>
            {/* <p>{home} "home" false?</p> */}
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href='/'>
            <a>Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Layout
