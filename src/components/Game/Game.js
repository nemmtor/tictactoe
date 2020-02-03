import React, { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Board, PlayersContext } from 'components';

const GameWrapper = styled.div`
    color: ${({ colors }) => colors.contrast};
    font-size: ${({ fontSizes }) => fontSizes.large};
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Game = () => {
    const [players, setPlayers] = useState([
        { id: 0, name: 'Kacper', mark: 'X' },
        { id: 1, name: 'Filip', mark: 'O' },
    ]);
    const [currentPlayer, setCurrentPlayer] = useState(players[0]);
    const { colors, fontSizes } = useContext(ThemeContext);
    return (
        <GameWrapper colors={colors} fontSizes={fontSizes}>
            <PlayersContext.Provider
                value={{ players, currentPlayer, setCurrentPlayer }}
            >
                <Board />
            </PlayersContext.Provider>
        </GameWrapper>
    );
};

export default Game;
