import React from 'react';
import styled from 'styled-components';

const SubmitStyled = styled.input`
    width: 15rem;
    background: transparent;
    margin-top: 60px;
    color: white;
    cursor: pointer;
    text-transform: uppercase;
`;

export default function Submit() {
    return <SubmitStyled type="submit" value="Start!" />;
}
