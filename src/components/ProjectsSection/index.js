import React from 'react'
import Icon1 from '../../images/dellingussy.jpg';
import Icon2 from '../../images/dellingussy.jpg';
import Icon3 from '../../images/dellingussy.jpg';
import {
    ProjectsContainer,
    ProjectsWrapper,
    ProjectsH1,
    ProjectsH2,
    ProjectsP,
    ProjectCard,
    ProjectsIcon
} from './ProjectElements';

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
        <ProjectsH1>Projects</ProjectsH1>
        <ProjectsWrapper>
            <ProjectCard>
                <ProjectsIcon src={Icon1}/>
                <ProjectsH2>piss</ProjectsH2>
                <ProjectsP>we be pissing</ProjectsP>
            </ProjectCard>
            <ProjectCard>
                <ProjectsIcon src={Icon2}/>
                <ProjectsH2>shit</ProjectsH2>
                <ProjectsP>we be shitting</ProjectsP>
            </ProjectCard>
            <ProjectCard>
                <ProjectsIcon src={Icon3}/>
                <ProjectsH2>fuck</ProjectsH2>
                <ProjectsP>we be fucking</ProjectsP>
            </ProjectCard>
        </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects