import React, { useState, useEffect } from 'react';
import { 
    TDAC1, 
    TDAC2, 
    TDACInput,
    TDACOutput,
    TDACConsole,
    RSnail, 
    RSnailPackages,
    RSnailLPackage,
    RSnailPackageE,
    RSnailSign,
    RSnailDash,
    HappyFeet,
    KMeansPlot
} from '../../images';
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
    ModalP,
    ModalSubTitle,
    ModalUList,
    ModalLI,
    CloseModalButton,
    ModalXButton,
    ImageRow
} from './ModalElements';

import { FaGithub } from 'react-icons/fa';

const Projects = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeModal, setActiveModal] = useState(undefined);
    const [modalTrigger, setModalTrigger] = useState(undefined);
    const [modalId, setModalId] = useState('');

    const handleCloseModal = (e) => {
        console.log(e);
        if (e.target.id === 'modalBackground') {
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
                <ModalXButton id='modalBackground' onClick={handleCloseModal}/>
                <HeaderRow>
                    <ModalTitle>
                        3D Game of Life
                    </ModalTitle>
                    <ModalDescription>
                        A desktop app for visualizing 3D cellular automata 
                    </ModalDescription>
                </HeaderRow>
                <ModalImage imageSize={'50'} src={TDAC2}/>
                <ModalP>
                    Inspired by Conways Game of Life, 
                    this program provides a easy and streamlined method of input and output for 3D Cellular Automata. 
                    The default rules are 5 6 7 for alive, and 6 for dead. 
                    The cellular neighborhood we use to calculate alive and dead cells is moore's type. 
                    With moore's neighborhood, 26 possible values are read in, and a/d cells are accounted for.
                    The project has three main components. The Input, the Output, and the Console.
                </ModalP>
                <ModalSubTitle>
                    Input
                </ModalSubTitle>
                <ModalImage imageSize={'70'} src={TDACInput} />
                <ModalP>
                    This is where the fun begins. In this layout, the user can create their own custom template to later visualize in 3D. 
                    We added this feature to our program after realizing the difficulty of creating a template without a dedicated GUI. 
                    This GUI provides ease of creation, along with an appealing dark-mode. This GUI has many underlying features including but not limited to:
                </ModalP>
                <ModalUList>
                    <ModalLI>
                        Streamlined layer-by-layer template create:
                    </ModalLI>
                    <ModalUList margin={'30px'}>
                        <ModalLI>
                            Custom size cube
                        </ModalLI>
                        <ModalLI>
                            Paint Feature
                        </ModalLI>
                        <ModalLI>
                            Erase Feature
                        </ModalLI>
                        <ModalLI>
                            Layer stacking
                        </ModalLI>
                        <ModalLI>
                            All layer clearing (Edit {'>'} Clear All Layers)
                        </ModalLI>
                        <ModalLI>
                            Show center axes: (Edit {'>'} Clear All Layers)
                        </ModalLI>
                    </ModalUList>
                    <ModalLI>
                        Saving/Opening user-created templates
                    </ModalLI>
                    <ModalUList margin={'30px'}>
                        <ModalLI>
                            Save (File {'>'} Save Template)
                        </ModalLI>
                        <ModalLI>
                            Open (File {'>'} Open Template)
                        </ModalLI>
                    </ModalUList>
                </ModalUList>
                <ModalP>
                    Once the user decides to open or close a template, or create their own, they can then visualize it in 3D.
                </ModalP>
                <ModalSubTitle>
                    Output
                </ModalSubTitle>
                <ModalImage imageSize={'70'} src={TDACOutput}/>
                <ModalP>
                    This GUI is where all the visualization happens. The board that is visualized can come from multiple different sources:
                </ModalP>
                <ModalUList>
                    <ModalLI>
                        A user-created template
                    </ModalLI>
                    <ModalLI>
                        A pre-made template
                    </ModalLI>
                    <ModalLI>
                        An imported template
                    </ModalLI>
                </ModalUList>
                <ModalP>
                    Once the board is initialized, all of the features (as follows) can then be utilized:
                </ModalP>
                <ModalUList>
                    <ModalLI>
                        Custom rules for Alive/Dead Neighbor Constraints
                        <ModalUList margin={'30px'}>
                            <ModalLI>
                                The default rules for this program are 5, 6, 7 for live neighbor constraints, and 6 for dead neighbor constraints.
                            </ModalLI>
                            <ModalLI>
                                These rules can be changed by the user, to allow for experimentation, or they can be left as default.
                            </ModalLI>
                        </ModalUList>
                    </ModalLI>
                    <ModalLI>
                        Run: begins the evolution of the model.
                    </ModalLI>
                    <ModalLI>
                        Next Generation: executes a single step of the model.
                    </ModalLI>
                    <ModalLI>
                        Rotate: Rotates the model whilst playing/paused for better visualization.
                    </ModalLI>
                    <ModalLI>
                        Step-Speed: Change the speed of the evolution.
                    </ModalLI>
                    <ModalLI>
                        Reset: Resets the model to the original state.
                    </ModalLI>
                    <ModalLI>
                        Opening and Closing a File:
                        <ModalUList margin={'30px'}>
                            <ModalLI>
                                Open a file (File {'>'} Open template)
                            </ModalLI>
                            <ModalLI>
                                Save original/current generation (File {'>'} Save Generation)
                            </ModalLI>
                        </ModalUList>
                    </ModalLI>
                </ModalUList>
                <ModalSubTitle>
                    Console
                </ModalSubTitle>
                <ModalImage imageSize={'80'} src={TDACConsole} />
                <ModalP>
                    The console is the headless version of this project. A user can create a board, run simulations on a given board, manage simulation data, and view simulation information such as cycles.
                </ModalP>
                <GitButton
                    onClick={() => {
                        window.open('//github.com/freycp20/3dGameOfLifeGit/', '_blank');
                    }}
                >
                    <ProjectsH4>
                        View This Project
                    </ProjectsH4>
                    <GitIcon>
                        <FaGithub />
                    </GitIcon>
                </GitButton>
                <CloseModalButton
                    id='modalBackground'
                    onClick={handleCloseModal}
                >
                    Close
                </CloseModalButton>
            </ModalContent>
        );
    }

    function SecondModal() {
        return (
            <ModalContent id='secondModal'>
                <ModalXButton id='modalBackground' onClick={handleCloseModal}/>
                <HeaderRow>
                    <ModalTitle>
                        Crimson Snail
                    </ModalTitle>
                    <ModalDescription>
                        A web app for managing mailroom tasks
                    </ModalDescription>
                </HeaderRow>
                <ModalImage imageSize={'70'} src={RSnailPackages} />
                <ModalP>
                    This web app was made as a response to the rising flow of mail in the past two years and the previous outdated software.
                    A mailroom carries out a myriad of tasks, all of which must be done correctly, lest a package go missing or get delivered to the wrong person.
                    Among these are a set of tasks which require speed and efficiency, as they are done constantly throughout the day.
                    These are:
                </ModalP>
                <ModalUList>
                    <ModalLI>
                        Entering packages
                    </ModalLI>
                    <ModalLI>
                        Delivering packages (i.e. signing them out to their recipient)
                    </ModalLI>
                </ModalUList>
                <ModalP>
                    Because of how important and common these tasks are, the application is centered around them.
                </ModalP>
                <ModalSubTitle>
                    Entering Packages
                </ModalSubTitle>
                <ImageRow>
                    <ModalImage imageSize={'40'} src={RSnailLPackage} />
                    <ModalImage imageSize={'40'} src={RSnailPackageE} />
                </ImageRow>
                <ModalP>
                    Accessing recipient data and being able to organize packages are vital to the workflow in the mailroom. Having a simple 
                    package entry interface makes this an easy task.
                </ModalP>
                <ModalP>
                    When processing a package, the user can:
                </ModalP>
                <ModalUList>
                    <ModalLI>
                        Look up a recipient
                    </ModalLI>
                    <ModalUList margin={'30px'}>
                        <ModalLI>
                            By ID
                        </ModalLI>
                        <ModalLI>
                            By box number
                        </ModalLI>
                        <ModalLI>
                            By name
                        </ModalLI>
                    </ModalUList>
                    <ModalLI>
                        Enter the tracking barcode
                    </ModalLI>
                    <ModalLI>
                        Label the package with:
                    </ModalLI>
                    <ModalUList margin={'30px'}>
                        <ModalLI>
                            A unique package ID
                        </ModalLI>
                        <ModalLI>
                            Shelf number
                        </ModalLI>
                        <ModalLI>
                            Container Label
                        </ModalLI>
                    </ModalUList>
                </ModalUList>
                <ModalP>
                    Once entered, an email will be sent to the recipient, notifying them that their package has arrived at the mailroom, and they can pick it up.
                    Additionally, a package can be marked as perishable, to notify the recipient that it is important they pick up their package quickly.
                </ModalP>
                <ModalSubTitle>
                    Delivering Packages
                </ModalSubTitle>
                <ModalImage imageSize={'80'} src={RSnailSign} />
                <ModalP>
                    When delivering a package, the number of packages and package types are shown so that the clerk can grab the packages for the recipient.
                    The recipient can then sign for the packages, which is then captured and stored in our database for any further necessary use.
                </ModalP>
                <ModalSubTitle>
                    Dashboard
                </ModalSubTitle>
                <ModalImage imageSize={'80'} src={RSnailDash} />
                <ModalP>
                    The dashboard, though not integral to the day-to-day work in the mailroom, is an important component of Crimson Snail.
                    By viewing past package data and getting a better understanding of how many packages and package types the mailroom might deal with
                    workflow changes have been made to improve efficiency.
                </ModalP>
                <ModalP>
                    The user can do a number of things to the dashboard data, such as:
                </ModalP>
                <ModalUList>
                    <ModalLI>
                        Filter data
                    </ModalLI>
                    <ModalUList margin={'30px'}>
                        <ModalLI>
                            By Date
                        </ModalLI>
                        <ModalLI>
                            By Courier
                        </ModalLI>
                        <ModalLI>
                            By Package
                        </ModalLI>
                        <ModalLI>
                            By Recipient
                        </ModalLI>
                    </ModalUList>
                    <ModalLI>
                        Change chart type
                    </ModalLI>
                    <ModalLI>
                        Look at custom ranges of dates
                    </ModalLI>
                    <ModalLI>
                        View entered and signed package data individually
                    </ModalLI>
                    <ModalLI>
                        Zoom on and highlight data points
                    </ModalLI>
                </ModalUList>
                <ModalP>
                    It has benefited the mailroom greatly, especially in analyzing and measuring the number of packages we may get in the future.
                </ModalP>
                <CloseModalButton
                    id='modalBackground'
                    onClick={handleCloseModal}
                >
                    Close
                </CloseModalButton>
            </ModalContent>
        );
    }

    function ThirdModal() {
        return (
            <ModalContent id='thirdModal'>
                <ModalXButton id='modalBackground' onClick={handleCloseModal}/>
                <HeaderRow>
                    <ModalTitle>
                        HappyFeet
                    </ModalTitle>
                    <ModalDescription>
                        A research project in the effort to find meaningful data in footstep audio
                    </ModalDescription>
                </HeaderRow>
                <ModalImage imageSize={'50'} src={KMeansPlot} />
                <ModalP>
                    HappyFeet was a research project done in unison with multiple senior projects at Grove City College.
                    The goal of HappyFeet was to help researchers assess biomechanical health of patients based on their footsteps.
                    To achieve this, past footstep data need to be recorded and analyzed, allowing for model generation and realtime analysis of footstep data.
                    One way to do this is through K-Means clustering, a heuristic we used to achieve this.
                </ModalP>
                <ModalP>
                    More detailed project description coming soon! Input the meantime, check out some of my other projects.
                </ModalP>
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
                    

                <CloseModalButton
                    id='modalBackground'
                    onClick={handleCloseModal}
                >
                    Close
                </CloseModalButton>
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
                                    Crimson Snail
                                </ProjectTitle>
                                <ProjectP>
                                    An end-to-end web application for managing every-day tasks in a mailroom.
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
                                A research project in the effort to find elegant methods of obtaining biomechanical data from audio.
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
            <ModalBackground id='modalBackground' active={isOpen} onClick={handleCloseModal}>
                <ProjectModal active={isOpen}>
                    {activeModal}
                </ProjectModal>
            </ModalBackground>
        </ProjectsContainer>
    )
}

export default Projects