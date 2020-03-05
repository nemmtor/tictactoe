import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { PlayersContext } from 'context';
import { getNextPlayer } from 'utils';
import { CSSTransition } from 'react-transition-group';

const StyledSquare = styled.div`
    border: 1px solid white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &.effect-appear {
        transform: translateX(300%);
        opacity: 0;
    }

    &.effect-appear-done {
        transform: translateX(0);
        opacity: 1;
        transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    }

    &.effect-enter {
        transform: translateX(300%);
    }

    &.effect-enter-done {
        transform: translateX(0);
        transition: transform 0.3s ease-in-out;
    }

    &.effect-exit {
        transform: translateX(0);
    }

    &.effect-exit-active {
        transform: translateX(300%);
        transition: transform 0.3s ease-in-out;
    }
`;

const Square = ({ squareValue, changeBoard, index }) => {
    const { currentPlayer, changeCurrentPlayer, players } = useContext(
        PlayersContext,
    );
    const handleClick = () => {
        if (squareValue) {
            return;
        }
        const newValue = currentPlayer.mark;
        const nextPlayer = getNextPlayer(currentPlayer.id, players);
        changeCurrentPlayer(players[nextPlayer.id]);
        changeBoard(index, newValue);
    };
    return (
        <CSSTransition
            in
            timeout={index * 100}
            classNames="effect"
            unmountOnExit
            appear
        >
            <StyledSquare onClick={handleClick}>{squareValue}</StyledSquare>
        </CSSTransition>
    );
};

Square.propTypes = {
    squareValue: PropTypes.string,
    changeBoard: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
};

Square.defaultProps = {
    squareValue: '',
};

export default Square;
