import { TokenomicsBuyJSON } from '@/components/Constants/Tokenomics'
import Hexagon from '@/components/Core/Hexagon'
import React from 'react'
import { VictoryPie } from 'victory-pie'

export default function Tokenomics() {
    const pieData = TokenomicsBuyJSON.map(item => {
        return {
            x: item.label,
            y: item.percent
        }
    })
    const colorScale = TokenomicsBuyJSON.map(item => item.color)

    return (
        <div className='flex flex-col w-full items-center justify-center pb-20 sm:pb-32 md:pb-40 px-4'>
            <div className='w-full max-w-7xl flex flex-col items-center justify-center'>
                <div className='text-5xl md:text-6xl xl:text-7xl font-bold text-purple-200 shiny-effect text-center lg:text-start z-10'>Tokenomics</div>
                <div className='flex flex-col md:flex-row items-center gap-0 lg:gap-10 w-full'>
                    <div className='max-w-xl xl:max-w-3xl relative w-full'>
                        <VictoryPie
                            colorScale={colorScale}
                            data={pieData}
                            innerRadius={110}
                            labelPlacement={"vertical"}
                            style={{
                                data: { cursor: 'pointer' },
                                labels: { display: 'none' }
                            }}
                        />
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
