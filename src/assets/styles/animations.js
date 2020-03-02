import { keyframes } from 'styled-components';

export const bounce = keyframes`
    from {transform: translateY(5px);}
    to {transform: translateY(-5px);}
`;

export const fadeIn = keyframes`
    from {opacity: 0;}
    to {opacity: 1;}
`;

export const fadeInLow = keyframes`
    from {opacity: 0;}
    to {opacity: .6;}
`;

export const slideFromRight = keyframes`
    from {transform: translateX(10px);}
    to {transform: translateX(0px);}
`;
