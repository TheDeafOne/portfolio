import React from 'react'
import { FaBars } from 'react-icons/fa';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks 
} from './NavbarElements';
const Navbar = () => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    Keegan <br/>Woodburn
                </NavLogo>
                <MobileIcon>
                    <FaBars size={32}/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="home">
                            Home
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="about">
                            About
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="skills">
                            Skills
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="projects">
                            Projects
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="experience">
                            Experience
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact">
                            Contact Me
                        </NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar