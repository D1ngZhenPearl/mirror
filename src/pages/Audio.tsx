import React, {useRef, useState} from 'react';
import {Button, Drawer, FloatButton, List, Slider} from "antd";
import {PlayCircleOutlined, VideoCameraOutlined} from "@ant-design/icons";

function extractFileName(url: string): string {
    return url.substring(url.lastIndexOf('/') + 1);
}

const Audio: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [playbackRate, setPlaybackRate] = useState(1.0); // 默认播放速度为1.0
    const videoList = [
        'https://robin-store.oss-cn-shanghai.aliyuncs.com/%E7%BB%83%E4%B9%A037%20-%202024%3A3%3A3%2023.33.mp3',
        'https://robin-store.oss-cn-shanghai.aliyuncs.com/%E7%BB%83%E4%B9%A038_107bpm%20-%202024_3_3%2023.54%201.mp3',
    ];
    const audioRef = useRef<HTMLAudioElement>(null);
    const [videoSrc, setVideoSrc] = useState(videoList[0]);
    const changeAudioSource = (newSrc: string) => {
        if (audioRef.current) {
            audioRef.current.pause();
            setVideoSrc(newSrc);
            audioRef.current.load();
            audioRef.current.play();
            handlePlaybackRateChange(playbackRate)
        }
    };
    const handlePlaybackRateChange = (rate:number) => {
        setPlaybackRate(rate);
        if (audioRef.current) {
            audioRef.current.playbackRate = rate;
        }
    };
    return (
        <div>
            <FloatButton
                onClick={() => setOpen(true)}
                shape="square"
                type="primary"
                style={{right: 94}}
                description="控制音频"
                icon={<VideoCameraOutlined/>}
            />
            <Drawer title="音频列表" onClose={() => setOpen(false)} open={open}>
                音频速度调整
                <Slider
                    defaultValue={1}
                    value={playbackRate}
                    min={0.5}
                    max={2}
                    step={0.1}
                    onChange={handlePlaybackRateChange}
                />

                <List
                    size="large"
                    bordered
                    dataSource={videoList}
                    renderItem={(url) => (
                        <List.Item>
                            {extractFileName(url)}
                            <Button
                                onClick={() => changeAudioSource(url)}
                                style={{marginLeft: 30}}
                                type="primary"
                                icon={<PlayCircleOutlined/>}
                            >
                                播放
                            </Button>
                        </List.Item>
                    )}
                />
            </Drawer>

            <audio ref={audioRef} controls>
                <source src={videoSrc} type="application/x-mpegURL"/>
                Your browser does not support the video tag.
            </audio>
        </div>
    );
};

export default Audio;
