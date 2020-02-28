import React from 'react';
import styled from 'styled-components';

const InputStyled = styled.input`
    width: 15rem;
    background: none;
    border: none;
    border-bottom: 1px solid white;
    padding: 2px;
    color: white;
`;

export default function PlayerInput({
    name,
    onChange,
    placeHolder,
    value,
    dataIndex,
}) {
    return (
        <InputStyled
            value={value}
            name={name}
            placeholder={placeHolder}
            onChange={onChange}
            data-index={dataIndex}
        />
    );
}
