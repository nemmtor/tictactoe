import React, { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BoardContainer, RegisterContainer } from 'components';
import { PlayersProvider } from 'context';

const GameContainerStyled = styled.section`
    font-size: 3rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Game = () => {
    const [playersRegistered, setPlayersRegistered] = useState(false);
    return (
        <GameContainerStyled>
            <PlayersProvider>
                {!playersRegistered && (
                    <RegisterContainer
                        setPlayersRegistered={setPlayersRegistered}
                    />
                )}
                {playersRegistered && <BoardContainer />}
            </PlayersProvider>
        </GameContainerStyled>
    );
};

GameContainerStyled.displayName = 'Game Container';

export default Game;
