import React, { useState, useEffect, useContext } from 'react';
import { gameIsFinished, checkWinner } from 'utils';
import { PlayersContext } from 'context';
import { CurrentPlayerInfo, WinnerScreen } from 'components';
import Board from './Board';
import Square from './Square';

const BoardContainer = () => {
    const [board, setBoard] = useState(new Array(9).fill(''));
    const [gameFinished, setGameFinished] = useState(false);
    const [winner, setWinner] = useState('');
    const { players } = useContext(PlayersContext);

    const changeBoard = (i, newValue) => {
        const newBoard = [...board];
        newBoard[parseInt(i, 10)] = newValue;
        setBoard(newBoard);
    };

    useEffect(() => {
        const winningMark = checkWinner(board);
        const winningPlayer = players.filter(
            player => player.mark === winningMark,
        );
        if (winningPlayer.length > 0) {
            setWinner(winningPlayer[0].name);
        }
        if (winner) {
            setGameFinished(true);
        }
        if (gameIsFinished(board)) {
            setGameFinished(true);
        }
    }, [board, gameFinished, players, winner]);

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
            {!gameFinished && (
                <>
                    <CurrentPlayerInfo />
                    <Board board={board} changeBoard={changeBoard}>
                        {squares}
                    </Board>
                </>
            )}
            {gameFinished && (
                <WinnerScreen
                    setBoard={setBoard}
                    setGameFinished={setGameFinished}
                    winner={winner}
                    setWinner={setWinner}
                />
            )}
        </>
    );
};

export default BoardContainer;
