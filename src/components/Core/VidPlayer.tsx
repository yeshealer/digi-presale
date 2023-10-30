import React from 'react'
import { Video, CloudinaryContext } from "cloudinary-react";

export default function VidPlayer(videoref: any) {
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
}