import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { PlayersContext } from 'components';
import { getNextPlayer } from 'utils';

const StyledSquare = styled.div`
    width: 3em;
    height: 3em;
    border: 1px solid white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Square = ({ squareValue, changeBoard, index }) => {
    const { currentPlayer, setCurrentPlayer, players } = useContext(
        PlayersContext,
    );
    const handleClick = () => {
        if (squareValue) {
            return;
        }
        const newValue = currentPlayer.mark;
        const nextPlayer = getNextPlayer(currentPlayer.id, players);
        setCurrentPlayer(players[nextPlayer.id]);
        changeBoard(index, newValue);
    };
    return <StyledSquare onClick={handleClick}>{squareValue}</StyledSquare>;
};

Square.propTypes = {
    squareValue: PropTypes.string.isRequired,
    changeBoard: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
};

export default Square;
