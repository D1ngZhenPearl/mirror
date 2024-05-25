import {Avatar, Card, ConfigProvider, Layout, theme} from "antd";
import {Content, Footer, Header} from "antd/es/layout/layout";
import React from "react";
import {UserOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

const Class: React.FC = () => {
    const navigate = useNavigate();
    const handleCourse = () => {
        navigate('/course') // replace '/some/path' with your desired path
    };
    return (
            <Layout
                style={{
                    minHeight: "100vh",
                    width: "100%", background: '#000',
                    paddingTop: '20px',
                    paddingLeft: '10px',
                    paddingRight: '10px',
                }}
            >
                <h2 style={{color: '#fff'}}>班级选择</h2>
                <Card onClick={handleCourse} style={{width: '100%', marginBottom: '15px'}}>
                    <h2>霹雳舞将江北校区 - 王老师测评课</h2>
                </Card>
                <Card onClick={handleCourse} style={{width: '100%'}}>
                    <h2>霹雳舞将江北校区 -  一对一私教</h2>
                </Card>
            </Layout>
    )
}
export default Class