import React, { useState } from 'react';
import styled from 'styled-components';
import { Square } from 'components';

const BoardStyled = styled.div`
    width: 20rem;
    height: 20rem;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(3, minmax(5rem, 1fr));
    grid-template-rows: repeat(3, minmax(5rem, 1fr));
`;

const Board = () => {
    const [board, setBoard] = useState(new Array(9).fill(''));
    const changeBoard = (i, newVal) => {
        const newBoard = [...board];
        newBoard[parseInt(i, 10)] = newVal;
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
    return <BoardStyled>{squares}</BoardStyled>;
};

export default Board;
