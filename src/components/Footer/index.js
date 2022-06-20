import React from 'react'
import {
    FaInstagram,
    FaLinkedin,
    FaGithub
} from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink,
    WebsiteRights

} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        Keegan Woodburn
                    </SocialLogo>
                    <SocialIcons>
                        <SocialIconLink href='//www.linkedin.com/in/keegan-woodburn-53b1bb20b/' target='_blank' aria-label='LinkedIn'>
                            <FaLinkedin />
                        </SocialIconLink>
                        <SocialIconLink href='//github.com/TheDeafOne' target='_blank' aria-label='GitHub'>
                            <FaGithub />
                        </SocialIconLink>
                        <SocialIconLink href='//www.instagram.com/thefakekeeganw/' target='_blank' aria-label='Instagram'>
                            <FaInstagram />
                        </SocialIconLink>
                    </SocialIcons>
                    <WebsiteRights>Keegan Woodburn © {new Date().getFullYear()}
                    All rights reserved.</WebsiteRights>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer