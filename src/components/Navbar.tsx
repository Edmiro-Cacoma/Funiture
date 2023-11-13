

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import Link from 'next/link'


const Navbar = () => {

  return (
    <div className='w-full bg-[#F6FBF6] h-[60px]'>
      <nav className=' container mx-auto flex justify-between  '>
        <div>
          <Link href="/" className=''>
            <FontAwesomeIcon icon={faLightbulb} height={25} />Furni
          </Link>
        </div>
        <form action="" className=''>
          <input type="text" placeholder='search here...' id='search here' className=''/>
          <label htmlFor="search-box"> <FontAwesomeIcon icon={faSearch} height={25} /></label>
         

        </form>
        <div className='flex justify-between items-center gap-5'>
          <button type="button">
            <FontAwesomeIcon icon={faBars} height={25}/>
          </button>
          <button type="button">
            <FontAwesomeIcon icon={faCartShopping} height={25}/>
          </button>
          <button type="button">
            <FontAwesomeIcon icon={faUser} height={25}/>
        </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar