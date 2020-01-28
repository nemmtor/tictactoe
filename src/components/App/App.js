import React, { useState } from 'react';
import { Intro, Game } from 'components';
import './App.scss';

function App() {
    const [introFinished, setIntroFinished] = useState(false);
    const view = introFinished ? (
        <Game />
    ) : (
        <Intro setIntroFinished={setIntroFinished} />
    );
    return view;
}

export default App;
