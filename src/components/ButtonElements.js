import styled from 'styled-components';
import { Link } from 'react-scroll';
import { SCHEME } from '../GlobalStyle';

export const Button = styled(Link)`
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${SCHEME.primary};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: 1px solid ${SCHEME.primary};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${SCHEME.secondary + '50'};
    }

    &:link { text-decoration: none; }


    &:visited { text-decoration: none; }


    &:hover { text-decoration: none; }


    &:active { text-decoration: none; }
`