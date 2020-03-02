import { createGlobalStyle } from 'styled-components';
import { tictactoe } from 'images';

export default createGlobalStyle`
    :root {
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    #root {
        height: 100vh;
        height: calc(var(--vh, 1vh) * 100);
        background: #EEE0CB;
        background: linear-gradient(45deg, rgba(238, 224, 203, 1), rgba(199, 152, 82, 1));
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        &::after {
            content: '';
            opacity: .3;
            top: -3rem;
            left: -3rem;
            width: 10rem;
            height: 10rem;
            transform: rotate(45deg);
            position: absolute;
            background: url(${tictactoe});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
            opacity: 0;
            animation: fadeInLow 1s 2s forwards;
            
            @media(min-width: 768px){
                top: -5rem;
                left: -5rem;
                width: 20rem;
                height: 20rem;
            }

        }
    }
    
`;
