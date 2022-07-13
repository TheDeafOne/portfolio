import styled, { css } from 'styled-components';

const transitionDuration = '0.8s;';
const transitionEasing = 'cubic-bezier(0.230, 1.000, 0.320, 1.000);';
const bounceEasing = 'cubic-bezier(0.175, 0.885, 0.320, 1.275);';
const closedWidth = '200px';
const closedHeight = '80px';
const openedWidth = '400px';
const openedHeight = '160px';

export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;
    min-height: 100vh;
    padding-bottom: 30px;
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
    justify-content: center;
    grid-gap: 16px;
    padding: 0 50px;
    width: 100%;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

// this is basically btn
export const ProjectCard = styled.div`
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    transition: width ${transitionDuration} ${transitionEasing}, 
        height ${transitionDuration} ${bounceEasing}; /* adjust to transition easing*/
    transform-style: preserve-3d;
    transform-origin: 50% 50%;
    /* align to center */

    transform: ${({ toggleOpen }) => toggleOpen ? 'rotateX(180deg)' : undefined};
`

// btn front
export const ProjectFront = styled.div`
    position: relative;
    display: flex;
    margin: auto;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: #fff;
    /* transition: background 0.15s ease, line-height ${transitionDuration}, ${transitionEasing};  */
    transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(0.95);
        transition: all 0.25s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        width: 70%;
    }
`

export const ProjectBack = styled.div`
    position: absolute; 
    height: ${({ toggleOpen }) => toggleOpen ? '0px' : '100px'};
    opacity: ${({ toggleOpen }) => toggleOpen ? '1' : '0'};
    /* width: ${({ toggleOpen }) => toggleOpen ? '100px' : '0px'}; */
    /* height: ${({ toggleOpen }) => toggleOpen ? '100px' : '0px'}; */
    background-color: #fff;
    transform: translateZ(-2px) rotateX(180deg);
    overflow: hidden;
    transition: box-shadow ${transitionDuration} ease;


`

export const ProjectImage = styled.img`
    height: 100%;
    width: 100%;
    display: block;
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

    &:hover {
        opacity: 1;
        transition: all 0.3s ease-in-out;
    }
    transition: all 0.3s ease-in-out;
`

export const ProjectTitle = styled.h1`
    padding-top: 10px;
    margin-bottom: 24px;
    font-size: 24px;
    line-height: 1.1;
    font-weight: 600;
    color: #f7f8fa;
    text-align: center;
`

export const ProjectP = styled.p`
    max-width: 600px;
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 24px;
    color: #fff;
    text-align: center;
`

