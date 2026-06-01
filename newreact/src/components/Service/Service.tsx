import React from 'react'
import { Services } from '../../constant/Service'

const Service = () => {
    return (
        <div className='py-14 lg:py-16 dark:bg-gray-900'>
            <div className='container'>
                <div className='mb-14 '>
                    <span className='section-btn '>Our Categories</span>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mt-6 dark:text-white'>Shop By <span className='text-primary'>Category</span></h1>
                </div>

                <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 '>
                    {Services.map((item) => (
                        <div key={item.id} className='dark:bg-black p-4 duration-300 lg:p-8 space-y-4 rounded-xl lg:rounded-2xl hover:border hover:border-primary
                       group '>
                            <div className='h-12 w-12 lg:h-16 lg:w-16 bg-primary/10 group-hover:bg-primary flex justify-center items-center rounded-xl lg:rounded-2xl'>
                                <item.icon className='text-primary group-hover:text-white'/>
                            </div>
                            <h1 className='font-bold lg:text-xl dark:text-white '>{item.title}</h1>

                            <div>
                                <span className='text-xl lg:text-3xl font-bold text-primary'>{item.price}</span>
                                <span className='text-gray-500 text-xs lg:text-sm'>{item.duration}</span>
                            </div>

                            <ul className='space-y-2'>
                                {item.description.map((des, index) => (
                                    <li key={index} className='flex items-center gap-2 md:gap-3 dark:text-white'>
                                        
                                        <span className='h-5 w-5 bg-primary/10 flex items-center justify-center rounded-full'>
                                        <span className='h-1.5 w-1.5 bg-primary rounded-full'></span>
                                        </span>
                                        {des}</li>
                                ))}
                            </ul>
                            <button className='primary-btn w-full'>shop now</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Service