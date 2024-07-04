import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <h1>This is an Home page</h1>

      <nav>
        <ul>
          <Link href="/"  > <li> Home</li></Link>
          <Link href="/about"> <li >About</li> </Link>
          <Link href="/contact"> <li>Contact</li> </Link>
          <Link href="/blog"> <li>Blog</li> </Link>
        </ul>
      </nav>
    </div>
  )
}

export default page
