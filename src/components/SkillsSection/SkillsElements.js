import styled from 'styled-components';

export const SkillsContainer = styled.div`
    background-color: red;
    display: flex;
    flex-direction: column;    
    position: relative;
    z-index: 1;
`

export const SkillsH1 = styled.h1`
    margin: auto;
    padding-top: 10px;
    /* margin-bottom: 24px; */
    font-size: 60px;
    line-height: 1.1;
    font-weight: 600;
    color: #f7f8fa;
`

export const SkillsWrapper = styled.div`
    display: grid;    
    grid-template-columns: repeat(3, 1fr);
    margin: auto;
    background-color: black;
    width: 100%;
    gap: 10px 10px;
`

export const Skill = styled.div`
    margin: auto;
    width: 80%;
    height: 100%;
`

export const SkillLogo = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    padding-bottom: 10px;
    margin: auto;
`

export  const SkillTitle = styled.h1`
    padding-top: 10px;
    margin-bottom: 10px;
    font-size: 24px;
    line-height: 1.1;
    font-weight: 600;
    text-align: center;
    color: #f7f8fa;
`

export const SkillP = styled.p`
    max-width: 600px;
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #fff;
`

