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
    fontSizes: {
        small: '1rem',
        medium: '2rem',
        large: '3rem',
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
