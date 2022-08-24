import styled from 'styled-components';
import { SCHEME } from '../../GlobalStyle';

const modalZ = 1000;
const modalBg = SCHEME.bg;
const space = '2.4rem';
const t = '0.5s';
const ease = `all ${t} cubic-bezier(0.23, 1, 0.32, 1)`;

export const ProjectsContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${SCHEME.bg};
    padding-bottom: 100px;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`

export const ProjectsH1 = styled.h1`
    margin-top: 60px;
    font-size: 4rem;
    color: ${SCHEME.text1};

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const ProjectsH2 = styled.h2`
    color: ${SCHEME.text1};
    font-size: 1.5rem;
    margin-bottom: 20px;
`

export const ProjectsH3 = styled.h3`
    margin-bottom: 30px;
    margin-top: 10px;
    color: ${SCHEME.text1};
`

export const ProjectsH4 = styled.h4`
    color: ${SCHEME.primary};
`

export const GitButton = styled.div`
    height: 40px;
    width: 200px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 1px solid ${SCHEME.primary};
    cursor: pointer;

    &:hover {
        background-color: ${SCHEME.secondary + '50'};
    }
`

export const GitIcon = styled.div`
    color: ${SCHEME.primary};
    margin-left: 5px;
`

export const ProjectsP = styled.p`
    font-size: 1rem;
    text-align: center;
`

export const ProjectsWrapper = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;
    padding: 0 50px;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 50px;
    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ProjectImage = styled.img`
    height: 100%;
    width: 100%;
    display: block;
`


export const ProjectTitle = styled.h1`
    padding-top: 10px;
    margin-bottom: 24px;
    font-size: 24px;
    line-height: 1.1;
    font-weight: 600;
    color: ${SCHEME.text1};
    text-align: center;
    pointer-events: none;
`

export const ProjectP = styled.p`
    max-width: 600px;
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 24px;
    color: ${SCHEME.text1};
    text-align: center;
    pointer-events:none;
    padding-left: 20px;
    padding-right: 20px;
`


export const ProjectInfo = styled.div`
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-color: rgba(0,0,0,0.7);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.3s ease-in-out;
`

export const ModalBackground = styled.div`
    will-change: visibility, opacity;
    display: flex;
    align-items: flex-start;
    margin: auto;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: scroll;
    overflow-x: hidden;
    z-index: ${modalZ};
    width: 100vw;
    height: auto;
    transition: ${ease};
    transition-delay: 0.25s;
    background-color: rgba(0,0,0,0.3);
    
    visibility: ${({ active }) => active ? 'visible' : 'hidden'};
    opacity: ${({ active }) => active ? 1 : 0};
`

export const ProjectModal = styled.div`
    will-change: transform, opacity;
    position: relative;
    padding: ${space};
    background: ${modalBg};
    background-clip: padding-box;
    transition: ${ease};
    height: auto;
    width: 70vw;
    margin: 5% auto 5% auto;

    visibility: ${({ active }) => active ? 'visible' : 'hidden'};
    opacity: ${({ active }) => active ? 1 : 0};
`

export const ModalContent = styled.div`
    position: relative;
    margin: auto;
    height: auto;
`

export const ProjectCard = styled.div`
    ${ModalBackground};
    position: relative;
    display: inline-block;
    cursor: pointer;
    transition: ${ease};
    z-index: 2;
    &:hover {
        transform: scale(0.95);
        transition: all 0.25s ease-in-out;
        &${ProjectTitle}, ${ProjectP}, ${ProjectImage}, ${ProjectInfo} {
            pointer-events: none;
        }
        ${ProjectInfo} {
            opacity: 1;
            transition: all 0.3s ease-in-out;
        }
    }
`

export const ModalTransitionDiv = styled.div`
    will-change: transform, opacity;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${modalBg};
    transform: none;
    opacity: 0;
    transition: opacity 0.1s ease-out, transform ${t} cubic-bezier(0.23, 1, 0.32, 1);
    height: 100%;
    width: 100%;
`

export const CardWrapper = styled.div`
    position: relative;
`