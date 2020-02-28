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
        color: ${({ colors }) => colors.accent2};
        text-decoration: none;
    }
`;

export default function Footer() {
    const { colors, fontSizes } = useContext(ThemeContext);
    return (
        <FooterStyled colors={colors}>
            &copy; Designed and created by
            <a href="https://github.com/nemmtor"> nemmtor</a>
        </FooterStyled>
    );
}
