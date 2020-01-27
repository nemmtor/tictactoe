import React from 'react';
import { reactLogo } from '../../../assets';
import './App.scss';

function App() {
    return (
        <main className="app">
            <img src={reactLogo} className="app__logo" alt="React logo" />
            <h1 className="app__header">React new app</h1>
        </main>
    );
}

export default App;
