import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

const WarningStyled = styled.span`
    width: 100%;
    font-size: 0.5em;
    display: block;
    position: absolute;
    color: tomato;
    will-change: opacity;
    &.effect-enter {
        opacity: 0;
    }

    &.effect-enter-active {
        opacity: 1;
        transition: opacity 0.5s ease-out;
    }
`;

const LabelStyled = styled.label`
    position: relative;
`;

const InputStyled = styled.input`
    background: none;
    border: none;
    border-bottom: 1px solid var(--text-color);
    border-radius: 10px;
    padding: 2px;
    color: var(--text-color);
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3), -3px -3px 5px rgba(0, 0, 0, 0.3);
    margin-top: 25px;
    padding: 15px;
    width: 100%;

    &::placeholder {
        color: var(--text-color);
        opacity: 0.6;
    }
`;

const PlayerInput = ({ name, onChange, value, dataIndex, error }) => {
    return (
        <LabelStyled htmlFor={name}>
            <InputStyled
                placeholder={`Player ${dataIndex + 1} name...`}
                value={value}
                name={name}
                onChange={onChange}
                data-index={dataIndex}
                autocomplete="off"
            />
            <CSSTransition
                in={!!error}
                timeout={500}
                classNames="effect"
                unmountOnExit
            >
                <WarningStyled>{error}</WarningStyled>
            </CSSTransition>
        </LabelStyled>
    );
};

PlayerInput.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    dataIndex: PropTypes.number.isRequired,
    error: PropTypes.string.isRequired,
};

export default PlayerInput;
