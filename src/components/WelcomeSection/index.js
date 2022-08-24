import React, { useState } from 'react';
import { 
    WelcomeContainer,
    WelcomeBg,
    WelcomeContent,
    WelcomeH1,
    WelcomeBtnWrapper,
    ArrowForward,
    ArrowRight
} from './WelcomeElements';
import { Button } from '../ButtonElements';
import Typewriter from 'typewriter-effect';

const WelcomeSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    } 
    

    return (
        <WelcomeContainer>
            <WelcomeBg />

            <WelcomeContent>
                <WelcomeH1>
                    Hi,<br/>I'm Keegan,<br/>
                    <Typewriter
                        options={{
                            loop: true,
                            strings: 
                                [
                                    'Software Engineer',
                                    'Student',
                                    'Tetris Enthusiast'
                                ],
                            autoStart: true
                        }}
                    />
                </WelcomeH1>
                <WelcomeBtnWrapper>
                    <Button 
                        to='contact'
                        smooth='true'
                        duration={2000}
                        spy={true}
                        exact='true'
                        offset={-60}
                        primary='true'
                        dark='true'
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}>
                        contact me! {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </WelcomeBtnWrapper>
            </WelcomeContent>
        </WelcomeContainer>
    )
}

export default WelcomeSection