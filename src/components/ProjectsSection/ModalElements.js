import styled from 'styled-components';
import { SCHEME } from '../../GlobalStyle';

export const HeaderRow = styled.div`
    width: 100%;
    height: 100px;
`

export const ModalTitle = styled.h1`
    font-size: 50px;
    text-align: center;
    color: ${SCHEME.text1};
`

export const ModalDescription = styled.h4`
    text-align: center;
    color: ${SCHEME.text1};
`

export const ModalImage = styled.img`
    width: ${({ imageSize }) => imageSize + '%'};
`

export const ModalP = styled.p`
    color: ${SCHEME.text1};
    text-align: center;
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    line-height: 1.2;
`

export const ModalSubTitle = styled.h2`
    color: ${SCHEME.text1};
    margin-top: 30px;
    margin-bottom: 10px;
`

export const ModalUList = styled.ul`
    margin-left: ${({ margin }) => margin ?? '0px'};
    margin-bottom: 10px;
    max-width: 70%;
`

export const ModalLI = styled.li`
    color: ${SCHEME.text1};
    font-size: 20px;
    margin-top: 5px;
`

export const CloseModalButton = styled.div`
    height: 40px;
    width: 100px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid grey;
    border-radius: 10px;
    cursor: pointer;

    color: grey;
    font-size: 20px;

    transition: all 0.25s ease-in-out;

    &:hover {
        background-color: ${SCHEME.secondary + '50'};
        transition: all 0.25s ease-in-out;
    }
`

export const ModalXButton = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    width: 32px;
    height: 32px;
    opacity: 0.7;
    transition: ease-in-out .1s;


    &:before, &:after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 33px;
        width: 2.5px;
        background-color: grey;
        transition: ease-in-out .1s;
    }
    &:before {
        transform: rotate(45deg);
        
    }
    &:after {
        transform: rotate(-45deg);
    }

    &:hover {
        opacity: 1;
        transition: ease-in-out .1s;
    }    
`