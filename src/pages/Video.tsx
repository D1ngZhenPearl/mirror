import React, {useRef, useState} from 'react';
import {Button, Drawer, FloatButton, List} from "antd";
import {PlayCircleOutlined, VideoCameraOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

function extractFileName(url: string): string {
    return url.substring(url.lastIndexOf('/') + 1);
}

const Video: React.FC = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/') // replace '/some/path' with your desired path
    };
    const [open, setOpen] = useState(false);

    const videoList = [
        'https://robin-store.oss-cn-shanghai.aliyuncs.com/1544303955-1-192.mp4',
        'https://robin-store.oss-cn-shanghai.aliyuncs.com/547737288-1-16.mp4',
    ];
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoSrc, setVideoSrc] = useState(videoList[0]);
    const changeVideoSource = (newSrc: string) => {
        if (videoRef.current) {
            videoRef.current.pause();
            setVideoSrc(newSrc);
            videoRef.current.load();
            videoRef.current.play();
        }
    };
    return (
        <div  style={{
            width: "100%", background: '#000',
        }}>
            <FloatButton
                onClick={() => setOpen(true)}
                shape="square"
                type="primary"
                style={{position: 'absolute', right: 14, bottom: 400}}
                description="切换视频"
                icon={<VideoCameraOutlined/>}
            />
            <Drawer title="视频列表" onClose={() => setOpen(false)} open={open}>
                <List
                    size="large"
                    bordered
                    dataSource={videoList}
                    renderItem={(url) => (
                        <List.Item>
                            {extractFileName(url)}
                            <Button
                                onClick={() => changeVideoSource(url)}
                                style={{marginLeft: 30}}
                                type="primary"
                                icon={<PlayCircleOutlined/>}
                            >
                                播放
                            </Button>
                        </List.Item>
                    )}
                />
                <Button onClick={handleLogin} style={{width:'100%',marginTop:10}} type='primary'>
                    回到首页
                </Button>
            </Drawer>
            <video width='100%' height="700px" ref={videoRef} controls>
                <source src={videoSrc} type="application/x-mpegURL"/>
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Video;
