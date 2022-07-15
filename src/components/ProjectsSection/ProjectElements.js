import styled from 'styled-components';

const modalZ = 1000;
const modalBg = '#FFEBEE';
const modalWidth = '600px';
const space = '2.4rem';
const red = '#F44336';
const t = '0.5s';
const ease = `all ${t} cubic-bezier(0.23, 1, 0.32, 1)`;

export const ProjectsContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

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
    color: #fff;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const ProjectsH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const ProjectsP = styled.p`
    font-size: 1rem;
    text-align: center;
`

export const ProjectsWrapper = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    width: 100%;
    height: 100%;
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
    color: #f7f8fa;
    text-align: center;
    pointer-events: none;
`

export const ProjectP = styled.p`
    max-width: 600px;
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 24px;
    color: #fff;
    text-align: center;
    pointer-events:none;
`


export const ProjectInfo = styled.div`
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-color: rgba(0,0,0,0.7);
    /* color: #fff; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.3s ease-in-out;
`

export const ProjectCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    /* box-shadow: - 1px 3px rgba(0,0,0,0.2); */
    position: relative;
    transition: ${ease};
    z-index: ${({ active }) => active ? null : 10};
    &:hover {
        transform: scale(0.95);
        transition: all 0.25s ease-in-out;
        cursor: pointer;
        &${ProjectTitle}, ${ProjectP}, ${ProjectImage}, ${ProjectInfo} {
            pointer-events: none;
        }
        ${ProjectInfo} {
            opacity: 1;
        transition: all 0.3s ease-in-out;
        }
    }
`

export const ProjectModal = styled.div`
    will-change: visibility, opacity;
    display: flex;
    margin: auto;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: ${modalZ};
    height: 700px;
    width: 500px;
    
    transition: ${ease};
    transition-delay: 0.25s;

    visibility: ${({ active }) => active ? 'visible' : 'hidden'};
    opacity: ${({ active }) => active ? 1 : 0};
    align-items: flex-start;
    background: transparent;
`
export const ModalContent = styled.div`
    will-change: transform, opacity;
    position: relative;
    padding: ${space};
    background: ${modalBg};
    background-clip: padding-box;
    transition: ${ease};
    opacity: ${({ active }) => active ? 1 : 0};
    height: 100%;
    width: 100%;
`

export const ModalTransitionDiv = styled.div`
    will-change: initial transform, opacity;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${modalBg};
    transform: none;
    transition: opacity 0.1s ease-out, transform ${t} cubic-bezier(0.23, 1, 0,32, 1);
    opacity: ${({ active }) => active ? 1 : 0};
    z-index: 100;

`

