import {Avatar, Card, ConfigProvider, Layout, theme} from "antd";
import {Content, Footer, Header} from "antd/es/layout/layout";
import React from "react";
import {UserOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

const Course: React.FC = () => {
    const navigate = useNavigate();
    const handleGather = () => {
        navigate('/gather') // replace '/some/path' with your desired path
    };
    return (
            <Layout
                style={{
                    minHeight: "100vh", width: "100%", background: '#000',
                    paddingTop: '20px',
                    paddingLeft: '10px',
                    paddingRight: '10px',
                }}
            >
                <h2 style={{color: '#fff'}}>课程选择</h2>
                <Card onClick={handleGather} title="389 2024/05/22 (今天) 18:00～19:00" style={{width: '100%', marginBottom: '15px'}}>
                    <h2>Hiphop L2B</h2>
                </Card>
                <Card onClick={handleGather} title="390 2024/05/23 (周四) 18:00～19:00" style={{width: '100%', marginBottom: '15px'}}>
                    <h2>Hiphop L2C</h2>
                </Card>
                <Card onClick={handleGather} title="391 2024/05/22 (周五) 18:00～19:00" style={{width: '100%', marginBottom: '15px'}}>
                    <h2>Hiphop L2D</h2>
                </Card>
                <Card onClick={handleGather} title="391 2024/05/23 (周六) 18:00～19:00" style={{width: '100%', marginBottom: '15px'}}>
                    <h2>Hiphop L2-C（TB2.0）</h2>
                </Card>
                <Card onClick={handleGather} title="391 2024/05/24 (周日) 18:00～19:00" style={{width: '100%', marginBottom: '15px'}}>
                    <h2>Hiphop L2-D（TB2.0）</h2>
                </Card>
                <Card onClick={handleGather} title="391 2024/05/25 (周一) 18:00～19:00" style={{width: '100%', marginBottom: '15px'}}>
                    <h2>Hiphop L2-B（TB2.0）</h2>
                </Card>
                <Card onClick={handleGather} title="389 2024/05/22 (今天) 18:00～19:00" style={{width: '100%', marginBottom: '15px'}}>
                    <h2>Hiphop L2B</h2>
                </Card>
                <Card onClick={handleGather} title="390 2024/05/23 (周四) 18:00～19:00" style={{width: '100%', marginBottom: '15px'}}>
                    <h2>Hiphop L2C</h2>
                </Card>
                <Card onClick={handleGather} title="391 2024/05/22 (周五) 18:00～19:00" style={{width: '100%', marginBottom: '15px'}}>
                    <h2>Hiphop L2D</h2>
                </Card>
                <Card onClick={handleGather} title="391 2024/05/23 (周六) 18:00～19:00" style={{width: '100%', marginBottom: '15px'}}>
                    <h2>Hiphop L2-C（TB2.0）</h2>
                </Card>
                <Card onClick={handleGather} title="391 2024/05/24 (周日) 18:00～19:00" style={{width: '100%', marginBottom: '15px'}}>
                    <h2>Hiphop L2-D（TB2.0）</h2>
                </Card>
                <Card onClick={handleGather} title="391 2024/05/25 (周一) 18:00～19:00" style={{width: '100%', marginBottom: '15px'}}>
                    <h2>Hiphop L2-B（TB2.0）</h2>
                </Card>
            </Layout>
    )
}
export default Course