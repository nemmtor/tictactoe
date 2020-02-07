import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Board } from 'components';
import { PlayersProvider } from 'context';

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
    const { colors, fontSizes } = useContext(ThemeContext);
    return (
        <GameWrapper colors={colors} fontSizes={fontSizes}>
            <PlayersProvider>
                <Board />
            </PlayersProvider>
        </GameWrapper>
    );
};

export default Game;
