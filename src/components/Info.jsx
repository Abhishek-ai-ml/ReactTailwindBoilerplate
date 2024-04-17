import React from 'react'

const Info = () => {
    const infoData = [
        {
            id:1,
            title: "680K requests",
            desc: "submitted in 2021"
        },
        {
            id:2,
            title: "230 countries",
            desc: "access the Marketplace",
        },
        {
            id:3,
            title: "4.9/5 rating",
            desc: "average client satisfaction"
        }
    ];
  return (
    <div className='w-full bg-gray-200 py-16'>
        <div className='flex flex-row lg:flex-nowrap flex-wrap w-9/12 mx-auto justify-between items-center text-center gap-y-5 md:gap-y-5 lg:gap-y-0'>
            {
                infoData?.map((d) => (
                    <div className='w-full flex flex-row justify-between items-center'>
                        
                        <div className='w-full '>
                            <div className='text-2xl font-bold'>{d.title}</div>
                            <div className='text-sm font-normal'>{d.desc}</div>
                        </div>

                        <div>{d.id === 3 ? <div></div> : <div className='w-[1px] h-[80px] bg-black hidden lg:flex'></div>}</div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Info