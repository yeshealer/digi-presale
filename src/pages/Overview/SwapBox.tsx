import React from 'react'

export default function SwapBox() {
    return (
        <div className='backdrop-blur bg-white/10 p-2 rounded-xl border border-purple-500'>
            <div className='bg-gradient-to-t from-purple-500/50 to-purple-700/70 text-center px-8 py-4 rounded-xl text-xl xl:text-2xl text-purple-200 font-bold mb-8'>
                Buy $DIGI - Your Token for the Digi
            </div>
            <div className="divider tracking-wider">1 $DIGI = 0.025 USDT</div>
            <div className='flex flex-col items-center'>
                <div className='mt-4 flex items-center justify-center gap-4 w-full'>
                    <div className='flex items-center gap-3 bg-white/30 hover:bg-white/40 transition-all w-full rounded-xl justify-center py-2 cursor-pointer border-2 border-purple-600'>
                        <div className="avatar">
                            <div className="w-8 rounded-full">
                                <img src='./images/token/bnb.png' draggable={false} />
                            </div>
                        </div>
                        <div className='font-semibold'>BNB</div>
                    </div>
                    <div className='flex items-center gap-3 bg-white/30 hover:bg-white/40 transition-all w-full rounded-xl justify-center py-2 cursor-pointer'>
                        <div className="avatar">
                            <div className="w-8 rounded-full">
                                <img src='./images/token/usdt.png' draggable={false} />
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='font-semibold'>USDT</div>
                            <div className='text-xs font-light -mt-1'>BEP20</div>
                        </div>
                    </div>
                </div>
                <div className='mt-4 text-sm'>BNB Balance: 0</div>
            </div>
            <div className="divider" />
            <div className='flex flex-col items-end gap-3 mb-4'>
                <progress className="progress progress-secondary w-full" value="10" max="100"></progress>
                <div className='text-xs text-purple-200'>1000 / 10000 $DIGI Sold out</div>
            </div>
            <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
                <div className='w-full'>
                    <div className='text-sm'>Amount in <span className='font-bold'>BNB</span> you pay</div>
                    <input type="text" placeholder="0" className="input input-bordered input-primary w-full bg-purple-400/40 border-purple-500" />
                </div>
                <div className='w-full'>
                    <div className='text-sm'>Amount in <span className='font-bold'>$DIGI</span> you receive</div>
                    <input type="text" placeholder="0" className="input input-bordered input-primary w-full bg-purple-400/40 border-purple-500" />
                </div>
            </div>
            <button className="btn btn-primary border-purple-500 w-full rounded-xl mt-8">Swap now</button>
        </div>
    )
}
