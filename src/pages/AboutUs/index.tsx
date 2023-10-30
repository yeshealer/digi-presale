import VideoPlayer from '@/components/Core/VideoPlayer'
import React from 'react'

export default function AboutUs() {
    return (
        <div className='w-full flex justify-center py-20 sm:py-32 md:py-40 px-4'>
            <div className='max-w-7xl flex flex-col items-center justify-center gap-10'>
                <div className='text-5xl md:text-6xl xl:text-7xl font-bold text-purple-200 shiny-effect text-center lg:text-start z-10'>About us</div>
                <VideoPlayer />
            </div>
        </div>
    )
}
