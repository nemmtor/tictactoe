import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        main: '#222831',
        accent: '#393e46',
        contrast: '#00adb5',
        text: '#eeeeee',
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

// TODO: add props validation for children props

export default Theme;
