import React, {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";

const Gather: React.FC = () => {
    const navigate = useNavigate();
    const handleVideo = () => {
        navigate('/video') // replace '/some/path' with your desired path
    };
    const videoSrc = 'https://robin-store.oss-cn-shanghai.aliyuncs.com/video/01.mov'
    const videoRef = useRef<HTMLVideoElement>(null);
    return (
        <div>
            <video width='100%'  ref={videoRef} controls autoPlay onClick={handleVideo} onEnded={handleVideo}>
                <source src={videoSrc} type="application/x-mpegURL"/>
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default Gather;