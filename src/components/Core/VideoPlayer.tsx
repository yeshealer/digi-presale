import React, { useRef, useEffect } from 'react'
import VidPlayer from './VidPlayer';
import { useInView } from "react-intersection-observer";

export default function VideoPlayer() {
    const videoref = useRef<any>();
    const { ref, inView } = useInView({
        threshold: 0
    });
    useEffect(() => {
        if (inView === true) {
            videoref.current?.play();
        }
    });

    return (
        <div ref={ref} className='z'>
            <VidPlayer videoref={videoref} />
        </div>
    )
}
