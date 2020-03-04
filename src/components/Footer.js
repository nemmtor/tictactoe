import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const FooterStyled = styled.footer`
    background: ${({ colors }) => colors.main};
    color: ${({ colors }) => colors.accent1};
    width: 100%;
    padding: 15px;
    font-size: 1rem;
    position: absolute;
    bottom: 0;
    letter-spacing: 1px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media ${({ queries }) => queries.mobileM} {
        font-size: 1.2rem;
    }

    a {
        color: ${({ colors }) => colors.accent3};
        font-weight: bold;
        text-decoration: none;
        position: relative;
        opacity: 0.9;
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
            background: ${({ colors }) => colors.accent3};
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
    const { colors, queries } = useContext(ThemeContext);
    return (
        <FooterStyled colors={colors} queries={queries}>
            <span>&copy; Designed and created by </span>
            <a href="https://github.com/nemmtor" target="blank">
                Kacper Witas
            </a>
        </FooterStyled>
    );
}
