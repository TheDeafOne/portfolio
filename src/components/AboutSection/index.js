import React from 'react'
import {
    AboutContainer,
    Heading,
    AboutWrapper,
    TextWrapper,
    AboutP,
    NavLinkO,
    NavLinkS,
    ImgWrapper,
    Img
} from './AboutElements'
import Icon1 from '../../images/dellingussy.jpg';


const AboutSection = () => {
  return (
    <>
        <AboutContainer id='about'>
            <AboutWrapper>
                <Heading>About Me</Heading>
                {/* <AboutColumn> */}
                    <TextWrapper>
                        <AboutP>
                            Since the age of twelve, I've been enamored with the concept of bringing my imagination to life with code. 
                            Using BASIC and some YouTube tutorials, I programmed my first “choose-your-own-adventure game”, thus launching my own adventure into the computer science world.
                        </AboutP>
                        <AboutP>
                            Through my studies at Grove City College, my journey continues. While majoring in computer science, I’m also double minoring in AI/Machine Learning and Datascience. 
                            Over the past two years, I’ve worked at <NavLinkO href='//www.jhuapl.edu/' target='_blank'>one of the largest research centers</NavLinkO>, as well as <NavLinkO href='//www.bentley.com/en' target='_blank'>a leading provider of infrastructure software</NavLinkO>.
                        </AboutP>
                        <AboutP>
                            I’m passionate about learning <NavLinkS 
                                to="skills"
                                smooth='true'
                                duration={1000}
                                spy={true}
                                exact='true'
                                offset={-60}>
                                software and technologies
                                </NavLinkS> such as ReactJS and BigQuery. 
                            I’ve even tried my hand at building various <NavLinkS 
                                to="projects"
                                smooth='true'
                                duration={1000}
                                spy={true}
                                exact='true'
                                offset={-60}>
                                desktop and web applications
                            </NavLinkS>.
                        </AboutP>
                    </TextWrapper>
                {/* </AboutColumn> */}
                {/* <AboutColumn> */}
                    <ImgWrapper>
                        <Img src={Icon1}/>
                    </ImgWrapper>
                {/* </AboutColumn> */}
            </AboutWrapper>
        </AboutContainer>
    </>
  )
}

export default AboutSection