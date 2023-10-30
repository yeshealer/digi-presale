import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

export default function SubscribeNewsLetter() {
    return (
        <div className='flex flex-col w-full items-center justify-center pb-20 sm:pb-32 md:pb-40 gap-10 px-4'>
            <div className="mockup-window border border-base-300 w-full max-w-7xl">
                <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-20 md:gap-4 p-4 sm:p-8 md:p-12 lg:p-16 border-t border-base-300">
                    <div className='w-full md:w-1/2'>
                        <div className='text-3xl md:text-4xl xl:text-5xl font-bold text-purple-200 shiny-effect'>Subscribe to our NewsLetter</div>
                        <div className='w-full mt-6'>
                            <div className='flex flex-col sm:flex-row justify-center w-full gap-4'>
                                <input type="text" placeholder="Enter your email" className="input input-bordered w-full" />
                                <button className="btn btn-primary">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 h-[300px] relative'>
                        <Player
                            autoplay
                            loop
                            src="./lottie/subscribe.json"
                            className='w-full h-[567px] absolute top-1/2 -translate-y-1/2'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
