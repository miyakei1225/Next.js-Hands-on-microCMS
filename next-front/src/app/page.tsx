import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link href="/about" className="underline">
        About
      </Link>
      <h1>Home</h1>
    </div>
  )
}
