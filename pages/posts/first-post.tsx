import Link from "next/link"

const FirstPost = () => {
  return (
    <>
      <h1 className="text-red-500 text-3xl">First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}

export default FirstPost