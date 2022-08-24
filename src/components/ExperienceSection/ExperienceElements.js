import styled from 'styled-components';
import { SCHEME } from '../../GlobalStyle';
export const ExperienceContainer = styled.div`
    min-height: 100vh;
    background-color: ${SCHEME.bg};
    height: auto;
    padding-bottom: 100px;
`

export const ExperienceH1 = styled.h1`
    padding-top: 60px;
    font-size: 4rem;
    color: ${SCHEME.text1};
    text-align: center;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const ExperienceH2 = styled.h2`
    margin-top: 10px;
    font-size: 1.3rem;
    color: ${SCHEME.text1};
    text-align: center;

    @media screen and (max-width: 480px) {
        font-size: 0.6rem;
    }
`

export const Timeline = styled.div`
    margin: 0 auto 0 25%;
    max-width: 800px;
    padding: 25px;
    display: grid;
    grid-template-columns: 3px 1fr;
    font-family: 'Fira Sans', sans-serif;
    color: transparent;
`

export const ExperiencesColumn = styled.div`
    position: relative;
`

export const Experience = styled.div`
    transition: all 0.25s ease;
    position: relative;
    margin-bottom: 50px;
`

export const Info = styled.div`
    position:relative;
    height: 0px;
    width: 800px;
    transition: all 0.25s ease;
    margin-left: 75px;
    visibility: hidden;
    margin-bottom: 0px;
    opacity: 0;
`

export const Bar = styled.div`
    position: relative;
    background: white;
    transition: ease-in-out 0.25s;
`

export const PointRow = styled.div`
    background-color: ${SCHEME.bg};
    display: flex;
    align-items: center;
    width: 700px;
    z-index: 2;
`

export const Point = styled.img`
    top: 0;
    left: 50%;
    transform: translateX(-52%);
    width: 75px;
    height: 75px;
    background: white;
    border-radius: 50%;
    z-index: 3;
    cursor: pointer;
    transition: ease-in-out 0.1s;

    &:hover {
        transform: translateX(-52%) scale(1.05);
    }
`

export const SubPointBlock = styled.div`
    transition: ease-in-out 0.25s;
    margin-top: -20px;
`

export const SubPointRow = styled.div`
    background-color: ${SCHEME.bg};
    display: flex;
    align-items: center;
    transition: ease-in-out 0.3s;
    visibility: hidden;
    gap: 15px;
    width: 700px;
    z-index: 2;
    height: 0px;
    opacity: 0;
    margin-bottom: 10px;
`

export const SubPoint = styled.img`
    top: 0;
    left: 50%;
    transform: translateX(-52%);
    background: white;
    border-radius: 50%;
    z-index: 3;
    cursor: pointer;
    height: 60px;
    width: 60px;
    transition: ease-in-out 0.25s;

    &:hover {
        transform: translateX(-52%) scale(1.05);
    }
`

export const BlockDuration = styled.h3`
    color: ${SCHEME.text1};
    margin: -15px 0 20px 2px;
`

export const BlockList = styled.ul`
    color: ${SCHEME.text1};
    font-size: 16;
    list-style: none;
    font-size: 20px;
`

export const NotePoint = styled.li`
    &::before {
        color: ${SCHEME.primary};
        content: '▹ ';
    }
`

export const NoteWrapper = styled.div`
    display: flex;
    margin-bottom: 20px;
`

export const BlockNote = styled.div`
    flex: 1;
`

export const BlockIntro = styled.div`
    gap: 6px;
    display: flex;
`

export const BlockTitle = styled.h2`
    font-size: 25px;
    color: ${SCHEME.text1};
    cursor: pointer;

    &:hover {
        transform: scale(1.01) translate(-1px,-1px);
    }
`

export const BlockCompany = styled.a`
    color: ${SCHEME.primary};
    font-weight: bold;
    font-size: 24px;
    &:link { text-decoration: none; }
    &:visited { text-decoration: none; }
    &:hover { 
        text-decoration: none; 
        transform: scale(1.01) translate(1px,-1px);
    }
    &:active { text-decoration: none; }
`
