import React from 'react'
import * as cloudinaryReact from "cloudinary-react";

const { Video, CloudinaryContext }: any = cloudinaryReact;

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