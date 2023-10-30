import CopyIcon from '@/components/Icons/Copy'
import React from 'react'

export default function Referral() {
    return (
        <div className='flex flex-col w-full items-center justify-center pb-20 sm:pb-32 md:pb-40 gap-10 px-4'>
            <div className='text-5xl md:text-6xl xl:text-7xl font-bold text-purple-200 shiny-effect text-center lg:text-start'>Referral</div>
            <div className="mockup-window border border-base-300 w-full max-w-7xl">
                <div className="flex flex-col md:flex-row items-center gap-4 p-4 sm:p-8 md:p-12 lg:p-16 border-t border-base-300">
                    <div className='text-purple-200 w-full md:w-1/2'>
                        <div>Your Referrers Deposit: <span className='text-lg font-bold text-purple-400'>1000</span> USDT</div>
                        <div>Your Referral Bonus: <span className='text-lg font-bold text-purple-400'>50</span> USDT</div>
                        <div>Your Withdrawn Bonus: <span className='text-lg font-bold text-purple-400'>50</span> USDT</div>
                    </div>
                    <div className='divider divider-horizontal hidden md:block' />
                    <div className="form-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text">Your referral Link</span>
                            <span className="label-text-alt flex items-center gap-1 cursor-pointer hover:text-white transition-all">Copy <CopyIcon /></span>
                        </label>
                        <input type="text" placeholder="Your referral link" className="input input-bordered w-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}
