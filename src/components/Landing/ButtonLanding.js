import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

const ButtonStyled = styled.button`
    cursor: pointer;
    padding: 0.3em 0.6em;
    border: 1px solid #eee;
    border-radius: 10px;
    position: relative;
    background: ${({ colors }) => colors.main};
    color: ${({ colors }) => colors.accent2};
    margin-top: 0.5em;
    font-size: 2.2em;
    text-transform: uppercase;
    filter: grayscale(1);
    transition: filter 0.3s ease-out, opacity 0.3s ease-out;
    will-change: opacity, filter;

    &:hover {
        filter: grayscale(0);
        opacity: 0.5;
    }

    &.effect-appear {
        transform: translateX(300%);
    }

    &.effect-appear-done {
        transform: translateX(0);
        transition: transform 0.3s ease-in-out;
    }

    &.effect-enter {
        transform: translateX(300%);
    }

    &.effect-enter-done {
        transform: translateX(0);
        transition: transform 0.3s ease-in-out;
    }

    &.effect-exit {
        transform: translateX(0);
    }

    &.effect-exit-active {
        transform: translateX(300%);
        transition: transform 0.3s ease-in-out;
    }
`;

const ButtonLanding = ({ colors, queries, handleClick, show, setShow }) => {
    return (
        <CSSTransition
            in={show}
            timeout={{
                appear: 300,
                enter: 300,
                exit: 1000,
            }}
            classNames="effect"
            onClick={() => setShow(false)}
            onExited={() => handleClick()}
            unmountOnExit
            appear
        >
            <ButtonStyled colors={colors} queries={queries}>
                Start game
            </ButtonStyled>
        </CSSTransition>
    );
};

ButtonLanding.propTypes = {
    colors: PropTypes.shape({}).isRequired,
    queries: PropTypes.shape({}).isRequired,
    handleClick: PropTypes.func.isRequired,
};

export default ButtonLanding;
