import './App.css';
import React from 'react';
import Home from './pages';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Router>    
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>  
            </Router>
        </div>
    );
}

export default App;