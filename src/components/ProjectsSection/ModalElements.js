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
    width: 50%;
`

export const ModalP = styled.p`
    color: ${SCHEME.text1};
    text-align: center;
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
`