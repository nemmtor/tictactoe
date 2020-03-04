import React, { useState } from 'react';
import { ErrorBoundary, Landing, Footer } from 'components';
import { Global, Theme } from 'styles';
import { Normalize } from 'styled-normalize';
import Game from './Game';

function App() {
    const [gameStarted, setGameStarted] = useState(false);
    return (
        <>
            <Normalize />
            <Global />
            <ErrorBoundary>
                <Theme>
                    {gameStarted && <Game />}
                    {!gameStarted && (
                        <Landing
                            setGameStarted={setGameStarted}
                            gameStarted={gameStarted}
                        />
                    )}
                    <Footer />
                </Theme>
            </ErrorBoundary>
        </>
    );
}

export default App;
