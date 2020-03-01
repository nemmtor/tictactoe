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
            width: 15rem;
            height: 15rem;
            transform: rotate(45deg);
            position: absolute;
            background: url(${tictactoe});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
        }

    }

    .Typewriter {
        
        position: absolute;
        top: 100%;
        right: 0;
    }
    .writer__text,
    .writer__cursor {
        color: #333;
        font-size: 1.5rem;
    }

    .writer__cursor {
        animation: shrink-grow .5s linear infinite alternate;
        display: inline-block;
        position: relative;
        transform: scaleX(2);
    }

    @keyframes shrink-grow {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

`;
