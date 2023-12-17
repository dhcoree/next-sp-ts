import Image from 'next/image'

import "./header.scss"

export function Header() {
  return (
    <div className="header">
      <div>
        <h1>Hi, i´m Douglas Henrique! 👋</h1>
        <h2>Front-end | Software Engineer</h2>
      </div>
      <Image
        src="/me.png"
        alt="Vercel Logo"
        width={325}
        height={310}
        priority
      />
    </div>
  )
}