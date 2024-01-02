import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import FrontPage from "./pages/FrontPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FrontPage/>}/>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>

            </Routes>
        </BrowserRouter>
    );
};

export default App;