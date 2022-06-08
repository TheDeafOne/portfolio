import React from 'react'
import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink
} from './SidebarElements';

const Sidebar = () => {
  return (
    <SidebarContainer>
        <Icon>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="home">
                    Home
                </SidebarLink>
                <SidebarLink to="about">
                    About
                </SidebarLink>
                <SidebarLink to="skills">
                    Skills
                </SidebarLink>
                <SidebarLink to="projects">
                    Projects
                </SidebarLink>
                <SidebarLink to="experiences">
                    Experience
                </SidebarLink>
                <SidebarLink to="contact">
                    Contact Me
                </SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar