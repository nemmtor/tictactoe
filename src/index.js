import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components';
import { favicon } from 'images';

if (process.env.NODE_ENV !== 'production') {
    const whyDidYouRender = require('@welldone-software/why-did-you-render');
    whyDidYouRender(React);
}

// Set 100vh for mobiles
const vh = window.innerHeight * 0.1;
document.documentElement.style.setProperty('--vh', `${vh}px`);

ReactDOM.render(<App />, document.querySelector('#root'));
