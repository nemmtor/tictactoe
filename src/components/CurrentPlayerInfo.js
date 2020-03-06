import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { PlayersContext } from 'context';

const CurrentPlayerStyled = styled.h1`
    font-size: 3rem;
    color: ${({ colors }) => colors.main};
`;

const CurrentPlayerInfo = () => {
    const { currentPlayer } = useContext(PlayersContext);
    const { colors } = useContext(ThemeContext);
    return (
        <CurrentPlayerStyled colors={colors}>
            {currentPlayer.name} turn({currentPlayer.mark})
        </CurrentPlayerStyled>
    );
};

export default CurrentPlayerInfo;
