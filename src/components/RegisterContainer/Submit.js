import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const SubmitStyled = styled.input`
    letter-spacing: 2px;
    width: 15rem;
    padding: 0.5em;
    background: ${({ colors }) => colors.accent3};
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
    const { colors } = useContext(ThemeContext);
    return <SubmitStyled type="submit" value="Start!" colors={colors} />;
}
