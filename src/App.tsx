import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Video from './pages/Video';
import Audio from './pages/Audio';
import Login from "./pages/Login";
import Class from "./pages/Class";
import Course from "./pages/Course";
import Gather from "./pages/Gather";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/class" element={<Class/>}/>
                <Route path="/course" element={<Course/>}/>
                <Route path="/gather" element={<Gather/>}/>
                <Route path="/video" element={<Video/>}/>
                <Route path="/audio" element={<Audio/>}/>
            </Routes>
        </Router>
    );
};

export default App;
