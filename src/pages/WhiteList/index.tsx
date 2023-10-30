import React from 'react'

export default function WhiteList() {
    return (
        <div className='flex flex-col w-full items-center justify-center pb-20 sm:pb-32 md:pb-40 gap-10 px-4'>
            <div className='text-5xl md:text-6xl xl:text-7xl font-bold text-purple-200 shiny-effect text-center lg:text-start'>WhiteList</div>
            <div className="mockup-window border border-base-300 w-full max-w-7xl">
                <div className="flex flex-col items-center gap-4 p-4 sm:p-8 md:p-12 lg:p-16 border-t border-base-300">
                    <div className='flex flex-col sm:flex-row justify-center w-full gap-4'>
                        <input type="text" placeholder="Input your wallet address to be whitelisted" className="input input-bordered w-full" />
                        <button className="btn btn-primary">WhiteList</button>
                    </div>
                    <div className='text-center text-sm md:text-base'>
                        Please provide your wallet address for whitelisting. You can see the result here in few hours.
                    </div>
                </div>
            </div>
        </div>
    )
}
