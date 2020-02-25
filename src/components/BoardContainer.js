import React, { useState, useEffect } from 'react';
import { Board, CurrentPlayerInfo, Square } from 'components';
import { gameIsFinished, getMovesLeft } from 'utils';

export default function BoardContainer({ children }) {
    const [board, setBoard] = useState(new Array(9).fill(''));
    const [gameFinished, setGameFinished] = useState(false);

    const changeBoard = (i, newValue) => {
        const newBoard = [...board];
        newBoard[parseInt(i, 10)] = newValue;
        setBoard(newBoard);
    };

    useEffect(() => {
        getMovesLeft(board);
        gameIsFinished() ? setGameFinished(true) : null;
        gameFinished
            ? console.log('Game finished.')
            : console.log('Game not finished yet');
    });

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
