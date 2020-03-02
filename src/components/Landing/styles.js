import styled, { keyframes } from 'styled-components';

export const LandingStyled = styled.main`
    padding: 1em;
    font-size: 1rem;
    @media ${({ queries }) => queries.mobileL} {
        font-size: 1.2rem;
    }
    @media ${({ queries }) => queries.tablet} {
        font-size: 2rem;
    }
    @media ${({ queries }) => queries.laptop} {
        font-size: 2.2rem;
    }
`;

export const HeaderStyled = styled.h1`
    font-family: 'Shadows Into Light', sans-serif;
    font-size: 3em;
    text-align: center;
    text-transform: uppercase;
    color: ${({ colors }) => colors.main};
    position: relative;
    animation: fadeIn 0.5s ease-in-out forwards;

    span {
        position: absolute;
        bottom: -1em;
        right: 0em;
        font-size: 0.3em;
        opacity: 0.7;
    }
`;

export const SkipStyled = styled.p`
    opacity: 0;
    text-align: center;
    margin-top: 60px;
    font-size: 2em;
    animation: fadeIn 0.5s 0.5s ease-in-out forwards,
        slideFromRight 1s 0.5s ease-in-out forwards;
`;
export const ButtonStyled = styled.button`
    border: none;
    cursor: pointer;
    padding: 5px 10px;
    background: ${({ colors }) => colors.main};
    border-radius: 10px;
    border: 1px solid #eee;
    color: ${({ colors }) => colors.accent2};
    transition: transform 0.2s ease-in, opacity 0.2s ease-in;

    &:hover {
        transform: translateY(-1px);
        opacity: 0.8;
    }
`;

export const KbdStyled = styled.kbd`
    background-color: #eee;
    border-radius: 3px;
    border: 1px solid #b4b4b4;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
        0 2px 0 0 rgba(255, 255, 255, 0.7) inset;
    color: #333;
    display: inline-block;
    font-size: 0.85em;
    font-weight: 700;
    line-height: 1;
    padding: 2px 4px;
    white-space: nowrap;
`;
