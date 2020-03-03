import React from 'react';
import ReactDOM from 'react-dom';
import { favicon } from 'images';
import App from './components/App';
import './assets/fonts/Audiowide-Regular.ttf';
import './assets/fonts/Ubuntu-Regular.ttf';

if (process.env.NODE_ENV !== 'production') {
    const whyDidYouRender = require('@welldone-software/why-did-you-render');
    whyDidYouRender(React);
}

// Set 100vh for mobiles
// const vh = window.innerHeight * 0.01;
// document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
    // We execute the same script as before
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

ReactDOM.render(<App />, document.querySelector('#root'));
