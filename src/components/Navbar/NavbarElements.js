import styled from 'styled-components';
import { Link as LinkR} from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
    height: ${({ scrollNav }) => (scrollNav ? '60px' : '80px')};
    margin-top: ${({ scrollNav }) => (scrollNav ? '-60px' : '-80px')};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: all .2s linear;

    @media screen and (max-width: 960px) {
        transitions: 0.8s all ease;
        height: 60px;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: #fff;
    cursor: pointer;
    font-size: ${({ scrollNav }) => (scrollNav ? '1.4rem' : '1.6rem')};
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 45%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 30px;
    font-size: 1.15rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 60px;
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    z-index: 2;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #01bf71;
    }

    &:hover {
        color: #01bf71;
    }
`

export const NavResume = styled.a`
    display: flex;
    height: 35px;
    width: 100px;
    border: 1px solid green;
    border-radius: 10px;
    line-height: 1;
    display: inline-block;
    position: relative;
    margin: 13px -100px 0 30px;
    padding-top: 7px;
    text-decoration: none;
    color: #039105;
    cursor: pointer;

    &:hover {
        background-color: #007d0025;
    }
`