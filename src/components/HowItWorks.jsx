import React from 'react'

const HowItWorks = () => {
    const data = [
        {
            id:1,
            title:"Find a professional",
            desc: "Browse services, portfolios, and client reviews and then correct with agencies and freelancers you'd like to work with. You can also fill out of a form and get matched with providers that fit your needs",
        },
        {
            id:2,
            title: "Discuss your needs",
            desc: "Once connected, ask any questions you have to potential providers, outline your project goals and expectations, get feedback and price quotes and review your options.",
        },
        {
            id:3,
            title: "Get your project done",
            desc: "Start working with your pro, set a timeline, payment plan and project details that will help bring your ideas to life.",
        }
    ];
  return (
    <div className='bg-black'>
        <div className='w-11/12 mx-auto py-20 flex flex-col gap-y-12'>
            <div className='text-white text-3xl font-bold'>How it works</div>
            
            <div className='flex flex-row flex-wrap lg:flex-nowrap justify-between text-white w-full'>
                {
                    data.map((d) => (
                        <div className=' w-full lg:w-[30%] flex flex-col gap-y-5'>
                            <div className='text-xl'>{`0${d.id}`}</div>

                            <div className='w-full pb-[1px] bg-white'></div>
                            <div>{d.title}</div>
                            <div className='font-normal'>{d.desc}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default HowItWorks