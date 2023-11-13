"use client"

import { useState } from 'react'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'


const Menu = () => {

    const links = [
        { id: 1, title: "Homepage", url: "/" },
        { id: 1, title: "Menu", url: "/" },
        { id: 1, title: "Working hours", url: "/" },
        { id: 1, title: "contact", url: "/" },
        { id: 1, title: "login", url: "/" },
        { id: 1, title: "cart", url: "/" }]

    const [open, setOpen] = useState(false)
    const user = false
    return (
        <div className='cursor-pointer'>
            {!open ? (<Image src="/open.png" alt='' width={20} height={20} onClick={() => setOpen(true)} />) :
                (<Image src="/close.png" alt='' width={20} height={20} onClick={() => setOpen(false)} />)}

           {open && <div className='bg-red-500 text-white absolute left-0 top-24 uppercase flex flex-col items-center justify-center gap-8 z-10 text-3xl w-full h-[calc(100vh-6rem)] '>

                {links.map(item => (<Link key={item.id} onClick={() => setOpen(false)} href={item.url}>{item.title}</Link>))}

                {!user ? (<Link href="/" onClick={() => setOpen(false)}>Login</Link>) :
                    (<Link href="/" onClick={() => setOpen(false)}>Orders</Link>)}
                
                <Link href="/cart" onClick={() => setOpen(false)}>
                    <CartIcons />
                </Link>
            </div>}
        </div>
    )
}

export default Menu