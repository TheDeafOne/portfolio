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
    ProjectModal,
    ModalTransitionDiv
} from './ProjectElements';

const Projects = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [transitionOpen, setTransitionOpen] = useState(false);

    const moveTrig = (trig, modal, div) => {
        const trigProps = trig.getBoundingClientRect();
        const m = modal;
        // possibly do something for mProps
        var transX, transY, scaleX, scaleY;
        const xc = window.innerWidth / 2;
        const yc = window.innerHeight / 2;
        setIsOpen(true);
        

    }
  return (
    <ProjectsContainer id="projects">
        <ProjectsH1>Projects</ProjectsH1>
        <ProjectsH2>Some personal projects I've worked on in my free time</ProjectsH2>
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
            {transitionOpen && <ModalTransitionDiv/>}
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
            <ProjectCard>
                <ProjectImage src={HappyFeet} />
                <ProjectInfo>
                    <ProjectTitle>
                        HappyFeet
                    </ProjectTitle>
                    <ProjectP>
                        An application for visualizing and manipulating cellular automata in three dimensions
                    </ProjectP>
                </ProjectInfo>
            </ProjectCard>
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
        </ProjectsWrapper>
        <ProjectModal>hello</ProjectModal>
    </ProjectsContainer>
  )
}

export default Projects