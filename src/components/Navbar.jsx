import React from 'react'
import { FaAngleDown } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='mx-auto flex flex-row justify-between items-center'>
        <div className='flex flex-row gap-x-5 pl-5 justify-center items-baseline'>
            <div className='lg:text-2xl text-sm'>
                WIXMarketplace
            </div>

            <div className=' flex-row items-center gap-x-1 hidden md:flex'>
                <div>All Services</div>
                <FaAngleDown/>
            </div>

            <div className=''>Get Hired</div>
        </div>

        <div className='bg-black text-white p-1 md:p-2 lg:p-5 hidden md:flex lg:flex'>Find a Professional</div>
    </div>
  )
}

export default Navbar