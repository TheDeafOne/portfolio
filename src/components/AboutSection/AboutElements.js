import styled from 'styled-components';
import { Link as LinkR} from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const AboutContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#060606')};
    height: 700px;
    
    @media screen and (max-width: 768) {
        padding: 100px 0;
    }
`

export const AboutWrapper = styled.div`
    z-index: 1;
    height: 400px;
    margin-left: 5%;
`

export const AboutColumn1 = styled.div`
    height: 100%;
    margin: -30px 100px 0 100px;
`

export const AboutColumn2 = styled.div`
    margin-right: 50px;
`

export const AboutRow = styled.div`
    display: flex;
`
    
export const Heading = styled.h1`
    padding-top: 10px;
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #f7f8fa;
    text-align: center;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const AboutH2 = styled.h2`
    color: white;
    margin-bottom: 10px;
`

export const AboutH3 = styled.h3`
    color: white;
    margin-bottom: 20px;
`

export const TextWrapper = styled.div`
    display: inline-block;
    padding-top: 0;
    padding-bottom: 60px;
    margin-right: 5%;
`

export const AboutP = styled.p`
    max-width: 600px;
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 24px;
    color: #fff;
`

export const ImgWrapper = styled.div`
    display: inline-block;
    max-width: 555px;
    height: 100px;
    width: 40%;
`



export const Img = styled.img`
    width: 300px;
    margin: auto 0 auto 0;
    padding-right: 0;
    padding-bottom: 10px;
    border-radius: 50%;
`

export const NavLinkS = styled(LinkS)`
        max-width: 440px;
        margin-bottom: 35px;
        font-size: 18px;
        line-height: 24px;
        color: #01bf71;
        cursor: pointer;
    `
    
    export const NavLinkO =  styled.a`
        max-width: 440px;
        margin-bottom: 35px;
        font-size: 18px;
        line-height: 24px;
        color: #01bf71;
        &:link { text-decoration: none; }
        &:visited { text-decoration: none; }
        &:hover { text-decoration: none; }
        &:active { text-decoration: none; }
    `