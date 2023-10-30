import { TokenomicsBuyJSON } from '@/components/Constants/Tokenomics'
import Hexagon from '@/components/Core/Hexagon'
import React from 'react'
import { VictoryPie } from 'victory-pie'

export default function Tokenomics() {
    const pieData = [
        { x: "Liquidity", y: 20 },
        { x: "Marketing", y: 40 },
        { x: "Team", y: 20 },
        { x: "Ecosystem Development", y: 20 },
    ]
    const colorScale = ["#CDBDF3", "#36c3fe", "#FDEBB3", "#ACF2C4"]

    return (
        <div className='flex flex-col w-full items-center justify-center pb-20 sm:pb-32 md:pb-40 px-4'>
            <div className='w-full max-w-7xl flex flex-col items-center justify-center'>
                <div className='text-5xl md:text-6xl xl:text-7xl font-bold text-purple-200 shiny-effect text-center lg:text-start z-10'>Tokenomics</div>
                <div className='flex flex-col md:flex-row items-center gap-0 lg:gap-10 w-full'>
                    <div className='max-w-xl xl:max-w-3xl relative w-full'>
                        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-1'>
                            <div className="avatar">
                                <div className="w-32 sm:w-40 lg:w-60 rounded-full">
                                    <img src="./images/logo.png" draggable={false} />
                                </div>
                            </div>
                        </div>
                        <VictoryPie
                            colorScale={colorScale}
                            data={pieData}
                            innerRadius={85}
                            labelPlacement={"vertical"}
                            style={{
                                data: { cursor: 'pointer' },
                                labels: { display: 'none' }
                            }}
                        />
                        <div className='items-center gap-3 absolute top-28 right-16 sm:right-0 bg-purple-900/20 py-2 px-6 rounded-xl border-t-2 border-[#CDBDF3] hidden lg:flex'>
                            <div className='hidden sm:block'>
                                <Hexagon color={'#CDBDF3'} />
                            </div>
                            <div className='text-[15px] lg:text-[17px]'>
                                <div className={`text-[#EEE]`}>Liquidity</div>
                                <div>20%</div>
                            </div>
                        </div>
                        <div className='items-center gap-3 absolute bottom-28 right-16 sm:right-0 bg-purple-900/20 py-2 px-6 rounded-xl border-t-2 border-[#36c3fe] hidden lg:flex'>
                            <div className='hidden sm:block'>
                                <Hexagon color={'#36c3fe'} />
                            </div>
                            <div className='text-[15px] lg:text-[17px]'>
                                <div className={`text-[#EEE]`}>Marketing</div>
                                <div>40%</div>
                            </div>
                        </div>
                        <div className='items-center gap-3 absolute bottom-40 left-16 sm:left-0 bg-purple-900/20 py-2 px-6 rounded-xl border-t-2 border-[#FDEBB3] hidden lg:flex'>
                            <div className='hidden sm:block'>
                                <Hexagon color={'#FDEBB3'} />
                            </div>
                            <div className='text-[15px] lg:text-[17px]'>
                                <div className={`text-[#EEE]`}>Team</div>
                                <div>20%</div>
                            </div>
                        </div>
                        <div className='items-center gap-3 absolute top-24 left-16 sm:left-0 bg-purple-900/20 py-2 px-6 rounded-xl border-t-2 border-[#ACF2C4] hidden lg:flex'>
                            <div className='hidden sm:block'>
                                <Hexagon color={'#ACF2C4'} />
                            </div>
                            <div className='text-[15px] lg:text-[17px]'>
                                <div className={`text-[#EEE]`}>Ecosystem Development</div>
                                <div>20%</div>
                            </div>
                        </div>
                    </div>
                    <div className='divider md:divider-horizontal' />
                    <div className='flex flex-row md:flex-col justify-between gap-3 lg:gap-6 flex-wrap md:flex-nowrap min-w-[270px]'>
                        {TokenomicsBuyJSON.map((tokenomics, index) => {
                            return (
                                <div className='flex gap-3' key={index}>
                                    <Hexagon color={tokenomics.color} />
                                    <div className='text-[17px]'>
                                        <div className={`text-[#798DA3]`}>{tokenomics.label}</div>
                                        <div>{tokenomics.percent}%</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
