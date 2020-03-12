import React from 'react';
import styled, { keyframes } from 'styled-components';
import { shout } from 'images';

const grow = keyframes`{
    from {transform: scale(0);}
    to {transform: scale(1);}
}`;

const LabelStyled = styled.label`
    position: relative;
    &::after {
        position: absolute;
        bottom: -100px;
        left: -110px;
        width: 120px;
        height: 120px;
        content: '';
        background-image: url("${shout}");
        background-size: cover;
        opacity: .7;
    }
`;

const SubmitStyled = styled.input`
    letter-spacing: 3px;
    padding: 0.5em 1em;
    background: var(--contrast-color);
    box-shadow: 2px 2px 2px var(--contrast-color);
    border: none;
    border-radius: 15px 15px 15px 0;
    color: white;
    cursor: pointer;
    text-transform: uppercase;
    transition: filter 0.3s ease-out, opacity 0.3s ease-out;
    will-change: filter, opacity;
    margin-top: 25px;
    position: relative;
    display: block;
    transform: scale(0);
    transform-origin: 0% 100%;
    animation: ${grow} 1s 1s ease forwards;

    &:hover {
        filter: hue-rotate(40deg) brightness(0.8);
        opacity: 0.8;
    }
`;

export default function Submit() {
    return (
        <LabelStyled htmlFor="submit">
            <SubmitStyled name="submit" type="submit" value="Start!" />
        </LabelStyled>
    );
}
