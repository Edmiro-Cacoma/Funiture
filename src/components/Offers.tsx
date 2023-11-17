

import React from 'react'
import offers from '../utils/offers'
import Image from 'next/image'
import Link from 'next/link'

const Offers = () => {
  return (
      <div className='grid gap-[1.5rem] grid-cols-1 md:grid-cols-3 '>
          {offers.map((item) =>
              <div key={item.id} className='relative overflow-hidden '>
              <Image src={item.image} alt='' width={361} height={250} className='object-cover '/>
              
              <div className='absolute flex flex-col items-center top-32 left-2 transform translate-y-[-50%] '>
                  <span className='text-[1.5rem] text-[#779]'>{item.name}</span>
                      <h3 className='pt-[0.5rem]  text-[1.5rem] text-[#244d4d]'>{item.title}</h3>
                      <Link href='/' className='inline-block my-[1rem] py-[0.3rem] px-[2rem] text-[1rem] bg-[#244d4d] text-white rounded-full cursor-pointer hover:bg-[#316868]'>shop now</Link>
              </div>
          </div>)}
    </div>
  )
}

export default Offers