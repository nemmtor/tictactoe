import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { bounce, fadeIn } from 'animations';

const ButtonStyled = styled.button`
    cursor: pointer;
    padding: 0.2em 0.5em;
    border: 1px solid #eee;
    border-radius: 10px;
    background: ${({ colors }) => colors.main};
    color: ${({ colors }) => colors.accent2};
    margin-top: 0.5em;
    font-size: 2em;
    text-transform: uppercase;
    opacity: 0;
    transform: translateY(5px);
    transition: filter 0.2s ease-out;
    animation: ${bounce} 0.7s 1.5s linear infinite alternate,
        ${fadeIn} 0.5s 1s ease-in forwards;
    will-change: transform, opacity, filter;

    &:hover {
        filter: brightness(1.3);
    }
`;

const ButtonLanding = ({ colors, queries, handleClick }) => {
    return (
        <ButtonStyled colors={colors} queries={queries} onClick={handleClick}>
            Start game
        </ButtonStyled>
    );
};

ButtonLanding.propTypes = {
    colors: PropTypes.shape({}).isRequired,
    queries: PropTypes.shape({}).isRequired,
    handleClick: PropTypes.func.isRequired,
};

export default ButtonLanding;
