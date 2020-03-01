import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { HeaderStyled, SkipStyled, ButtonStyled, KbdStyled } from './styles';

const Landing = ({ setGameStarted }) => {
    const { colors, queries } = useContext(ThemeContext);
    const handleClick = () => {
        setGameStarted(true);
    };
    useEffect(() => {
        document.addEventListener('keydown', e => {
            if (e.keyCode === 32) {
                setGameStarted(true);
            }
        });
    });
    return (
        <>
            <HeaderStyled colors={colors} queries={queries}>
                Welcome to tic-tac-toe
                <span className="enjoy">Enjoy your time.</span>
            </HeaderStyled>

            <SkipStyled>
                <ButtonStyled colors={colors} onClick={handleClick}>
                    Click here
                </ButtonStyled>{' '}
                or press <KbdStyled>space</KbdStyled> to start.
            </SkipStyled>
        </>
    );
};

Landing.propTypes = {
    setGameStarted: PropTypes.func.isRequired,
};

export default Landing;
