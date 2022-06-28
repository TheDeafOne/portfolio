import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks 
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 60) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
    <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        Keegan Woodburn
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                                to="about"
                                smooth='true'
                                duration={1000}
                                spy={true}
                                exact='true'
                                offset={-60}>
                                About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to="skills"
                                smooth='true'
                                duration={1000}
                                spy={true}
                                exact='true'
                                offset={-60}>
                                Skills
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to="projects"
                                smooth='true'
                                duration={1000}
                                spy={true}
                                exact='true'
                                offset={-60}>
                                Projects
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to="experience"
                                smooth='true'
                                duration={1000}
                                spy={true}
                                exact='true'
                                offset={-60}>
                                Experience
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to="contact"
                                smooth='true'
                                duration={1000}
                                spy={true}
                                exact='true'
                                offset={-60}>
                                Contact Me
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    </>
  )
}

export default Navbar