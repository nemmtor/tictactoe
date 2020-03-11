import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

const shine = keyframes`
0% {transform: translateX(350px) skew(-45deg);}
100% {transform: translateX(-350px) skew(-45deg);}
`;

const ButtonStyled = styled.button`
    font-size: 2.2em;
    text-transform: uppercase;
    margin-top: 3em;
    padding: 0.3em 0.6em;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    /* background: var(--primary-color); */
    /* box-shadow: 15px 15px 0px var(--primary-color); */
    box-shadow: 0px 6px 0px var(--contrast-color);
    /* border: 3px solid var(--accent-color); */
    color: var(--text-color);
    transition: transform 0.3s ease-in-out, opacity 0.2s ease-out,
        box-shadow 0.2s 0.1s ease-in-out;
    position: relative;
    overflow: hidden;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        height: 100%;
        width: 25%;
        background: rgba(255, 255, 255, 0.6);
        animation: ${shine} 1.5s ease-in-out infinite;
    }

    &.effect-appear {
        transform: translateX(300%);
    }

    &.effect-appear-done {
        transform: translateX(0);
        &:hover {
            transform: translateY(6px);
            box-shadow: none;
        }
    }

    &.effect-exit {
        transform: translateX(0);
    }

    &.effect-exit-active {
        transform: translateX(300%);
    }
`;

const ButtonLanding = ({ setGameStarted, show, setShow }) => {
    return (
        <CSSTransition
            in={show}
            timeout={{
                appear: 300,
                exit: 1000,
            }}
            classNames="effect"
            onClick={() => setShow(false)}
            onExited={() => setGameStarted(true)}
            unmountOnExit
            appear
        >
            <ButtonStyled>Start game</ButtonStyled>
        </CSSTransition>
    );
};

ButtonLanding.propTypes = {
    setGameStarted: PropTypes.func.isRequired,
    setShow: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
};

export default ButtonLanding;
