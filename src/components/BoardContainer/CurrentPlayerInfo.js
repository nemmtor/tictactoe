import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const fadeIn = keyframes`{}
from {opacity: 0}
to {opacity: 1}`;

const CurrentPlayerStyled = styled.h1`
    font-size: 3rem;
    width: 100%;
    color: white;
    text-align: center;
    background: rgba(0, 0, 0, 0.3);
    transition: transform 0.5s ease-in, opacity 0.5 ease-in;
    animation: ${fadeIn} 1s forwards;
`;

const CurrentPlayerInfo = ({ currentPlayer }) => {
    return (
        <CurrentPlayerStyled>
            {currentPlayer.name} turn({currentPlayer.mark})
        </CurrentPlayerStyled>
    );
};

export default CurrentPlayerInfo;
