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
    
    // refs really aren't the best way to go about this but for testing's sake we'll use them
    const modalRef = useRef(null);
    const modalContRef = useRef(null);
    const transitionRef = useRef(null);

    const handleProjectModal = (e) => {
        e.preventDefault();

        // make div
        const trig = e.target; // TODO: figure out if hitting the parent is necessary
        console.log(trig);
        const trigProps = trig.getBoundingClientRect();
        const modal = modalRef;
        const modalCont = modalContRef.current;
        console.log(modalCont);
        // TODO: the fact that this is the content and not the modal itself may be a problem
        const mProps = modalCont.getBoundingClientRect();
        var transX, transY, scaleX, scaleY;
        const xc = window.innerWidth / 2;
        const yc = window.innerHeight / 2;

        // increase z index 
        setZInd(true);

        // scale values for the temp div
        scaleX = (mProps.width / trigProps.width).toFixed(3);
        scaleY = (mProps.height / trigProps.height).toFixed(3);
        
        // move the button to the center of the window
        transX = Math.round(xc - trigProps.left - trigProps.width / 2);
        transY = Math.round(mProps.height / 2 + mProps.top - trigProps.top - trigProps.height / 2);

        // translate button to the center of the screen;
        trig.style.transform = `translate(${transX}px, ${transY}px)`;
        trig.style.webkitTransform = `translate(${transX}px, ${transY}px)`;

        // expand temp div to same size as the modal
        const fakeDiv = transitionRef.current;
        fakeDiv.style.transform = `scale('${scaleX}', '${scaleY}')`
        fakeDiv.style.webkitTransform = `scale('${scaleX}', '${scaleY}')`
        console.log(`scaling to: ${scaleX}, ${scaleY}`);
        console.log(fakeDiv);

        setTimeout(() => {
            openModal(modal, fakeDiv);
        }, 400);
    };

    const openModal = (modal, fakeDiv) => {
        setIsOpen(isOpen ? isOpen : !isOpen);
        // once transitioned either way, hide the content/fakeDiv
        // fakeDiv.style.opacity = 0;
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
                <ModalTransitionDiv ref={transitionRef}/>
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
        <ProjectModal ref={modalRef} active={isOpen}>
            <ModalContent ref={modalContRef} active={isOpen}>hello</ModalContent>
        </ProjectModal>
    </ProjectsContainer>
  )
}

export default Projects