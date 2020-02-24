import React, { useState } from 'react';
import { Board, CurrentPlayerInfo, Square } from 'components';
import { gameFinished } from 'utils';

export default function BoardContainer({ children }) {
    const [board, setBoard] = useState(new Array(9).fill(''));

    const changeBoard = (i, newValue) => {
        const newBoard = [...board];
        newBoard[parseInt(i, 10)] = newValue;
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

    return (
        <>
            <CurrentPlayerInfo />
            <Board board={board} changeBoard={changeBoard} squares={squares}>
                {children}
            </Board>
        </>
    );
}
