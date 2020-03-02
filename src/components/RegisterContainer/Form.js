import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FormStyled = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    margin: 0;
    padding: 0;
`;

const Form = ({ children, onSubmit }) => {
    return (
        <FormStyled onSubmit={onSubmit} novalidate>
            {children}
        </FormStyled>
    );
};

Form.propTypes = {
    children: PropTypes.node.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default Form;
