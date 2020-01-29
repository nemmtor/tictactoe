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
        small: '1em',
        medium: '2em',
        large: '3em',
    },
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
