import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
    return (
        <Router>      
            <Sidebar />
            <Navbar />
        </Router>
    );
}

export default App;