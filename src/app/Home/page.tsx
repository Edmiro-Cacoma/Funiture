"use client"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Navbar from '@/components/Navbar'
import Link from "next/link"
import { useState } from 'react'


const Header = () => {
  const [closerVisible, setCloserVisisble] = useState(true)
  const [navbarVisible, setNavbarVisible] = useState(true);


  const handleCloser = () => {
    setCloserVisisble(!closerVisible);
    setNavbarVisible(!navbarVisible);
  }

  return (
    <>
      <header className=" sticky top-0 left-0 right-0 z-100 flex items-center justify-between gap-10 py-[2rem] px-[9%] bg-[#F6FBF6]">

        <Link href="/" className='text-[1.5rem] font-extrabold text-[#244d4d] flex items-center '>
          <FontAwesomeIcon icon={faLightbulb} height={25} className='pr-[0.3rem]' />Furni
        </Link>

        <form action="" className='hidden md:flex w-[35rem] h-[3rem] rounded-[5rem] bg-white overflow-hidden  items-center border-[0.1rem] border-solid border-[#244d4d]'>
          <input type="text" placeholder='search here...' id='search here' className='w-full h-full py-0 px-[1.2rem] text-[1rem] text-[#244d4d] normal-case' />
          <label htmlFor="search-box" className='text-[1.2rem] pr-[1.7rem] cursor-pointer text-teal-700 hover:text-[#779]'> <FontAwesomeIcon icon={faSearch} width={30} /></label>

        </form>

        <div className='flex' >

          <div>
            <button type='button' className='ml-[2rem] text-[2.5rem] cursor-pointer text-teal-700 hover:text-[#779] ' onClick={handleCloser}>
              <FontAwesomeIcon icon={faBars} width={30} />

            </button>

            {navbarVisible ? <Navbar /> : null}
          </div>
         
          <button type='button' className='flex md:hidden ml-[2rem] text-[2.5rem] cursor-pointer text-teal-700 hover:text-[#779] ' >
            <FontAwesomeIcon icon={faSearch} />
          </button>

          <button type='button' className='ml-[2rem] text-[2.5rem] cursor-pointer text-teal-700 hover:text-[#779] '>
            <FontAwesomeIcon icon={faCartShopping} width={30} />
          </button>

          <button type='button' className='ml-[2rem] text-[2.5rem] cursor-pointer text-teal-700 hover:text-[#779]'>
            <FontAwesomeIcon icon={faUser} width={30} />
          </button>
        </div>


      </header>

      {closerVisible ? (<div className='closer' onClick={handleCloser}>
        <FontAwesomeIcon icon={faTimes} width={30} className="text-teal-700 z-10000" />
      </div>) : null}

      {navbarVisible ? <Navbar /> : null}
    </>

  )
}

export default Header