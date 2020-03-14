import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

const shine = keyframes`
0% {transform: translateX(350px) skew(-45deg);}
100% {transform: translateX(-350px) skew(-45deg);}
`;

const leaveMobile = keyframes`{
    0% {transform: translateY(0px) translateX(0px)}
    50% {
        transform: translateY(6px) translateX(-6px);
        box-shadow: none;
        }
    100% {transform: translateX(300%);}
}`;

const leave = keyframes`{
    from {transform: translateX(0px) translateY(6px)}
    to {transform: translateX(300%) translateY(6px);}
}`;

const ButtonStyled = styled.button`
    font-size: 2.2em;
    letter-spacing: 5px;
    text-transform: uppercase;
    padding: 0.3em 0.6em;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background: #fff;
    box-shadow: 0px 6px 0px var(--contrast-color),
        -6px 6px 0px var(--contrast-color);
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
            transform: translateY(6px) translateX(-6px);
            box-shadow: none;
        }
    }

    &.effect-exit {
        transform: translateY(0px) translateX(0px);
        box-shadow: none;
    }

    &.effect-exit-active {
        transform: translateX(300%);
        animation: ${leave} 0.5s ease-in-out forwards;
        @media (max-width: 700px) {
            animation: ${leaveMobile} 0.5s ease-in-out forwards;
        }
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
