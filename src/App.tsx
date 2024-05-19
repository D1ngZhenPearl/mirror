import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Video from './pages/Video';
import Audio from './pages/Audio';
import {Layout, Menu} from "antd";
import {Content, Footer, Header} from "antd/es/layout/layout";
import {AudioOutlined, VideoCameraOutlined} from "@ant-design/icons";

const App: React.FC = () => {
    return (
        <Router>
            <Layout className="layout">
                <Header>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<VideoCameraOutlined/>}>
                            <Link to="/">视频播放</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<AudioOutlined/>}>
                            <Link to="/about">音频播放</Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content style={{padding: '0 50px'}}>
                    <div className="site-layout-content" style={{padding: 24, minHeight: 380}}>
                        <Routes>
                            <Route path="/" element={<Video/>}/>
                            <Route path="/about" element={<Audio/>}/>
                        </Routes>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>Ant Design ©2024 Created by Ant UED</Footer>
            </Layout>
        </Router>
    );
};

export default App;
