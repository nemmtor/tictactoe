import React, { useState } from 'react';
import { ErrorBoundary, Landing, Footer } from 'components';
import { Global, Theme } from 'styles';
import { Normalize } from 'styled-normalize';
import styled from 'styled-components';
import Game from './Game';

const MainStyled = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

function App() {
    const [gameStarted, setGameStarted] = useState(true);
    return (
        <>
            <Normalize />
            <Global />
            <ErrorBoundary>
                <Theme>
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
                </Theme>
            </ErrorBoundary>
        </>
    );
}

export default App;
