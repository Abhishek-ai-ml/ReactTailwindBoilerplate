import React from 'react'
import { FaStar } from 'react-icons/fa'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
import Img from '../assets/img1.jpg'

const Marketplace = () => {
  return (
    <div className='w-full py-12 relative flex flex-col gap-y-16'>
        <div className='flex flex-col w-11/12 lg:w-9/12 mx-auto items-center gap-y-10'>
            <div className='text-lg lg:text-5xl font-bold'>Wix Markeplace user reviews</div>
            <div className='w-full lg:w-3/4 text-center'>"Galaxy is the best. They were super punctual, communicated very well...I recommended if you need some work done these were definitely the guys to do it, the site they made for me is outstanding."</div>

            <div className='flex flex-row justify-between items-center w-full'>
                <div>
                    <GoArrowLeft/>
                </div>

                <div className='text-center flex flex-col gap-y-10'>
                    <div className='flex flex-col gap-y-3'>
                        <div className='flex flex-row gap-x-1 justify-center'>
                            <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/>
                        </div>

                        <div className='font-bold'>Isaiah Christopher Thomas</div>
                    </div>

                    <div>eCommerce Website by Wix Partner <span className='underline'>Galaxy Visual Media</span></div>
                </div>
                
                <div>
                    <GoArrowRight/>
                </div>
            </div>
        </div>

        <div className=' flex flex-row justify-between w-full'>
            <img src={Img} className='w-1/3 absolute -left-52 opacity-40'/>
            <img src={Img} className='w-1/3 mx-auto'/>
            <img src={Img} className='w-1/3 absolute -right-52 opacity-40'/>
        </div>
    </div>
  )
}

export default Marketplace