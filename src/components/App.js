import React, { useState } from 'react';
import { ErrorBoundary, Landing, Footer } from 'components';
import { Normalize } from 'styled-normalize';
import styled from 'styled-components';
import Global from './GlobalStyles';
import Game from './Game';

const MainStyled = styled.main`
    --primary-color: #495867;
    --contrast-color: #ce796b;
    --accent-color: #c18c5d;
    --accent2-color: #e7ad99;
    --text-color: #333;
    --text-light-color: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

function App() {
    const [gameStarted, setGameStarted] = useState(false);
    return (
        <>
            <Normalize />
            <Global />
            <ErrorBoundary>
                <MainStyled>
                    {!gameStarted && (
                        <Landing
                            setGameStarted={setGameStarted}
                            gameStarted={gameStarted}
                        />
                    )}
                    {gameStarted && <Game />}
                </MainStyled>
                <Footer />
            </ErrorBoundary>
        </>
    );
}

export default App;
