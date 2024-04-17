import React from 'react'
import { FaStar } from 'react-icons/fa'
import '../App.css'
import Person from '../assets/person.jpg'
import Chair from '../assets/chair.jpg'
import { BiCross } from 'react-icons/bi'
import { HiOutlineXMark } from 'react-icons/hi2'

const ProsSection = () => {
    const data = [
        {
            id:1,
            title: "They're industry leaders",
            desc: "Wix partners are the masterminds behind some of the most successful brands, business and sites on Wix. Whether they are designers, developers or markerters, they're all vetted, trusted leaders in their fields.",
        },
        {
            id:2,
            title: "They're specially selected",
            desc: "Each of our professionals have been pre screened for quality. They're not Wix employees, they're just real people with real skills who want to help you reach your goals",
        },
        {
            id:3,
            title: "They're ready to do heavy lifting",
            desc: "From big projects to small tasks, no matter the brief you can rest assured knowing that they'll deliver.",
        }
    ]
  return (
    <div className='w-full text-white bg-[#007395] py-16'>
        <div className='w-11/12 mx-auto flex flex-row flex-wrap lg:flex-nowrap justify-between gap-x-16'>
            <div className='flex flex-col gap-y-12 w-full lg:w-[30%]'>
                <div className='text-3xl font-semibold'>Who are our pros?</div>

                <div className='flex flex-col gap-y-8'>
                    {
                        data.map((d) => (
                            <div className='flex flex-col gap-y-2'>
                                <div className='text-lg font-bold'>{d.title}</div>
                                <div className=' font-light text-sm'>{d.desc}</div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='flex flex-col gap-y-16 w-full lg:w-[60%]'>
                <div className='flex flex-col items-center gap-y-12 pt-10 lg:pt-0'>
                    <div className='flex flex-row items-baseline w-fit gap-x-2 glass-card px-2 py-1 rounded-lg'>
                        <div className='flex flex-row gap-x-1 items-center'>
                            <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/>
                        </div>
                        <div className='text-sm lg:text-base'>36 Reviews</div>
                        <div className='text-sm lg:text-base'>76 Projects</div>
                    </div>

                    <div className='flex flex-row flex-wrap lg:flex-nowrap justify-between w-full'>
                        <div className='w-full lg:w-[30%] pl-10'>
                            <img src={Person} className='w-full rounded-3xl'/>
                        </div>

                        <div className=' w-full lg:w-1/2 flex flex-col gap-y-5 pt-10 lg:pt-0'>
                            <img src={Chair} className='w-full lg:w-1/2 rounded-xl'/>

                            <div className='glass-card flex flex-col gap-y-3 p-5 w-full lg:w-fit rounded-xl'>
                                <div>Wix G</div>
                                <div className='text-xl font-semibold'>Connecting Your Site</div>
                                <div className='flex flex-col gap-y-1'>
                                    <div className='flex flex-row justify-between items-center text-sm font-light'>
                                        <div>Setting up connections...</div>
                                        <div>50%</div>
                                    </div>

                                    <div className='w-full py-[1px] glass-card relative'>
                                        <div className='w-1/2 bg-blue-600 py-[2px] absolute left-0 top-0 z-10'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-y-12 items-center w-full'>
                    <div className='w-full flex flex-row flex-wrap lg:flex-nowrap justify-between'>
                        <div className='w-full lg:w-[45%] flex flex-row flex-wrap lg:flex-nowrap gap-x-5'>
                            <div></div>

                            <div>
                                <img src={Chair} className='rounded-3xl'/>
                            </div>
                        </div>

                        <div className='flex flex-row flex-wrap lg:flex-nowrap w-full lg:w-[45%] pt-10 lg:pt-0'>
                            <div>
                                <img src={Person} className='rounded-3xl'/>
                            </div>

                            <div className='flex flex-col gap-y-4 lg:gap-y-36 text-sm font-light pt-16'>
                                <div className='glass-card lg:rotate-90 w-[150px] px-2 py-2 rounded-2xl flex flex-row items-center gap-x-2'>
                                    <div>Web Designers</div>
                                    <HiOutlineXMark/>
                                </div>

                                <div className='glass-card lg:rotate-90 w-[150px] px-2 py-2 rounded-2xl flex flex-row items-center gap-x-2'>
                                    <div>Web Designers</div>
                                    <HiOutlineXMark/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-row items-baseline w-fit gap-x-2 glass-card px-2 py-1 rounded-lg'>
                        <div className='flex flex-row gap-x-1 items-center'>
                            <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/>
                        </div>
                        <div className='text-sm lg:text-base'>28 Reviews</div>
                        <div className='text-sm lg:text-base'>53 Projects</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProsSection