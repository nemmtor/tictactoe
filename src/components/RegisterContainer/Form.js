import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

const FormStyled = styled.form`
    display: flex;
    background: red;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border: none;
    margin: 0;
    padding: 10px 25px;
    background: ${({ colors }) => colors.main};
    border-radius: 15% 2% 15% 2%;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
    font-size: 1.5rem;
    height: 15rem;

    &.effect-appear {
        opacity: 0;
    }

    &.effect-appear-active {
        opacity: 1;
        transition: opacity 0.3s ease-in-out;
    }

    &.effect-enter {
        opacity: 0;
    }

    &.effect-enter-active {
        opacity: 1;
        transition: opacity 0.3s ease-in-out;
    }
    &.effect-exit {
        opacity: 1;
    }

    &.effect-exit-active {
        opacity: 0;
        transition: opacity 0.3s 0.5s ease-in-out;
    }
`;

const Form = ({ children, onSubmit, colors, queries }) => {
    const [show, setShow] = useState(true);

    const handleSubmit = e => {
        e.preventDefault();
        setShow(false);
    };
    return (
        <CSSTransition
            in={show}
            timeout={1000}
            classNames="effect"
            onExited={() => onSubmit()}
            unmountOnExit
            appear
        >
            <FormStyled onSubmit={handleSubmit} colors={colors} novalidate>
                {children}
            </FormStyled>
        </CSSTransition>
    );
};

Form.propTypes = {
    children: PropTypes.node.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default Form;
