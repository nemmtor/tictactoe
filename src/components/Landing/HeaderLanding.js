import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const HeaderStyled = styled.h1`
    font-family: 'Audiowide', sans-serif;
    font-size: 4em;
    letter-spacing: 0.2em;
    text-align: center;
    text-transform: uppercase;
    color: ${({ colors }) => colors.main};
    position: relative;

    span {
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
        transition: opacity 0.3s ease-in-out;
    }

    &.effect-enter {
        opacity: 0;
    }

    &.effect-enter-active {
        opacity: 1;
        transition: opacity 0.3s ease-in-out;
    }
    &.effect-exit {
        opacity: 1;
    }

    &.effect-exit-active {
        opacity: 0;
        transition: opacity 0.3s 0.5s ease-in-out;
    }
`;

const HeaderLanding = ({ colors, show }) => {
    return (
        <CSSTransition
            in={show}
            timeout={1000}
            classNames="effect"
            unmountOnExit
            appear
        >
            <HeaderStyled colors={colors}>
                Tic Tac Toe
                <span className="enjoy">Enjoy your time.</span>
            </HeaderStyled>
        </CSSTransition>
    );
};

HeaderLanding.propTypes = {
    colors: PropTypes.shape({}).isRequired,
};

export default HeaderLanding;
