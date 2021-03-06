import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border: none;
    margin: 0;
    padding: 25px 25px 0px 25px;
    font-size: 1.5rem;

    &.effect-appear {
        opacity: 0;
    }

    &.effect-appear-active {
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

const Form = ({ children, onSubmit, playersNames, setInputErrors }) => {
    const [show, setShow] = useState(true);

    const handleSubmit = e => {
        e.preventDefault();
        let isError = false;
        const errors2 = playersNames.map((name, i, arr) => {
            if (!name) {
                isError = true;
                return 'Player name cannot be empty!';
            }
            const count = arr.filter(item => item === name);
            if (count.length > 1) {
                isError = true;
                return 'Please use different names';
            }
            if (name.length < 3) {
                isError = true;
                return 'Player name has to be atleast 3 characters long!';
            }
            return '';
        });

        if (isError) {
            setInputErrors(errors2);
            return;
        }
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
            <FormStyled
                onSubmit={handleSubmit}
                autocomplete="off"
                aria-label="Enter players details"
                novalidate
            >
                {children}
            </FormStyled>
        </CSSTransition>
    );
};

Form.propTypes = {
    children: PropTypes.node.isRequired,
    onSubmit: PropTypes.func.isRequired,
    setInputErrors: PropTypes.func.isRequired,
    playersNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Form;
