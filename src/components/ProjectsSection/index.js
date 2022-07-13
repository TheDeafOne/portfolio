import React, { useState } from 'react';
import { TDAC, RSnail, HappyFeet } from '../../images';
import {
    ProjectsContainer,
    ProjectsWrapper,
    ProjectsH1,
    ProjectsH2,
    ProjectTitle,
    ProjectP,
    ProjectInfo,
    ProjectImage,
    ProjectCard,
    ProjectFront,
    ProjectBack
} from './ProjectElements';

const Projects = () => {
    const [toggleOpen, setToggleOpen] = useState(false);

    const handleOpenProject = (event) => {
        console.log(event);
        setToggleOpen(!toggleOpen);
        // event.target.
    }
  return (
    <ProjectsContainer id="projects">
        <ProjectsH1>Projects</ProjectsH1>
        <ProjectsH2>Some personal projects I've worked on in my free time</ProjectsH2>
        <ProjectsWrapper>
            <ProjectCard toggleOpen={+toggleOpen}>
                <ProjectBack>hello</ProjectBack>
                <ProjectFront onClick={handleOpenProject}>
                    <ProjectImage src={TDAC} />
                    <ProjectInfo toggleOpen={+toggleOpen}>
                        <ProjectTitle>
                            TDGOL
                        </ProjectTitle>
                        <ProjectP>
                            An application for visualizing and manipulating cellular automata in three dimensions
                        </ProjectP>
                    </ProjectInfo>
                </ProjectFront>
            </ProjectCard>
            <ProjectFront>
                <ProjectImage src={RSnail} />
                <ProjectInfo>
                    <ProjectTitle>
                        CrimsonSnail
                    </ProjectTitle>
                    <ProjectP>
                        An application for visualizing and manipulating cellular automata in three dimensions
                    </ProjectP>
                </ProjectInfo>
            </ProjectFront>
            <ProjectFront>
                <ProjectImage src={HappyFeet} />
                <ProjectInfo>
                    <ProjectTitle>
                        HappyFeet
                    </ProjectTitle>
                    <ProjectP>
                        An application for visualizing and manipulating cellular automata in three dimensions
                    </ProjectP>
                </ProjectInfo>
            </ProjectFront>
            <ProjectFront>
                <ProjectImage src={TDAC} />
                <ProjectInfo>
                    <ProjectTitle>
                        TDGOL
                    </ProjectTitle>
                    <ProjectP>
                        An application for visualizing and manipulating cellular automata in three dimensions
                    </ProjectP>
                </ProjectInfo>
            </ProjectFront>
            <ProjectFront>
                <ProjectImage src={TDAC} />
                <ProjectInfo>
                    <ProjectTitle>
                        TDGOL
                    </ProjectTitle>
                    <ProjectP>
                        An application for visualizing and manipulating cellular automata in three dimensions
                    </ProjectP>
                </ProjectInfo>
            </ProjectFront>
            <ProjectFront>
                <ProjectImage src={TDAC} />
                <ProjectInfo>
                    <ProjectTitle>
                        TDGOL
                    </ProjectTitle>
                    <ProjectP>
                        An application for visualizing and manipulating cellular automata in three dimensions
                    </ProjectP>
                </ProjectInfo>
            </ProjectFront>
        </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects