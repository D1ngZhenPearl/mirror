import {
    LoginFormPage,
} from '@ant-design/pro-components';
import {useNavigate} from 'react-router-dom';
import {FullscreenExitOutlined, FullscreenOutlined} from "@ant-design/icons";
import {Button} from "antd";
import {useEffect, useState} from "react";
import {FullScreen, useFullScreenHandle} from "react-full-screen";

const Login: React.FC = () => {
    const handle = useFullScreenHandle();
    const [fullScreen, setFullScreen] = useState(false);

    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/class') // replace '/some/path' with your desired path
    };
    return (
        <FullScreen handle={handle}>
            <div
                style={{
                    backgroundColor: 'white', height: '100vh',
                }}
            >
                <Button
                    type="text"
                    onClick={handle.enter}
                >
                    <FullscreenExitOutlined/>
                </Button>

                <LoginFormPage
                    backgroundImageUrl="https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*y0ZTS6WLwvgAAAAAAAAAAAAADml6AQ/fmt.webp"
                    logo="https://robin-store.oss-cn-shanghai.aliyuncs.com/boomteam/boomteam_logo.jpg"
                    backgroundVideoUrl="https://gw.alipayobjects.com/v/huamei_gcee1x/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr"
                    containerStyle={{
                        backgroundColor: 'rgba(0, 0, 0,0.65)',
                        backdropFilter: 'blur(4px)',
                    }}
                    onFinish={handleLogin}
                >
                </LoginFormPage>
            </div>
        </FullScreen>

    )
}
export default Login;