import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputStyled = styled.input`
    width: 15rem;
    background: none;
    border: none;
    border-bottom: 1px solid white;
    padding: 2px;
    color: white;
`;

const PlayerInput = ({ name, onChange, value, dataIndex }) => {
    return (
        <InputStyled
            placeholder="Enter player name..."
            value={value}
            name={name}
            onChange={onChange}
            data-index={dataIndex}
        />
    );
};

PlayerInput.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export default PlayerInput;
