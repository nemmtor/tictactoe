import React, { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import {
    BoardContainer,
    CurrentPlayerInfo,
    RegisterContainer,
} from 'components';
import { PlayersProvider } from 'context';

const GameContainerStyled = styled.main`
    color: ${({ colors }) => colors.contrast};
    font-size: ${({ fontSizes }) => fontSizes.large};
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Game = () => {
    const { colors, fontSizes } = useContext(ThemeContext);
    const [playersRegistered, setPlayersRegistered] = useState(false);
    return (
        <GameContainerStyled colors={colors} fontSizes={fontSizes}>
            <PlayersProvider>
                {playersRegistered && <BoardContainer />}
                {!playersRegistered && (
                    <RegisterContainer
                        setPlayersRegistered={setPlayersRegistered}
                    />
                )}
            </PlayersProvider>
        </GameContainerStyled>
    );
};

GameContainerStyled.displayName = 'Game Container';

export default Game;
