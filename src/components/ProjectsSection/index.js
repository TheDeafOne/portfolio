import React, { useState, useEffect } from 'react';
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
    const [activeModal, setActiveModal] = useState(undefined);
    const [modalTrigger, setModalTrigger] = useState(undefined);
    const [modalId, setModalId] = useState('');
    
    useEffect(() => {
        if (modalId !== '' && modalTrigger !== undefined) {
            modalTrigger.preventDefault();
        
            const trig = modalTrigger.target;
            const trigProps = trig.getBoundingClientRect();
            const mProps = document.getElementById(modalId).getBoundingClientRect();
            const fakeDiv = document.getElementById((modalId + 'TD'));
            

            var transX, transY, scaleX, scaleY;
            const xc = window.innerWidth / 2;
            const yc = window.innerHeight / 2;
            
            // scale values for the temp div
            scaleX = (mProps.width / trigProps.width).toFixed(3);
            scaleY = (mProps.height / trigProps.height).toFixed(3) * 0.83; // *83% to manage height of trans div
            
            // move the button to the center of the window
            transX = Math.round(xc - trigProps.left - trigProps.width / 2);
            transY = Math.round(yc - trigProps.top - trigProps.height / 2) + 85; // +85 to hide from the top of the page
                    
            fakeDiv.style.zIndex = 3;
            fakeDiv.style.opacity = 1;
            fakeDiv.style.transform = `translate(${transX}px, ${transY}px) scale(${scaleX}, ${scaleY})`;
            fakeDiv.style.webkitTransform = `translate(${transX}px, ${transY}px) scale('${scaleX}', '${scaleY}')`;

            setIsOpen(true);
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
                fakeDiv.style.opacity = '0';
            }, 700)     
        }
    }, [modalId, modalTrigger, activeModal])

    const handleCloseModal = () => {
        setIsOpen(false);
    }

    function FirstModal() {
        return (
            <ModalContent id='firstModal'>
                This is the first modal, which would reference to a previously made modal
            </ModalContent>
        );
    }

    return (
        <ProjectsContainer id="projects">
            <ProjectsH1>Projects</ProjectsH1>
            <ProjectsH2>Some personal projects I've worked on in my free time</ProjectsH2>
            <ProjectsWrapper>
                <CardWrapper>
                    <ProjectCard 
                        onClick={(e) => {
                            setModalTrigger(e);
                            setModalId('firstModal');
                            setActiveModal(<FirstModal />);
                        }}>
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
                    <ModalTransitionDiv id='firstModalTD'/>
                </CardWrapper>
                <CardWrapper>
                    <CardWrapper>
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
                        <ModalTransitionDiv/>
                    </CardWrapper>
                </CardWrapper>
                <CardWrapper>
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
                    <ModalTransitionDiv/>
                </CardWrapper>
                <CardWrapper>
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
                    <ModalTransitionDiv/>
                </CardWrapper>
                <CardWrapper>
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
                    <ModalTransitionDiv/>
                </CardWrapper>
                <CardWrapper>
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
                    <ModalTransitionDiv/>
                </CardWrapper>
            </ProjectsWrapper>
            <ModalBackground active={isOpen} onClick={handleCloseModal}>
                <ProjectModal active={isOpen}>
                    {activeModal}
                </ProjectModal>
            </ModalBackground>
        </ProjectsContainer>
    )
}

export default Projects