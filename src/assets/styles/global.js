import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        font-family: sans-serif;
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
        background: rgb(29, 28, 28);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .writer__text,
    .writer__cursor {
        color: #eee;
        font-size: 3rem;
    }

    .writer__cursor {
        animation: shrink-grow 0.5s ease-out infinite alternate;
        display: inline-block;
    }

    @keyframes shrink-grow {
        from {
            transform: scaleY(1);
        }
        to {
            transform: scaleY(0.1);
        }
    }

`;
