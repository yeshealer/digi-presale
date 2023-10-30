import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

export default function Roadmap() {
    return (
        <div className='w-full flex justify-center pb-20 sm:pb-32 md:pb-40 px-4'>
            <div className='max-w-7xl w-full flex flex-col items-center justify-center gap-10'>
                <div className='text-5xl md:text-6xl xl:text-7xl font-bold text-purple-200 shiny-effect text-center lg:text-start z-10'>Roadmap</div>
                <div className="indicator w-full">
                    <span className="indicator-item indicator-center badge badge-primary z-30">
                        <div className='text-2xl p-3'>Current</div>
                    </span>
                    <div className='w-full flex flex-col md:flex-row items-center relative bg-white/5 border-2 ring-2 ring-offset-2 rounded-xl lg:rounded-full ring-purple-500 border-purple-600 gap-8 lg:gap-16 p-12 lg:p-0 overflow-hidden'>
                        <div className='max-w-lg w-full border-l-4 border-r-2 border-purple-600 rounded-full overflow-hidden relative z-20 hidden lg:block'>
                            <Player
                                autoplay
                                loop
                                src="./lottie/loadmap_purple.json"
                                className='z-0'
                            />
                            <div className='absolute top-5 text-6xl font-bold text-purple-200 shiny-effect left-1/2 -translate-x-1/2'>2023</div>
                        </div>
                        <div className='w-full h-full z-10 flex items-center pr-0 lg:pr-24'>
                            <ul className="w-full space-y-1 lg:space-y-4 text-purple-200 list-disc list-outside dark:text-purple-200 text-lg">
                                <li>Website will be up and running.</li>
                                <li>PRESALE will be conducted.</li>
                                <li>TGE (Token Generation Event) will take place.</li>
                                <li>Aggregator DEX (Decentralized Exchange) will be launched at TGE.</li>
                                <li>Coinmarketcap listing will be pursued once DEX is operational.</li>
                                <li>Staking will be launched 30 days after TGE.</li>
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
                <div className='w-full flex flex-col md:flex-row items-center relative bg-white/5 border-4 rounded-xl lg:rounded-full border-purple-600 gap-8 lg:gap-16 p-12 lg:p-0 overflow-hidden'>
                    <div className='w-full h-full z-10 flex items-center pl-0 lg:pl-24'>
                        <ul className="w-full space-y-0 text-purple-200 list-disc list-outside dark:text-purple-200 text-lg lg:text-base xl:text-lg">
                            <li>Bridge will be launched in two phases:</li>
                            <ul className='list-inside list-decimal'>
                                <li>Phase one will involve standard anyswap integration, which will occur when DEX is operational.</li>
                                <li>Phase two will involve the launch of our own Bridge, which will also connect to a new EVM (Ethereum Virtual Machine) chain, and will occur after month 3.</li>
                            </ul>
                            <li>Aggregator DEX on the new EVM chain will be launched, linked to our Bridge development.</li>
                            <li>Partnership and integration of a gaming platform will occur after month 3.</li>
                            <li>Expansion of Bridge to other EVM Chains will occur after month 3, pending our Bridge development.</li>
                            <li>Launchpad will be launched 2+ months after TGE.</li>
                        </ul>
                    </div>
                    <div className='max-w-lg w-full border-l-4 border-r-2 border-purple-600 rounded-full overflow-hidden relative z-20 hidden lg:block'>
                        <Player
                            autoplay
                            loop
                            src="./lottie/loadmap_purple.json"
                            className='z-0'
                        />
                        <div className='absolute top-5 text-6xl font-bold text-purple-200 shiny-effect left-1/2 -translate-x-1/2'>2024</div>
                    </div>
                    <div className='w-full overflow-hidden absolute z-0 block lg:hidden opacity-20 right-0 bottom-0 sm:bottom-auto top-auto sm:-top-1/2'>
                        <Player
                            autoplay
                            loop
                            src="./lottie/loadmap_purple.json"
                            className='z-0 w-full'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
