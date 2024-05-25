import {
    LoginFormPage,
} from '@ant-design/pro-components';
import {useNavigate} from 'react-router-dom';
import {message} from "antd";

const Login: React.FC = () => {
    const userAgent = navigator.userAgent;
    const navigate = useNavigate();
    const handleLogin = () => {
        message.info(userAgent)
        navigate('/class') // replace '/some/path' with your desired path
    };
    return (
        <div
            style={{
                backgroundColor: 'white', height: '100vh',
            }}
        >
            <LoginFormPage
                backgroundImageUrl="https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*y0ZTS6WLwvgAAAAAAAAAAAAADml6AQ/fmt.webp"
                logo="https://robin-store.oss-cn-shanghai.aliyuncs.com/boomteam/boomteam_logo.jpg"
                backgroundVideoUrl="https://gw.alipayobjects.com/v/huamei_gcee1x/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr"
                containerStyle={{
                    backgroundColor: 'rgba(0, 0, 0,0.65)',
                    backdropFilter: 'blur(4px)',
                }}
                onFinish={handleLogin}
            />
        </div>

    )
}
export default Login;