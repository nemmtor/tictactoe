import React, { useState, useEffect } from 'react';
import { Intro, Game, ErrorBoundary } from 'components';
import { Global, Theme } from 'styles';
import { Normalize } from 'styled-normalize';

function App() {
    const [introFinished, setIntroFinished] = useState(false);
    // Uncomment to skip intro:
    // useEffect(() => {
    //     setIntroFinished(true);
    // }, []);
    return (
        <>
            <Normalize />
            <Global />
            <ErrorBoundary>
                <Theme>
                    {(introFinished && <Game />) || (
                        <Intro setIntroFinished={setIntroFinished} />
                    )}
                </Theme>
            </ErrorBoundary>
        </>
    );
}

export default App;
