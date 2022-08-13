import styled from 'styled-components';

export const ExperienceContainer = styled.div`
    min-height: 100vh;
    background-color:black;
`

export const Timeline = styled.div`
    margin: 0 auto;
    max-width: 800px;
    padding: 25px;
    display: grid;
    grid-template-columns: 3px 1fr;
    font-family: 'Fira Sans', sans-serif;
    color: transparent;
`

export const Experience = styled.div`
    margin-left: 20px;
    margin-bottom: 50px;
`

export const Info = styled.div`
    height: 0px;
    background: blue;
`

export const Date = styled.div`
    color: red;
`

export const Bar = styled.div`
    position: relative;
    background: white;
    transition: ease-in-out 2s;
`

export const PointRow = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    background-color: yellow;
    width: 400px;
`

export const Point = styled.div`
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 30px;
    background: white;
    border-radius: 50%;
    cursor: pointer;
`