"use client"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faTimes, faCartShopping, faUser, faSearch, faBars, } from '@fortawesome/free-solid-svg-icons'
import Navbar from '@/components/Navbar'
import Cart from '@/components/Cart'
import Link from "next/link"
import { useState } from 'react'
import { motion } from 'framer-motion'
import Slideshow from '@/components/SlideShow'



const Header = () => {


   
  const [closerVisible, setCloserVisible] = useState(false)
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);


  const handleCloser = () => {
    setNavbarVisible(false);
    setCartVisible(false);
    setCloserVisible(false);
  };

  const handleBarsIconClick = () => {
    setNavbarVisible(!navbarVisible);
    setCartVisible(false);
    setCloserVisible(true);
  };

  const handleCartIconClick = () => {
    setNavbarVisible(false);
    setCartVisible(!cartVisible);
    setCloserVisible(true); // Show the close icon
  };

  return (
    <>
      <header className=" sticky top-0 left-0 right-0 z-10 flex items-center justify-between gap-10 py-[2rem] px-[9%] bg-[#F6FBF6]">

        <motion.div initial={{ x: -220 }} animate={{ x: 0 }} transition={{ duration: .3 }} >
          <Link href="/" className='text-[1.5rem] font-extrabold text-[#244d4d] flex items-center '>
            <FontAwesomeIcon icon={faLightbulb} height={25} className='pr-[0.3rem]' />Furni
          </Link>
        </motion.div>


        <motion.form initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: .4 }} action="" className='hidden md:flex w-[35rem] h-[3rem] rounded-[5rem] bg-white overflow-hidden  items-center border-[0.1rem] border-solid border-[#244d4d]'>
          <input type="text" placeholder='search here...' id='search here' className='w-full h-full py-0 px-[1.2rem] text-[1rem] text-[#244d4d] normal-case' />
          <label htmlFor="search-box" className='text-[1.2rem] pr-[1.7rem] cursor-pointer text-teal-700 hover:text-[#779]'> <FontAwesomeIcon icon={faSearch} width={30} /></label>

        </motion.form>

        <motion.div initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: .5 }} className='flex items-center justify-between' >

          <div >
            <button type='button' className='ml-[2rem] text-[2.5rem] cursor-pointer text-teal-700 hover:text-[#779] ' onClick={handleBarsIconClick}>
              <FontAwesomeIcon icon={faBars} width={30} />

            </button>

            {navbarVisible ? <Navbar /> : null}
          </div>

          <div>
            <button type='button' className='flex md:hidden ml-[2.5rem] text-[2.5rem] cursor-pointer text-teal-700 hover:text-[#779] ' >
              <FontAwesomeIcon icon={faSearch} width={30} />
            </button>
          </div>

          <div>
            <button type='button' className='ml-[2rem] text-[2.5rem] cursor-pointer text-teal-700 hover:text-[#779] ' onClick={handleCartIconClick}>
              <FontAwesomeIcon icon={faCartShopping} width={30} />
            </button>

            {cartVisible ? <Cart /> : null}
          </div>


          <div>
            <button type='button' className='ml-[2rem] text-[2.5rem] cursor-pointer text-teal-700 hover:text-[#779]'>
              <FontAwesomeIcon icon={faUser} width={30} />
            </button>
          </div>

        </motion.div>


      </header>

      <div>
        {closerVisible ? (<motion.div initial={{ x: 120, rotate: 0 }} animate={{ x: 0, rotate: 360 }} transition={{ duration: .5 }} className='closer' onClick={handleCloser}>
          <FontAwesomeIcon icon={faTimes} width={30} className="text-teal-700 " />
        </motion.div>) : null}
      </div>

      <section className='relative z-[1]'>
       
        <div className='py-[2rem] px-[9%]'>
          <Slideshow slideShow={Slideshow} />
        </div>
      </section>
    </>

  )
}

export default Header