import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fadeIn } from 'animations';

const HeaderStyled = styled.h1`
    font-family: 'Audiowide', sans-serif;
    font-size: 4em;
    letter-spacing: 0.2em;
    text-align: center;
    text-transform: uppercase;
    color: ${({ colors }) => colors.main};
    position: relative;
    opacity: 0;
    animation: ${fadeIn} 1s ease-in-out forwards;
    will-change: opacity;

    span {
        font-size: 0.3em;
        letter-spacing: 0;
        position: absolute;
        bottom: -1em;
        right: 0em;
        opacity: 0.7;
    }
`;

const HeaderLanding = ({ colors }) => {
    return (
        <HeaderStyled colors={colors}>
            Tic Tac Toe
            <span className="enjoy">Enjoy your time.</span>
        </HeaderStyled>
    );
};

HeaderLanding.propTypes = {
    colors: PropTypes.shape({}).isRequired,
};

export default HeaderLanding;
