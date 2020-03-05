import { createGlobalStyle } from 'styled-components';
import { tictactoe } from 'images';

export default createGlobalStyle`
    @font-face {
        font-family: 'Audiowide';
        src: url("./fonts/Audiowide-Regular.ttf") format("truetype");
        font-display: swap;
    }

    @font-face {
        font-family: 'Ubuntu';
        src: url("./fonts/Ubuntu-Regular.ttf") format("truetype");
        font-display: swap;
    }

    :root {
        font-family: 'Ubuntu', sans-serif;
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
        min-height: 100vh;
        min-height: calc(var(--vh, 1vh) * 100);
        background: linear-gradient(45deg, rgba(238, 224, 203, 1), rgba(199, 152, 82, 1));
        /* display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center; */
        overflow: hidden;
        display: grid;
        grid-template-rows: 1fr auto;

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
            opacity: .6;
            
            @media(min-width: 768px){
                top: -5rem;
                left: -5rem;
                width: 20rem;
                height: 20rem;
            }

        }
    }

    

    

    
    
`;
