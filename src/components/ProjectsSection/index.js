import React, { useState, useEffect } from 'react';
import { TDAC1, TDAC2, TDACInput, RSnail, HappyFeet } from '../../images';
import {
    ProjectsContainer,
    ProjectsWrapper,
    ProjectsH1,
    ProjectsH2,
    ProjectsH3,
    ProjectsH4,
    GitButton,
    GitIcon,
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

import {
    HeaderRow,
    ModalTitle,
    ModalDescription,
    ModalImage,
    ModalP
} from './ModalElements';

import { FaGithub } from 'react-icons/fa';

const Projects = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeModal, setActiveModal] = useState(undefined);
    const [modalTrigger, setModalTrigger] = useState(undefined);
    const [modalId, setModalId] = useState('');

    const handleCloseModal = (e) => {
        console.log(e);
        if (e.target.id !== modalId) {
            setIsOpen(false);
            
            const transDiv = document.getElementById((modalId + 'TD'));
        
            transDiv.style.opacity = 1;
            transDiv.style.transform = `translate(0) scale(1)`;
            
            setTimeout(() => {
                transDiv.style.opacity = '0';
                transDiv.style.zIndex = 1;
            }, 200); 
            
            document.body.style.overflow = 'visible';
    
            setModalId('');
            setActiveModal(undefined);
            setModalTrigger(undefined);
        }
    }

    useEffect(() => {
        if (modalId !== '' && modalTrigger !== undefined) {
            modalTrigger.preventDefault();
        
            const trigProps = modalTrigger.target.getBoundingClientRect();
            const mProps = document.getElementById(modalId).getBoundingClientRect();
            const transDiv = document.getElementById((modalId + 'TD'));

            var transX, transY, scaleX, scaleY;
            const xc = window.innerWidth / 2;
            const yc = window.innerHeight / 2;
            
            // scale values for the temp div
            scaleX = (mProps.width / trigProps.width).toFixed(3);
            scaleY = (mProps.height / trigProps.height).toFixed(3) * 0.83; // *83% to manage height of trans div
            
            // move the button to the center of the window
            transX = Math.round(xc - trigProps.left - trigProps.width / 2);
            transY = Math.round(yc - trigProps.top - trigProps.height / 2) + 85; // +85 to hide from the top of the page
            
            // track scale and transition for managing transition reset
            
            transDiv.style.zIndex = 3;
            transDiv.style.opacity = 1;
            transDiv.style.transform = `translate(${transX}px, ${transY}px) scale(${scaleX}, ${scaleY})`;

            setIsOpen(true);
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
                transDiv.style.opacity = '0';
            }, 500)     
        }
    }, [modalId, modalTrigger, activeModal]);

    function FirstModal() {
        return (
            <ModalContent id='firstModal'>
                <HeaderRow>
                    <ModalTitle>
                        3D Game of Life
                    </ModalTitle>
                    <ModalDescription>
                        A desktop app for visualizing 3D cellular automata 
                    </ModalDescription>
                </HeaderRow>
                <ModalImage src={TDAC2}/>
                <ModalP>
                    Inspired by Conways Game of Life, 
                    this program provides a easy and streamlined method of input and output for 3D Cellular Automata. 
                    The default rules are 5 6 7 for alive, and 6 for dead. 
                    The cellular neighborhood we use to calculate alive and dead cells is moore's type. 
                    With moore's neighborhood, 26 possible values are read in, and a/d cells are accounted for.
                </ModalP>
            </ModalContent>
        );
    }

    function SecondModal() {
        return (
            <ModalContent id='secondModal'>
                This is the second modal, which would reference to a previously made modal
            </ModalContent>
        );
    }

    function ThirdModal() {
        return (
            <ModalContent id='thirdModal'>
                This is the second modal, which would reference to a previously made modal
            </ModalContent>
        );
    }

    // function FourthModal() {
    //     return (
    //         <ModalContent id='fourthModal'>
    //             This is the second modal, which would reference to a previously made modal
    //         </ModalContent>
    //     );
    // }

    // function FifthModal() {
    //     return (
    //         <ModalContent id='fifthModal'>
    //             This is the second modal, which would reference to a previously made modal
    //         </ModalContent>
    //     );
    // }

    // function SixthModal() {
    //     return (
    //         <ModalContent id='sixthModal'>
    //             This is the second modal, which would reference to a previously made modal
    //         </ModalContent>
    //     );
    // }

    return (
        <ProjectsContainer id="projects">
            <ProjectsH1>Projects</ProjectsH1>
            <ProjectsWrapper>
                <CardWrapper>
                    <ProjectCard 
                        onClick={(e) => {
                            setModalTrigger(e);
                            setModalId('firstModal');
                            setActiveModal(<FirstModal />);
                        }}>
                        <ProjectImage src={TDAC1} />
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
                        <ProjectCard
                        onClick={(e) => {
                            setModalTrigger(e);
                            setModalId('secondModal');
                            setActiveModal(<SecondModal />);
                        }}>
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
                        <ModalTransitionDiv id='secondModalTD'/>
                    </CardWrapper>
                </CardWrapper>
                <CardWrapper>
                    <ProjectCard
                        onClick={(e) => {
                            setModalTrigger(e);
                            setModalId('thirdModal');
                            setActiveModal(<ThirdModal />);
                        }}>
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
                    <ModalTransitionDiv id='thirdModalTD'/>
                </CardWrapper>
                {/* <CardWrapper>
                    <ProjectCard
                        onClick={(e) => {
                            setModalTrigger(e);
                            setModalId('fourthModal');
                            setActiveModal(<FourthModal />);
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
                    <ModalTransitionDiv id='fourthModalTD'/>
                </CardWrapper>
                <CardWrapper>
                    <ProjectCard
                        onClick={(e) => {
                            setModalTrigger(e);
                            setModalId('fifthModal');
                            setActiveModal(<FifthModal />);
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
                    <ModalTransitionDiv id='fifthModalTD'/>
                </CardWrapper>
                <CardWrapper>
                    <ProjectCard
                        onClick={(e) => {
                            setModalTrigger(e);
                            setModalId('sixthModal');
                            setActiveModal(<SixthModal />);
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
                    <ModalTransitionDiv id='sixthModalTD'/>
                </CardWrapper> */}
            </ProjectsWrapper>
            <ProjectsH3>In my free time, I continue to work on many different projects.</ProjectsH3>
            <ProjectsH2>To see more of my projects...</ProjectsH2>
            <GitButton
                onClick={() => {
                    window.open('//github.com/TheDeafOne', '_blank');
                }}
            >
                <ProjectsH4>
                    Check out my GitHub
                </ProjectsH4>
                <GitIcon>
                    <FaGithub />
                </GitIcon>
            </GitButton>
            <ModalBackground active={isOpen} onClick={handleCloseModal}>
                <ProjectModal active={isOpen}>
                    {activeModal}
                </ProjectModal>
            </ModalBackground>
        </ProjectsContainer>
    )
}

export default Projects