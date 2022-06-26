import React from 'react'
import {
    
} from './AboutElements'

const InfoSection = () => {
  return (
    <>
        <AboutContainer>
            <Heading>About Me</Heading>
            <AboutWrapper>
                <TextWrapper>
                    <AboutP>
                        There are very few things that allow you to bring imagination to reality; however, programming is one of them. 
                        Since the age of twelve, I have been enamored with the concept of bringing my ideas to life with code. 
                        Using BASIC and some YouTube tutorials, I programmed my first “choose-your-own-adventure game”, thus launching my own adventure into the computer science world.
                    </AboutP>
                    <AboutP>
                        Through my studies at Grove City College, my journey continues. While majoring in computer science, I’m also double minoring in AI/Machine Learning and Datascience. 
                        Over the past two years, I’ve worked at <NavLinkO href='//www.jhuapl.edu/' target='_blank'>one of the largest research centers</NavLinkO>, as well as <NavLinkO href='//www.bentley.com/en' target='_blank'>a leading provider of engineering infrastructure software</NavLinkO>.
                    </AboutP>
                    <AboutP>
                        I’m passionate about learning 
                        <NavLinkS 
                            to="skills"
                            smooth='true'
                            duration={1000}
                            spy={true}
                            exact='true'
                            offset={-80}>
                            software and technologies
                        </NavLinkS> such as ReactJS and BigQuery. 
                        I’ve even tried my hand at building various 
                        <NavLinkS 
                            to="projects"
                            smooth='true'
                            duration={1000}
                            spy={true}
                            exact='true'
                            offset={-80}>
                            desktop and web applications
                        </NavLinkS>.
                    </AboutP>
                </TextWrapper>
                <ImgWrapper>
                    <Img>
                    </Img>
                </ImgWrapper>
            </AboutWrapper>
        </AboutContainer>
    </>
  )
}

export default InfoSection