import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const GameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${({ colors }) => colors.contrast};
    font-size: ${({ fontSizes }) => fontSizes.large};
`;

const Game = () => {
    const { colors, fontSizes } = useContext(ThemeContext);
    return (
        <GameWrapper colors={colors} fontSizes={fontSizes}>
            Hi!
        </GameWrapper>
    );
};

export default Game;
