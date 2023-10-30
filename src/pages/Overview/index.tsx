import React from 'react'
import SwapBox from './SwapBox'
import Countdown from './Countdown'
import SocialIcons from './SocialIcons'

export default function Overview() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center z-0 relative bg-overview">
            <div className='w-full min-h-screen h-full flex items-center backdrop-blur px-4 lg:px-12 2xl:px-20'>
                <div className='flex flex-col lg:flex-row justify-between items-center w-full mt-32 lg:mt-0 gap-10'>
                    <div className='flex flex-col items-center lg:items-start gap-6'>
                        <div className='text-5xl md:text-6xl xl:text-7xl font-bold text-purple-200 shiny-effect text-center lg:text-start'>Digi Cryptocurrency</div>
                        <div className='text-4xl md:text-5xl xl:text-6xl font-bold text-purple-200 shiny-effect text-center lg:text-start'>Pre-ICO starts in:</div>
                        <Countdown />
                    </div>
                    <div className='flex flex-col items-center gap-10 lg:mb-0 mb-10'>
                        <SwapBox />
                        <SocialIcons />
                    </div>
                </div>
            </div>
        </main>
    )
}