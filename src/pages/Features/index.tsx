import { FeaturesText } from '@/components/Constants/Features'
import React from 'react'

export default function Features() {
    return (
        <div className='flex flex-col w-full items-center justify-center pb-20 sm:pb-32 md:pb-40 gap-10 px-4'>
            <div className='text-5xl md:text-6xl xl:text-7xl font-bold text-purple-200 shiny-effect text-center lg:text-start'>Features of DIGI</div>
            <div className='w-full max-w-7xl'>
                <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full justify-between gap-4'>
                    {FeaturesText.map(item => (
                        <div className='flex flex-col items-center' key={item.title}>
                            <item.icon />
                            <div className='text-xl mt-4 text-center'>{item.title}</div>
                            <div className='text-gray-500 px-4 text-center'>{item.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}