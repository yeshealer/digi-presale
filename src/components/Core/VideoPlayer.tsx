import React, { useRef, useEffect } from 'react'
import { Video, CloudinaryContext } from "cloudinary-react";
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

    const VidPlayer = React.memo((videoref: any) => {
        return (
            <CloudinaryContext cloud_name="codedog">
                <Video
                    publicId="videoplayer-demo"
                    width="100%"
                    controls
                    innerref={videoref}
                />
            </CloudinaryContext>
        );
    });

    return (
        <div ref={ref} className='z-10'>
            <VidPlayer videoref={videoref} />
        </div>
    )
}
