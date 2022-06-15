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
import { Button } from '../ButtonElement';

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
                    Hello
                </WelcomeH1>
                <WelcomeBtnWrapper>
                    <Button 
                        to='signup'
                        primary='true'
                        dark='true'
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}>
                        yo {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </WelcomeBtnWrapper>
            </WelcomeContent>
        </WelcomeContainer>
    )
}

export default WelcomeSection