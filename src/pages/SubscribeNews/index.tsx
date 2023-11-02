import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

export default function SubscribeNewsLetter() {
    return (
        <div className='flex flex-col w-full items-center justify-center pb-20 sm:pb-32 md:pb-40 gap-10 px-4'>
            <div className="mockup-window border border-base-300 w-full max-w-7xl">
                <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-20 md:gap-4 p-4 md:p-8 lg:p-12 border-t border-base-300">
                    <div className='w-full md:w-1/2'>
                        <div className='flex justify-center items-center gap-4'>
                            <div className="avatar">
                                <div className="w-16 sm:w-20 rounded-full">
                                    <img src="./images/logo.png" draggable={false} />
                                </div>
                            </div>
                            <div className='text-3xl sm:text-4xl font-black tracking-widest text-purple-200'>Digi</div>
                        </div>
                        <div className='text-base md:text-lg xl:text-xl text-purple-200 shiny-effect text-center mt-4'>Subscribe to our NewsLetter</div>
                        <div className='w-full mt-6'>
                            <div className="join w-full">
                                <input className="input input-bordered join-item w-full rounded-full" placeholder="E-mail" />
                                <button className="btn join-item btn-primary rounded-full">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
