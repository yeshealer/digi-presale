import React from 'react'
import ThreedotsIcon from '../Icons/Threedots'

export default function Header() {
    return (
        <main className='z-10 absolute w-full px-4 lg:px-12 2xl:px-20 py-5'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <div className="avatar">
                        <div className="w-16 sm:w-20 rounded-full">
                            <img src="./images/logo.png" draggable={false} />
                        </div>
                    </div>
                    <div className='text-3xl sm:text-4xl font-black tracking-widest text-purple-200 shiny-effect'>Digi</div>
                </div>
                <div className='flex items-center gap-2 sm:gap-4 lg:gap-6 text-lg'>
                    <div className='cursor-pointer underline-effect text-purple-200 shiny-effect-sm hidden md:inline-block'>Buy token</div>
                    <div className='cursor-pointer underline-effect text-purple-200 shiny-effect-sm hidden md:inline-block'>Whitelist</div>
                    <div className='cursor-pointer underline-effect text-purple-200 shiny-effect-sm hidden md:inline-block'>Referral</div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <ThreedotsIcon />
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a className='text-lg'>Buy token</a></li>
                            <li><a className='text-lg'>Whitelist</a></li>
                            <li><a className='text-lg'>Referral</a></li>
                            <li><a className='text-lg'>Roadmap</a></li>
                            <li><a className='text-lg'>Tokenomics</a></li>
                            <li><a className='text-lg'>Contact</a></li>
                            <li><a className='text-lg'>FAQ</a></li>
                            <li className='block lg:hidden'><a className='text-lg'>Whitepaper</a></li>
                        </ul>
                    </div>
                    <div className='flex items-center gap-4'>
                        <button className='btn btn-outline border border-purple-200 text-purple-200 hidden lg:block'>Whitepaper</button>
                        <button className='btn btn-md btn-primary border text-purple-200 hidden sm:block'>Connect wallet</button>
                        <button className='btn btn-md btn-primary border text-purple-200 block sm:hidden'>Connect</button>
                    </div>
                </div>
            </div>
        </main>
    )
}
