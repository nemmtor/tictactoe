import React, { useState } from 'react';
import { Intro, Game } from 'components';
import { Global, Theme } from 'styles';
import { Normalize } from 'styled-normalize';

function App() {
    const [introFinished, setIntroFinished] = useState(false);
    const view = introFinished ? (
        <Game />
    ) : (
        <Intro setIntroFinished={setIntroFinished} />
    );
    return (
        <>
            <Normalize />
            <Global />
            <Theme>{view}</Theme>
        </>
    );
}

export default App;
