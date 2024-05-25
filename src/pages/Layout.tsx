import React, {useState} from 'react';
import {Outlet} from 'react-router-dom';
import {FullScreen, useFullScreenHandle} from "react-full-screen";
import {FullscreenExitOutlined} from "@ant-design/icons";
import {Button} from "antd";

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
            <Button
                style={{zIndex: 100, position: 'absolute', right: '10px', top: '10px'}}
                shape="circle"
                size='large'
                ghost
                onClick={handleClick}
            >
                <FullscreenExitOutlined/>
            </Button>
            <Outlet/>
        </FullScreen>
    );
};

export default Layout;