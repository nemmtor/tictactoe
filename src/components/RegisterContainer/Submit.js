import React from 'react';
import styled from 'styled-components';

const SubmitStyled = styled.input`
    letter-spacing: 2px;
    padding: 0.5em;
    background: var(--contrast-color);
    border: none;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    text-transform: uppercase;
    transition: filter 0.3s ease-out, opacity 0.3s ease-out;
    will-change: filter, opacity;

    &:hover {
        filter: hue-rotate(40deg) brightness(0.8);
        opacity: 0.8;
    }
`;

export default function Submit() {
    return <SubmitStyled type="submit" value="Start!" />;
}
