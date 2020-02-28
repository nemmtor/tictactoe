import React, { useState } from 'react';
import { Intro, Game, ErrorBoundary, Footer } from 'components';
import { Global, Theme } from 'styles';
import { Normalize } from 'styled-normalize';

function App() {
    const [introFinished, setIntroFinished] = useState(false);
    return (
        <>
            <Normalize />
            <Global />
            <ErrorBoundary>
                <Theme>
                    {introFinished && <Game />}
                    {!introFinished && (
                        <Intro setIntroFinished={setIntroFinished} />
                    )}
                    <Footer />
                </Theme>
            </ErrorBoundary>
        </>
    );
}

export default App;
