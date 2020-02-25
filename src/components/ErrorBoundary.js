import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ErrorMessageStyled = styled.h1`
    color: white;
`;

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // eslint-disable-next-line no-console
        console.log(error, errorInfo);
    }

    render() {
        const { children } = this.props;
        const { hasError } = this.state;

        if (hasError) {
            return (
                <ErrorMessageStyled>Something went wrong.</ErrorMessageStyled>
            );
        }

        return children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
};
export default ErrorBoundary;
