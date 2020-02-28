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
        background: #EEE0CB url(${tictactoe});
        background-size: 150px;
        background-repeat: no-repeat;
        background-position: 10% 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;

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
