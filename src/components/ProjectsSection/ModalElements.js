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
`

export const ModalUList = styled.ul`
    margin-left: ${({ margin }) => margin ?? '0px'};
    margin-bottom: 10px;
`

export const ModalLI = styled.li`
    color: ${SCHEME.text1};
    font-size: 20px;
    margin-top: 5px;
`