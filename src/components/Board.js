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
`;

const Board = props => {
    const { children } = props;

    return <BoardStyled>{children}</BoardStyled>;
};

Board.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Board;
