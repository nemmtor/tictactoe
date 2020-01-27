import React, { useState } from 'react';
import Intro from '../Intro';
import './App.scss';

function App() {
    const [introFinished, setIntroFinished] = useState(false);
    const view = introFinished ? null : (
        <Intro setIntroFinished={setIntroFinished} />
    );
    return view;
}

export default App;
