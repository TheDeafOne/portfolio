import React from 'react';
import { TDAC, RSnail } from '../../images';
import {
    ProjectsContainer,
    ProjectsWrapper,
    ProjectsH1,
    ProjectTitle,
    ProjectP,
    ProjectInfo,
    ProjectImage,
    ProjectCard
} from './ProjectElements';

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
        <ProjectsH1>Projects</ProjectsH1>
        <ProjectsWrapper>
            <ProjectCard>
                <ProjectImage src={TDAC} />
                <ProjectInfo>
                    <ProjectTitle>
                        TDGOL
                    </ProjectTitle>
                    <ProjectP>
                        An application for visualizing and manipulating cellular automata in three dimensions
                    </ProjectP>
                </ProjectInfo>
            </ProjectCard>
            <ProjectCard>
                <ProjectImage src={RSnail} />
                <ProjectInfo>
                    <ProjectTitle>
                        CrimsonSnail
                    </ProjectTitle>
                    <ProjectP>
                        An application for visualizing and manipulating cellular automata in three dimensions
                    </ProjectP>
                </ProjectInfo>
            </ProjectCard>
        </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects