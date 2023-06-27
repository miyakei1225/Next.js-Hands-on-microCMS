import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: 20 }}>
      <h1 style={{ color: 'blue' }}>ホーム画面</h1>
      <div>
        <Link href="/about" className="underline">
          Aboutページ
        </Link>
      </div>
      <div>
        <Link href="/ingredients" className="underline">
          食材ページ
        </Link>
      </div>
      <div>
        <Link href="/blog/1" className="underline">
          ブログ
        </Link>
      </div>
    </div>
  )
}
