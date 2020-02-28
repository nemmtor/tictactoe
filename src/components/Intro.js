import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Typewriter from 'typewriter-effect';
import styled, { ThemeContext } from 'styled-components';
import { tictactoe } from 'images';

const SkipStyled = styled.p`
    margin-top: 5rem;
`;

const ButtonStyled = styled.button`
    border: none;
    cursor: pointer;
    padding: 5px 10px;
    background: ${({ colors }) => colors.main};
    border-radius: 10px;
    border: 1px solid #eee;
    color: ${({ colors }) => colors.accent2};
    transition: transform 0.2s ease-in, opacity 0.2s ease-in;

    &:hover {
        transform: translateY(-1px);
        opacity: 0.8;
    }
`;

const KbdStyled = styled.kbd`
    background-color: #eee;
    border-radius: 3px;
    border: 1px solid #b4b4b4;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
        0 2px 0 0 rgba(255, 255, 255, 0.7) inset;
    color: #333;
    display: inline-block;
    font-size: 0.85em;
    font-weight: 700;
    line-height: 1;
    padding: 2px 4px;
    white-space: nowrap;
`;

const HeaderStyled = styled.h1`
    font-family: 'Shadows Into Light', sans-serif;
    font-size: 5rem;
    text-transform: uppercase;
    color: ${({ colors }) => colors.main};
    position: relative;
`;

const Intro = ({ setIntroFinished }) => {
    const { colors, fontSizes } = useContext(ThemeContext);
    useEffect(() => {
        document.addEventListener('keydown', e => {
            if (e.keyCode === 32) {
                setIntroFinished(true);
            }
        });
    });
    // useEffect(() => {
    //     changeStateAfterDelay(setIntroFinished, true, 6000);
    // });
    return (
        // Classnames of wrapper and cursor has to be defined in global css
        <>
            <HeaderStyled colors={colors} fontSizes={fontSizes}>
                Welcome to tic-tac-toe
                <Typewriter
                    options={{
                        wrapperClassName: 'writer__text',
                        cursorClassName: 'writer__cursor',
                    }}
                    onInit={typewriter => {
                        typewriter
                            .changeDeleteSpeed(25)
                            .changeDelay(75)
                            .typeString('Best game of 2020.')
                            .pauseFor(250)
                            .deleteAll()
                            .typeString('Said nobody.')
                            .pauseFor(100)
                            .deleteAll()
                            .typeString('Enjoy :)')
                            .start();
                    }}
                />
            </HeaderStyled>

            <SkipStyled>
                <ButtonStyled colors={colors}>Click here</ButtonStyled> or press{' '}
                <KbdStyled>space</KbdStyled> to skip intro.
            </SkipStyled>
        </>
    );
};

Intro.propTypes = {
    setIntroFinished: PropTypes.func.isRequired,
};

export default Intro;
