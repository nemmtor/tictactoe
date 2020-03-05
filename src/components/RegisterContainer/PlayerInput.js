import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';

const LabelStyled = styled.label`
    position: relative;
    &::after {
        content: 'Player name cannot be empty!';
        width: 100%;
        font-size: 0.5em;
        display: block;
        opacity: ${({ error }) => (error ? 1 : 0)};
        position: absolute;
        color: tomato;
        transition: opacity 0.5s ease-in-out;
    }
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
        <LabelStyled htmlFor={name} error={error}>
            <InputStyled
                colors={colors}
                placeholder={`Player ${dataIndex + 1} name...`}
                value={value}
                name={name}
                onChange={onChange}
                data-index={dataIndex}
                autocomplete="off"
            />
        </LabelStyled>
    );
};

PlayerInput.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    dataIndex: PropTypes.number.isRequired,
    error: PropTypes.bool.isRequired,
};

export default PlayerInput;
