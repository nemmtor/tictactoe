import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { PlayersContext } from 'context';

const CurrentPlayerStyled = styled.h1`
    font-size: 3rem;
    color: white;
`;

const CurrentPlayerInfo = () => {
    const { currentPlayer } = useContext(PlayersContext);
    const { fontSizes } = useContext(ThemeContext);
    return (
        <CurrentPlayerStyled fontSizes={fontSizes}>
            {currentPlayer.name} turn({currentPlayer.mark})
        </CurrentPlayerStyled>
    );
};

export default CurrentPlayerInfo;
