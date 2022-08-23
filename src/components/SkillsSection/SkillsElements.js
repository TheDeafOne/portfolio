import styled from 'styled-components';
import { SCHEME } from '../../GlobalStyle';

export const SkillsContainer = styled.div`
    background-color: ${SCHEME.bg};
    display: flex;
    flex-direction: column;    
    position: relative;
    z-index: 1;
`

export const SkillsH1 = styled.h1`
    margin: auto;
    /* margin-bottom: 24px; */
    font-size: 60px;
    line-height: 1.1;
    font-weight: 600;
    color: ${SCHEME.text1};
`

export const SkillsWrapper = styled.div`
    display: grid;    
    grid-template-columns: repeat(3, 1fr);
    margin: 10px auto 10px auto;
    background-color: ${SCHEME.bg};
    width: 100%;
`

export const Skill = styled.div`
    padding-top: 5%;
    margin: auto;
    width: 80%;
    height: 100%;
`

export const LogoWrapper = styled.div`
    height: 100px;
    margin: auto;
`

export const SkillLogo = styled.img`
    height: 100px;
    padding-right: 0;
    padding-bottom: 10px;
    margin: auto;
    display: block;
    &:hover {
        transform: scale(1.05);
    }
`

export  const SkillTitle = styled.h1`
    padding-top: 10px;
    margin-bottom: 10px;
    font-size: 24px;
    line-height: 1.1;
    font-weight: 600;
    text-align: center;
    color: ${SCHEME.text1};
`

export const SkillP = styled.p`
    max-width: 600px;
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: ${SCHEME.text1};
`

