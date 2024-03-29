import './App.css';
import React from 'react';
import Home from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Router>    
                <Routes>
                    <Route exact path='/' element={<Home />} />
                </Routes>  
            </Router>
        </div>
    );
}

export default App;