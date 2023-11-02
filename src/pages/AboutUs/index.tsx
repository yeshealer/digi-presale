import VideoPlayer from '@/components/Core/VideoPlayer'
import React from 'react'

export default function AboutUs() {

    const playVideo = () => {
        if (typeof document !== 'undefined') {
            (document.getElementById('video_modal') as HTMLDialogElement)?.showModal()
        }
    }

    return (
        <div className='w-full flex justify-center py-20 sm:py-32 md:py-40 px-4'>
            <div className='max-w-7xl flex flex-col items-center justify-center gap-10'>
                <div className='text-5xl md:text-6xl xl:text-7xl font-bold text-purple-200 shiny-effect text-center lg:text-start z-10'>What is DIGI?</div>
                {/* <VideoPlayer /> */}
                <div className='text-lg'>
                    Digi is a revolutionary platform in the cryptocurrency world that simplifies user on-boarding and off-boarding. It ensures a seamless transition from fiat to crypto, leveraging interoperability to enable trading across various blockchain networks. Digi creates a comprehensive ecosystem that integrates gaming, lotteries, farming, liquidity pools, and a launchpad for new crypto projects on all EVM chains, including the newly launched SCF Chain. Digi aims to drive innovation and inclusivity within the blockchain industry, making it a game-changer in the decentralized crypto exchange space. Digi serves as a one-stop hub for all cryptocurrency needs, transcending traditional DEX capabilities and fostering the next generation of blockchain adoption.
                </div>
                <div className='flex flex-col sm:flex-row items-center w-full justify-around gap-4'>
                    <button className="btn btn-primary px-16 w-full sm:w-auto">Whitepaper</button>
                    <button className="btn btn-outline btn-primary px-16 w-full sm:w-auto" onClick={playVideo}>Play Video</button>
                </div>
            </div>
            <dialog id="video_modal" className="modal backdrop-blur">
                <div className="modal-box max-w-max bg-transparent rounded-xl overflow-hidden">
                    <VideoPlayer />
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div >
    )
}
