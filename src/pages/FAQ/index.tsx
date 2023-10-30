import VideoPlayer from '@/components/Core/VideoPlayer'
import React from 'react'

export default function FAQ() {
    return (
        <div className='flex flex-col w-full items-center justify-center pb-20 sm:pb-32 md:pb-40 gap-10 px-4'>
            <div className='text-5xl md:text-6xl xl:text-7xl font-bold text-purple-200 shiny-effect text-center lg:text-start'>FAQ</div>
            <div className='max-w-7xl flex flex-col md:flex-row justify-center gap-10'>
                <div className='w-full'>
                    <VideoPlayer />
                </div>
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="checkbox" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            What is Digi?
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="checkbox" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Why Digi?
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="checkbox" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            What is the $DIGI token utility?
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="checkbox" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            What will I get my $DIGI tokens?
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="checkbox" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            When can I start trading $DIGI?
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="checkbox" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            What are the benefits of trading $DIGI?
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}