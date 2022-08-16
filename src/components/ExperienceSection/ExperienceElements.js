import styled from 'styled-components';

export const ExperienceContainer = styled.div`
    min-height: 100vh;
    background-color:black;
`

export const ExperienceH1 = styled.h1`
    padding-top: 60px;
    font-size: 4rem;
    color: #fff;
    text-align: center;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const ExperienceH2 = styled.h2`
    margin-top: 10px;
    font-size: 1.3rem;
    color: #fff;
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

export const Experience = styled.div`
    position: relative;
    margin-bottom: 100px;
`

export const Info = styled.div`
    position:relative;
    height: 0px;
    transition: all 0.25s ease;
    margin-bottom: -50px;
    margin-left: 70px;
    visibility: hidden;
    opacity: 0;
`

export const Bar = styled.div`
    position: relative;
    background: white;
`

export const PointRow = styled.div`
    background-color: black;
    display: flex;
    align-items: center;
    width: 700px;
    z-index: 2;
`

export const Point = styled.img`
    top: 0;
    left: 50%;
    transform: translateX(-48%);
    width: 75px;
    height: 75px;
    background: white;
    border-radius: 50%;
    z-index: 3;
    cursor: pointer;
`

export const SummaryBuffer = styled.div`
    height: 75px;
`

export const Line = styled.div`
    height: 2px;
    width: 80%;
    background-color: grey;
    margin-left: 70px;
`

export const BlockDuration = styled.h3`
    color: grey;
    margin: -15px 0 20px 2px;
`

export const BlockList = styled.ul`
    color: white;
    font-size: 16;
    list-style: none;
    font-size: 20px;
`

export const NotePoint = styled.li`
    &::before {
        color: green;
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

export const BlockTitle = styled.h2`
    font-size: 25px;
    color: white;

`

export const BlockCompany = styled.a`
    color: green;
    &:link { text-decoration: none; }
    &:visited { text-decoration: none; }
    &:hover { text-decoration: none; }
    &:active { text-decoration: none; }
`
