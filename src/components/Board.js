import React, { useContext } from 'react';
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

const Board = props => {
    const { children } = props;

    return <BoardStyled>{children}</BoardStyled>;
};

export default Board;
