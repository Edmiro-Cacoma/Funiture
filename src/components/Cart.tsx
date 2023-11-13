import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const Cart = () => {
    return (
        <div className='fixed top-0 -right-32 z-1000 bg-white w-[33rem] h-screen p-[2rem] pt-[8rem] overflow-y-scroll active:transition duration-300 ease-linear shadow-custom shopping-cart'>

            <div className='relative flex items-center gap-[1.5rem] mb-[1rem] '>

                <FontAwesomeIcon icon={faTimes} height={30} className="text-[#779] absolute top-[50%] right-[1rem] text-[2rem] cursor-pointer hover:text-teal-700" />

                <Image src="/cart-img-1.jpg" alt='' width={100} height={8 * 16} />
                <div className=''>
                    <h3>morden furniture</h3>
                    <span className="quantity"> 1 </span>
                    <span className="multiply"> x </span>
                    <span className="price"> $140.00 </span>
                </div>
            </div>

        </div>
    )
}

export default Cart