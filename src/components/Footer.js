import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.footer`
    --primary-color: #495867;
    --contrast-color: #ce796b;
    --accent-color: #c18c5d;
    --accent2-color: #e7ad99;
    --text-color: #333;
    --text-light-color: #ccc;
    grid-row-start: 2;
    grid-row-end: 3;
    color: var(--text-color);
    background: rgba(206, 121, 107, 0.6);
    box-shadow: -2px 0px 5px black;
    width: 100%;
    padding: 15px;
    font-size: 1em;
    letter-spacing: 1px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 480px) {
        font-size: 1.4em;
    }

    a {
        color: var(--text-color);
        text-decoration: none;
        position: relative;
        transition: opacity 0.2s ease-out;
        will-change: transform;
        &::after {
            content: '';
            display: block;
            position: absolute;
            top: 100%;
            left: 50%;
            width: 100%;
            height: 2px;
            background: var(--text-color);
            transform: translateX(-50%) scaleX(0);
            will-change: transform;
            transition: transform 0.2s ease-out;
        }
        &:hover {
            opacity: 1;
            &::after {
                transform: translateX(-50%) scaleX(1);
            }
        }
    }
`;

export default function Footer() {
    return (
        <FooterStyled>
            <span>&copy; Designed and created by </span>
            <a href="https://github.com/nemmtor" target="blank">
                Kacper Witas
            </a>
        </FooterStyled>
    );
}
