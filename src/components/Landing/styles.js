import styled, { keyframes } from 'styled-components';

export const HeaderStyled = styled.h1`
    font-family: 'Shadows Into Light', sans-serif;
    font-size: 3rem;
    padding: 1rem;
    text-align: center;
    text-transform: uppercase;
    color: ${({ colors }) => colors.main};
    position: relative;

    span {
        position: absolute;
        bottom: 0;
        right: 3em;
        font-size: 0.3em;
        opacity: 0.7;
    }
`;

const bounceKeyFrames = keyframes`
0% {transform: translateY(2px)}
100% {transform: translateY(-2px)}`;

export const SkipStyled = styled.p`
    text-align: center;
    margin-top: 2rem;
    font-size: 2rem;
    animation: ${bounceKeyFrames} 1s ease-in-out infinite alternate;
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
