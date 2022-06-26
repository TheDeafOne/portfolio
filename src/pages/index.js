import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import WelcomeSection from '../components/WelcomeSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import ContactSection from '../components/ContactSection';
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
        <AboutSection name='about' />
        <SkillsSection name='skills' />
        <ProjectsSection name='projects' />
        <ExperienceSection name='experience' />
        <ContactSection name='contact' />
        <Footer />
    </>
    )
}

export default Home