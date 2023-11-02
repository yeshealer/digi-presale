import { FAQDetail } from '@/components/Constants/FAQ'
import React from 'react'

export default function FAQ() {
    return (
        <div className='flex flex-col w-full items-center justify-center pb-20 sm:pb-32 md:pb-40 gap-10 px-4'>
            <div className='text-5xl md:text-6xl xl:text-7xl font-bold text-purple-200 shiny-effect text-center lg:text-start'>FAQ</div>
            <div className='max-w-7xl flex flex-col md:flex-row justify-center gap-10 w-full'>
                <div className="join join-vertical w-full">
                    {FAQDetail.map(item => {
                        return (
                            <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="checkbox" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                    {item.question}
                                </div>
                                <div className="collapse-content">
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}