import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import { RoadmapDetail } from '@/components/Constants/Roadmap';

export default function Roadmap() {
    return (
        <div className='w-full flex justify-center pb-20 sm:pb-32 md:pb-40 px-4'>
            <div className='max-w-7xl w-full flex flex-col items-center justify-center gap-10'>
                <div className='text-5xl md:text-6xl xl:text-7xl font-bold text-purple-200 text-center lg:text-start z-10'>Roadmap</div>
                {RoadmapDetail.map((item, index) => {
                    return (
                        <div className="indicator w-full" key={item.period}>
                            {index === 0 && <span className="indicator-item indicator-center badge badge-primary z-30">
                                <div className='text-2xl p-3'>Current</div>
                            </span>}
                            <div className={`w-full flex flex-col md:flex-row items-center relative bg-white/5 border ${index === 0 && `ring ring-offset-1 ring-purple-500`} rounded-xl lg:rounded-full border-purple-600 gap-8 lg:gap-16 p-12 lg:p-0 overflow-hidden`}>
                                <div className='max-w-xs w-full border-l-4 border-r-2 border-purple-600 rounded-full overflow-hidden relative z-20 hidden lg:block'>
                                    <Player
                                        autoplay
                                        loop
                                        src="./lottie/loadmap_purple.json"
                                        className='z-0'
                                    />
                                    <div className='absolute top-5 text-4xl font-bold text-purple-200 left-1/2 -translate-x-1/2'>{item.period}</div>
                                </div>
                                <div className='text-4xl font-bold text-purple-200 text-center block lg:hidden'>{item.period}</div>
                                <div className='w-full h-full z-10 flex items-center pr-0 lg:pr-24'>
                                    <ul className="w-full grid gird-cols-1 md:grid-cols-2 gap-4 text-purple-200 list-disc list-outside dark:text-purple-200 text-lg">
                                        {item.detail.map(detail => (
                                            <li>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='w-full overflow-hidden absolute z-0 block lg:hidden opacity-20 right-0 bottom-0 sm:bottom-auto top-auto sm:-top-1/2'>
                                    <Player
                                        autoplay
                                        loop
                                        src="./lottie/loadmap_purple.json"
                                        className='z-0'
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
