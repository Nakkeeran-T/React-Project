import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Food from './Register';
import Login from './login';
import Home from './Home';
import About from './About'
import Contact from './Contact'


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Food />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact/>} />
                
            </Routes>
        </Router>
    );
}

export default App;