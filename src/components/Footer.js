import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const FooterStyled = styled.footer`
    background: ${({ colors }) => colors.main};
    color: ${({ colors }) => colors.accent1};
    width: 100%;
    padding: 15px;
    position: absolute;
    bottom: 0;
    letter-spacing: 1px;

    a {
        color: ${({ colors }) => colors.accent3};
        font-weight: bold;
        text-decoration: none;
        position: relative;
        opacity: 0.7;
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
    const { colors } = useContext(ThemeContext);
    return (
        <FooterStyled colors={colors}>
            &copy; Designed and created by{' '}
            <a href="https://github.com/nemmtor" target="blank">
                Kacper Witas
            </a>
        </FooterStyled>
    );
}
