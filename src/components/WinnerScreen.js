import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WinnerScreenStyled = styled.p`
    font-size: 1em;
    color: #333;
`;

const WinnerScreen = ({ winner, setGameFinished, setBoard, setWinner }) => {
    let winningPhrase = "It's a draw!";
    if (winner) {
        winningPhrase = `Congratulations ${winner}!`;
    }
    const restartGame = () => {
        setBoard(new Array(9).fill(''));
        setGameFinished(false);
        setWinner('');
    };
    return (
        <>
            <WinnerScreenStyled>{winningPhrase}</WinnerScreenStyled>
            <button type="button" onClick={restartGame}>
                Restart
            </button>
        </>
    );
};

WinnerScreen.propTypes = {
    winner: PropTypes.string.isRequired,
};

export default WinnerScreen;
