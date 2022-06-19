import React, { useState } from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour,  homeObjFive} from '../components/InfoSection/Data';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import WelcomeSection from '../components/WelcomeSection';
import InfoSection from '../components/InfoSection';
import Projects from '../components/ProjectsSection';

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
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjThree}/>
        <Projects />
        <InfoSection {...homeObjFour}/>
        <InfoSection {...homeObjFive}/>
    </>
    )
}

export default Home