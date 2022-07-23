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
    CardWrapper,
    ProjectCard,
    ModalBackground,
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
        const trig = e.target;
        console.log(trig);
        const trigProps = trig.getBoundingClientRect();
        const modal = modalRef;
        const modalCont = modalContRef.current;
        console.log(modalCont);
        const mProps = modalCont.getBoundingClientRect();
        var transX, transY, scaleX, scaleY;
        const xc = window.innerWidth / 2;
        const yc = window.innerHeight / 2;

        // increase z index 
        setZInd(true);

        // scale values for the temp div
        scaleX = (mProps.width / trigProps.width).toFixed(3);
        scaleY = (mProps.height / trigProps.height).toFixed(3) * 0.83; // *83% to manage height of trans div
        
        // move the button to the center of the window
        transX = Math.round(xc - trigProps.left - trigProps.width / 2);
        transY = Math.round(yc - trigProps.top - trigProps.height / 2) + 85; // +85 to hide from the top of the page

        // translate button to the center of the screen;
        
        // expand temp div to same size as the modal
        const fakeDiv = transitionRef.current;
        fakeDiv.style.opacity = '1';
        fakeDiv.style.transform = `translate(${transX}px, ${transY}px) scale(${scaleX}, ${scaleY})`;
        fakeDiv.style.webkitTransform = `translate(${transX}px, ${transY}px) scale('${scaleX}', '${scaleY}')`;

        setIsOpen(isOpen ? isOpen : !isOpen);
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            fakeDiv.style.opacity = '0';
        }, 700)
            
    };

    const handleCloseModal = () => {
        
    }



    return (
        <ProjectsContainer id="projects">
            <ProjectsH1>Projects</ProjectsH1>
            <ProjectsH2>Some personal projects I've worked on in my free time</ProjectsH2>
            <ProjectsWrapper>
                <CardWrapper>
                    <ProjectCard onClick={handleProjectModal}>
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
                    <ModalTransitionDiv ref={transitionRef} active={zInd}/>
                </CardWrapper>
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
            <ModalBackground active={isOpen} onClick={handleCloseModal}>
                <ProjectModal active={isOpen} ref={modalRef}>
                    <ModalContent ref={modalContRef}>
                    hello<br/>hello<br/>hello<br/>
                hello<br/>hello<br/>hello<br/>
                hello<br/>hello<br/>hello<br/>
                hello<br/>hello<br/>hello<br/>
                hello<br/>hello<br/>hello<br/>
                hello<br/>hello<br/>hello<br/>
                hello<br/>hello<br/>hello<br/>
                hello<br/>hello<br/>hello<br/>
                hello<br/>hello<br/>hello<br/>
                hello<br/>hello<br/>hello<br/>
                hello<br/>hello<br/>hello<br/>
                hello<br/>hello<br/>hello<br/>
                hello<br/>hello<br/>hello<br/>
                hello<br/>hello<br/>hello<br/>
                    </ModalContent>
                </ProjectModal>
            </ModalBackground>
        </ProjectsContainer>
    )
}

export default Projects