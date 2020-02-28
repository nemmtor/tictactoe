import React from 'react';
import styled from 'styled-components';

const FormStyled = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    margin: 0;
    padding: 0;
`;

export default function Form({ children, onSubmit }) {
    return (
        <FormStyled onSubmit={onSubmit} novalidate>
            {children}
        </FormStyled>
    );
}
