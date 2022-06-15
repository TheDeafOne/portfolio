import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import WelcomeSection from '../components/WelcomeSection';
import InfoSection from '../components/InfoSection';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
    <>
        <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <WelcomeSection />
        <InfoSection />
    </>
    )
}

export default Home