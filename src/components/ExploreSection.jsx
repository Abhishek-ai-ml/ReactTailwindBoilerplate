import React from 'react'
import Img1 from '../assets/img1.jpg'
import { GoArrowRight } from 'react-icons/go'

const ExploreSection = () => {
    const data = [
        {
            id:1,
            title: "Web Design",
            desc: "New website, mobile site, site redesign and site migration.",
            img:Img1
        },
        {
            id:2,
            title: "Marketing & Promoting",
            desc: "SEO, marketing and advertising, written content and more.",
            img:Img1
        },
        {
            id:3,
            title: "Online Stores",
            desc: "Store optimizations and settings, shipping, payment capabilities and more.",
            img:Img1
        },
        {
            id:4,
            title: "Small Tasks",
            desc: "Analytics, domain, web guidance, updates and more.",
            img:Img1
        },
        {
            id:5,
            title: "Graphic Design",
            desc: "Custom logo, photography, image editing, brand development and more.",
            img:Img1
        },
        {
            id:6,
            title: "Web Development",
            desc: "Database setup, integrations, custom functionalities, code advice and more.",
            img:Img1
        }
    ]
  return (
    <div className='w-full flex flex-col gap-y-14 py-12'>
        <div className='w-11/12 mx-auto flex flex-col gap-y-10'>
            <div className='w-full lg:w-1/2 text-xl lg:text-5xl font-bold'>Explore services for every stage of your business</div>
            <div className=' w-full lg:w-[46%]'>Select services and browse through a curated list of professionals who can help you reach your goals. You can filter matches by location price and language , view thier portfolios and read reviews</div>
        </div>

        <div className='w-full grid grid-cols-2 lg:grid-cols-3'>
            {
                data.map((d) => (
                    <div key={d.id} className={`border-[1px] border-black py-12 ${d.id > 3 ? 'border-b-0' : ''}`}>
                        <div className='w-3/4 lg:w-1/2 flex flex-col mx-auto gap-y-4'>
                            <div className='w-full flex flex-row justify-center'>
                                <img src={d.img} className='w-full'/>
                            </div>
                            
                            <div className='flex flex-col gap-y-2'>
                                <div className='font-bold text-base lg:text-lg'>{d.title}</div>
                                <div className='font-normal text-sm'>{d.desc}</div>
                            </div>
                            
                            <div className='flex flex-row items-center gap-x-1 lg:gap-x-3 underline w-full'>
                                <div className='font-bold text-sm lg:text-base'>Explore More</div>
                                <GoArrowRight/>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ExploreSection