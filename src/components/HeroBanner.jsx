import React from 'react'
import Banner from '../assets/banner.jpg'
import { BsArrowDown } from 'react-icons/bs'
import { FaChevronDown } from 'react-icons/fa'
import '../App.css'

const HeroBanner = () => {
  const data = [
    {
      title: "Web Designer"
    },
    {
      title: "Web Developer"
    },
    {
      title: "Graphic Designer"
    },
    {
      title: "SEO Expert"
    },
    {
      title: "eCommerce Specialist"
    },
    {
      title: "Logo Designer"
    },
  ]
  return (
    <div className='w-full py-24 bg-[#007395] overflow-hidden relative'>
        <div className='w-10/12 mx-auto flex flex-row-reverse lg:flex-row lg:flex-nowrap flex-wrap justify-between'>
          <div className='flex flex-col gap-y-5 w-full lg:w-[45%]'>
            <div className='text-white text-xl lg:text-5xl font-semibold'>Hire a professional agency or freelancer</div>

            <div className='flex flex-row justify-between items-center w-[80%] bg-white px-3 py-2 rounded-2xl'>
              <div>Browse Services</div>
              <FaChevronDown/>
            </div>

            <div className='text-white font-semibold text-lg'>Top requested pros</div>

            <div className='flex flex-row flex-wrap gap-x-3 gap-y-2 text-white w-full '>
              {
                data.map((d) => (<div className='border-[1px] px-3 py-1 border-white rounded-xl'>{d.title}</div>))
              }
            </div>
          </div>

          <div className='relative'>
            <div className='glass-card w-28 h-36'>
              
            </div>
              
           </div>

          {/* <div className='absolute -right-1/4 top-1/4'>
            <img src={Banner} className=' blur-[3px]'/>
          </div> */}
        </div>
    </div>
  )
}

export default HeroBanner