import React from 'react'
import {
    FaInstagram,
    FaLinkedin,
    FaGithub,
    FaStackOverflow
} from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialIcons,
    SmallSocialIconLink,
    WebsiteRights

} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialIcons>
                        <SmallSocialIconLink href='//www.linkedin.com/in/keegan-woodburn-53b1bb20b/' target='_blank' aria-label='LinkedIn'>
                            <FaLinkedin />
                        </SmallSocialIconLink>
                        <SmallSocialIconLink href='//github.com/TheDeafOne' target='_blank' aria-label='GitHub'>
                            <FaGithub />
                        </SmallSocialIconLink>
                        <SmallSocialIconLink href='//www.instagram.com/thefakekeeganw/' target='_blank' aria-label='Instagram'>
                            <FaInstagram />
                        </SmallSocialIconLink>
                        <SmallSocialIconLink href='//stackoverflow.com/users/17621345/thedeafone' target='_blank' aria-label='Stack Overflow'>
                            <FaStackOverflow />
                        </SmallSocialIconLink>
                    </SocialIcons>
                    <WebsiteRights>Keegan Woodburn © {new Date().getFullYear()}
                    &nbsp;All rights reserved.</WebsiteRights>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer