import React from 'react'

export default function ContactUs() {
    return (
        <div className='flex flex-col w-full items-center justify-center pb-20 sm:pb-32 md:pb-40 gap-10 px-4'>
            <div className='text-5xl md:text-6xl xl:text-7xl font-bold text-purple-200 shiny-effect text-center lg:text-start'>Contact us</div>
            <div className="mockup-window border border-base-300 w-full max-w-7xl">
                <div className="flex flex-col items-center gap-4 p-4 sm:p-8 md:p-12 lg:p-16 border-t border-base-300">
                    <div className='text-center text-sm md:text-base'>
                        Our team will respond within 1-2 days.
                    </div>
                    <div className='flex flex-col justify-center w-full gap-4'>
                        <div className='w-full flex flex-col md:flex-row items-center gap-4'>
                            <input type="text" placeholder="Your first name" className="input input-bordered w-full" />
                            <input type="text" placeholder="Your Last name" className="input input-bordered w-full" />
                        </div>
                        <input type="text" placeholder="Your mail" className="input input-bordered w-full" />
                        <textarea className="textarea textarea-bordered text-base" rows={5} placeholder="Message"></textarea>
                        <button className='btn btn-primary'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
