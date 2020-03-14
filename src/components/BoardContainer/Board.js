import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BoardStyled = styled.div`
    width: 20rem;
    height: 20rem;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(3, minmax(5rem, 1fr));
    grid-template-rows: repeat(3, minmax(5rem, 1fr));
    margin-top: 12rem;

    @media (min-width: 768px) {
        width: 40rem;
        height: 40rem;
    }

    @media (min-width: 1024px) {
        margin-top: 6rem;
        width: 25rem;
        height: 25rem;
    }
`;

const Board = props => {
    const { children } = props;

    return <BoardStyled>{children}</BoardStyled>;
};

Board.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Board;
