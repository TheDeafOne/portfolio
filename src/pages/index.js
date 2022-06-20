import React, { useState } from 'react';
import { aboutObj, skillsObj, experienceObj, contactObj } from '../components/InfoSection/Data';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import WelcomeSection from '../components/WelcomeSection';
import InfoSection from '../components/InfoSection';
import Projects from '../components/ProjectsSection';
import Footer from '../components/Footer';

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
        <InfoSection {...aboutObj}/>
        <InfoSection {...skillsObj}/>
        <Projects />
        <InfoSection {...experienceObj}/>
        <InfoSection {...contactObj}/>
        <Footer />
    </>
    )
}

export default Home