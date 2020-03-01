import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

const theme = {
    colors: {
        main: '#333',
        contrast: '#EEE0CB',
        accent1: '#839788',
        accent2: '#BFD7EA',
        accent3: '#BAA898',
    },
    queries: {
        mobileS: '(min-width: 320px)',
        mobileM: '(min-width: 375px)',
        mobileL: '(min-width: 425px)',
        tablet: '(min-width: 768px)',
        laptop: '(min-width: 1024px)',
        laptopL: '(min-width: 1440px)',
        desktop: '(min-width: 2560px)',
    },
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
    children: PropTypes.node.isRequired,
};

// TODO: add props validation for children props

export default Theme;
