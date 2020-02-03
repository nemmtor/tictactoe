import React, { useState } from 'react';
import styled from 'styled-components';
import { Square } from 'components';

const StyledBoard = styled.div`
    width: 9em;
    height: 9em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const Board = () => {
    const [board, setBoard] = useState(new Array(9).fill(''));
    const changeBoard = (i, newVal) => {
        const newBoard = [...board];
        newBoard[i] = newVal;
        setBoard(newBoard);
    };
    const squares = board.map((squareValue, i) => (
        <Square
            changeBoard={changeBoard}
            squareValue={squareValue}
            index={i}
            // eslint-disable-next-line react/no-array-index-key
            key={i}
        />
    ));
    return <StyledBoard>{squares}</StyledBoard>;
};

export default Board;
