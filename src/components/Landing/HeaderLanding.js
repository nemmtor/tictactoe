import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const jump = keyframes`
0% {transform:  scaleY(1);}
5% {transform:  scaleY(.3);}
10% {transform:  scaleY(.3);}
15% {transform:  scaleY(1) translateY(-200px);}
20% {transform:  scaleY(.7) translateY(0px);}
25% {transform:  scaleY(1) translateY(0px);}
100% {transform: scale(1);}
`;

const HeaderStyled = styled.h1`
    font-family: 'Audiowide', sans-serif;
    font-size: 4em;
    letter-spacing: 0.2em;
    text-align: center;
    text-transform: uppercase;
    color: var(--text-color);
    position: relative;

    .jumping {
        display: inline-block;
        transform-origin: bottom;
        animation: ${jump} 6s ease-in-out infinite;
    }

    .enjoy {
        font-size: 0.3em;
        letter-spacing: 0;
        position: absolute;
        bottom: -1em;
        right: 0em;
        opacity: 0.7;
    }

    &.effect-appear {
        opacity: 0;
    }

    &.effect-appear-active {
        opacity: 1;
        transition: opacity .5s ease-in-out;
    }
    }
    &.effect-exit {
        opacity: 1;
    }

    &.effect-exit-active {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    
    }`;
const HeaderLanding = ({ show }) => {
    return (
        <CSSTransition
            in={show}
            timeout={500}
            classNames="effect"
            unmountOnExit
            appear
        >
            <HeaderStyled>
                T<span className="jumping">i</span>c Tac Toe
                <span className="enjoy">Enjoy your time.</span>
            </HeaderStyled>
        </CSSTransition>
    );
};

HeaderLanding.propTypes = {
    show: PropTypes.bool.isRequired,
};

export default HeaderLanding;
