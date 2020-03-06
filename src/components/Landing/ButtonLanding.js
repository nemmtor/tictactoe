import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

const ButtonStyled = styled.button`
    font-size: 2.2em;
    text-transform: uppercase;
    margin-top: 0.5em;
    padding: 0.3em 0.6em;
    border: 1px solid #eee;
    border-radius: 10px;
    cursor: pointer;
    background: ${({ colors }) => colors.main};
    color: ${({ colors }) => colors.accent2};
    transition: transform 0.3s ease-in-out, opacity 0.2s ease-out;

    &:hover {
        opacity: 0.8;
    }

    &.effect-appear {
        transform: translateX(300%);
    }

    &.effect-appear-done {
        transform: translateX(0);
    }

    &.effect-exit {
        transform: translateX(0);
    }

    &.effect-exit-active {
        transform: translateX(300%);
    }
`;

const ButtonLanding = ({ setGameStarted, show, setShow }) => {
    const { colors } = useContext(ThemeContext);
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
            <ButtonStyled colors={colors}>Start game</ButtonStyled>
        </CSSTransition>
    );
};

ButtonLanding.propTypes = {
    setGameStarted: PropTypes.func.isRequired,
    setShow: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
};

export default ButtonLanding;
