import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from  '../pages/Home';
import About from '../pages/About';
import Projets from '../pages/Projets';
import Contact from '../pages/Contact';
import NotFound404 from '../pages/NotFound404';

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/projets" element={<Projets/>}/>
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<NotFound404/>}/>
            </Routes>
        </Router>
    )
}

export default App;