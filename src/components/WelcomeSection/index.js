import React, { useState } from 'react';
import { 
    WelcomeContainer,
    WelcomeBg,
    WelcomeContent,
    WelcomeH1,
    WelcomeBtnWrapper,
    ArrowForwards,
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
                    primary='true'
                    dark='true'
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}>
                        Go fuck yourself {hover ? <ArrowForwards /> : <ArrowRight />}
                    </Button>
                </WelcomeBtnWrapper>
            </WelcomeContent>
        </WelcomeContainer>
    )
}

export default WelcomeSection