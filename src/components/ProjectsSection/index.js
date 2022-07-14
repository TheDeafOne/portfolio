import React, { useState, useRef } from 'react';
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
    ModalContent,
    ModalTransitionDiv
} from './ProjectElements';

const Projects = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [zInd, setZInd] = useState(false);
    const [transitionOpen, setTransitionOpen] = useState(false);
    
    const modalRef = useRef(null);
    const modalContRef = useRef(null);

    const handleProjectModal = (e) => {
        e.preventDefault();
        setTransitionOpen(true);
        // make div
        const trigProps = this.getBoundingClientRect();
        const modal = modalRef;
        const modalCont = modalContRef;
        const mProps = modalCont.getBoundingClientRect();
        var transX, transY, scalX, scalY;
        const xc = window.innerWidth / 2;
        const yc = window.innerHeight / 2;

        // increase z index 
        setZInd(true);
    };

  return (
    <ProjectsContainer id="projects">
        <ProjectsH1>Projects</ProjectsH1>
        <ProjectsH2>Some personal projects I've worked on in my free time</ProjectsH2>
        <ProjectsWrapper>
            <ProjectCard onClick={handleProjectModal} active={zInd}>
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
        <ProjectModal ref={modalRef}>
            <ModalContent ref={modalContRef}>hello</ModalContent>
        </ProjectModal>
    </ProjectsContainer>
  )
}

export default Projects