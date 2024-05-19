import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Video from './pages/Video';
import Audio from './pages/Audio';
import Login from "./pages/Login";
import Class from "./pages/Class";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/class" element={<Class/>}/>
                <Route path="/video" element={<Video/>}/>
                <Route path="/audio" element={<Audio/>}/>
            </Routes>
        </Router>
    );
};

export default App;
