

import React from 'react'
import Link from 'next/link'


const Navbar = () => {

  return (
    <nav className="fixed bg-white top-0 -right-32 z-1000 w-[33rem] h-screen flex items-center justify-center flex-col flex-wrap active:transition duration-200 ease-linear shadow-custom">
      <Link href="/">home</Link>
      <Link href="/shop">shop</Link>
      <Link href="/about">about</Link>
      <Link href="/team">team</Link>
      <Link href="/blog">blog</Link>
      <Link href="/contact">contact</Link>
    </nav>
  )
}

export default Navbar