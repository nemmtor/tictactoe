import React, { useContext, useEffect } from 'react';
import styled, { ThemeContext } from 'styled-components';
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
    width: 15rem;
    background: none;
    border: none;
    border-bottom: 1px solid ${({ colors }) => colors.main};
    padding: 2px;
    color: #333;
`;

const PlayerInput = ({ name, onChange, value, dataIndex, error }) => {
    const { colors } = useContext(ThemeContext);
    return (
        <LabelStyled htmlFor={name}>
            <InputStyled
                colors={colors}
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
