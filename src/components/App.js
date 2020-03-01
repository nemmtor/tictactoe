import React, { useState } from 'react';
import { ErrorBoundary, Landing, Game, Footer } from 'components';
import { Global, Theme } from 'styles';
import { Normalize } from 'styled-normalize';

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
                        <Landing setGameStarted={setGameStarted} />
                    )}
                    <Footer />
                </Theme>
            </ErrorBoundary>
        </>
    );
}

export default App;
