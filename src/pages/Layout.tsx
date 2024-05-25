import React, {useState} from 'react';
import {Outlet} from 'react-router-dom';
import {FullScreen, useFullScreenHandle} from "react-full-screen";
import {FullscreenExitOutlined} from "@ant-design/icons";
import {Button, ConfigProvider, theme} from "antd";

function Layout() {
    const handle = useFullScreenHandle();
    const [full, setFull] = useState(false);

    function handleClick() {
        if (full) {
            handle.exit()
            setFull(false)
        } else {
            handle.enter()
            setFull(true)
        }
    }

    return (
        <FullScreen handle={handle}>
            <ConfigProvider theme={{algorithm: theme.darkAlgorithm}}>
                <Button
                    style={{ position: 'absolute', right: '10px', top: '10px'}}
                    onClick={handleClick}
                >
                    <FullscreenExitOutlined/>
                </Button>
                <Outlet/>
            </ConfigProvider>
        </FullScreen>
    );
};

export default Layout;