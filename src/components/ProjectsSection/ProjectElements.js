import styled from 'styled-components';

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

export const ProjectCard = styled.div`
    background: #fff;
    display: flex;
    margin: auto;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(0.95);
        transition: all 0.25s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        width: 70%;
    }
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

