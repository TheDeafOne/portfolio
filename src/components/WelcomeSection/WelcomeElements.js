import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import { SCHEME } from '../../GlobalStyle';

export const WelcomeContainer = styled.div`
    background: ${SCHEME.bg};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 110vh;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: ${SCHEME.bg};
        z-index: 2;
    }
`

export const WelcomeBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const WelcomeContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const WelcomeH1 = styled.h1`
    color: ${SCHEME.text1};
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const WelcomeP = styled.p`
    margin-top: 24px;
    color: ${SCHEME.text1};
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const WelcomeBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px; 
`

export const ArrowRight = styled(MdKeyboardArrowRight) `
    margin-left: 8px;
    font-size: 20px;
`