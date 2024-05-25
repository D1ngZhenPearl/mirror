import React, {useRef, useState} from 'react';
import {Button, Card, Divider, Drawer, FloatButton, List, Radio} from "antd";
import {
    HomeOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

const mediaList = [
    {
        type: 'image',
        desc: '上课礼',
        url: 'https://robin-store.oss-cn-shanghai.aliyuncs.com/image/%E5%9D%9A%E6%8C%81%E5%8A%AA%E5%8A%9B%E6%88%91%E6%98%AF%E5%86%A0%E5%86%9B.jpg'
    },
    {
        type: 'video',
        desc: 'respect',
        url: 'https://robin-store.oss-cn-shanghai.aliyuncs.com/video/respect%202.mov'
    },
    {
        type: 'video',
        desc: '热身',
        url: 'https://robin-store.oss-cn-shanghai.aliyuncs.com/video/L2A%20%E7%83%AD%E8%BA%AB3_batch.mov'
    }
];

const Video: React.FC = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/') // replace '/some/path' with your desired path
    };
    const [mediaType, setMediaType] = useState(mediaList[0].type);
    const [mediaSrc, setMediaSrc] = useState(mediaList[0].url);
    const [cardHide, setCardHide] = useState(false);

    const videoRef = useRef<HTMLVideoElement>(null);
    const changeVideoSource = (newSrc: string) => {
        if (videoRef.current) {
            videoRef.current.pause();
            setMediaSrc(newSrc);
            videoRef.current.load();
            videoRef.current.play();
        }
    };
    return (
        <div style={{
            width: "100%", background: '#000',
        }}>
            <MenuFoldOutlined onClick={() => setCardHide(false)}
                              style={{
                                  position: 'absolute',
                                  right: '10px',
                                  top: '350px',
                                  fontSize: 24,
                                  marginLeft: 24
                              }}/>
            <Card style={{
                display: cardHide ? 'none' : 'block',
                position: 'absolute',
                right: 0,
                top: '350px',
                width: '100px'
            }}>
                <HomeOutlined onClick={handleLogin} style={{fontSize: 24, marginLeft: 24, marginBottom: 24}}/>
                <MenuUnfoldOutlined onClick={() => setCardHide(true)} style={{fontSize: 24, marginLeft: 24}}/>
                <Divider/>
                <Button type="text" style={{width: 85}}>课堂启动</Button>
                <Radio.Group onChange={(event: any) => {
                    console.log(event.target.value)
                    setMediaType(event.target.value.type);
                    changeVideoSource(event.target.value.url)
                }} defaultValue={mediaList[0]} buttonStyle="solid">
                    {
                        mediaList.map((item, index) => (
                            <Radio.Button key={index} style={{width: 85}} value={item}>{item.desc}</Radio.Button>
                        ))
                    }
                </Radio.Group>
            </Card>
            <img src={mediaSrc} style={{display: mediaType === 'image' ? 'block' : 'none'}} width='100%'/>
            <video style={{display: mediaType === 'video' ? 'block' : 'none'}} width='100%' ref={videoRef} controls>
                <source src={mediaSrc} type="application/x-mpegURL"/>
                Your browser does not support the video tag.
            </video>


        </div>
    );
};

export default Video;
