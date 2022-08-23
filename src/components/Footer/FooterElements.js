import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
    background-color: #101522;
    height: 120px;
`

export const FooterWrap = styled.div`
    padding: 15px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: auto;
    margin: 0 auto;
`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    align-items: center;
    max-width: 1100px
    margin 0 auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
`

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SmallSocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
    margin: 16px;
`

export const LargeSocialIconLink = styled.a`
    color: #fff;
    font-size: 36px;
    margin: 16px;
`