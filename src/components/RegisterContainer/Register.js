import React from 'react';
import PlayerInput from './PlayerInput';
import Form from './Form';
import Submit from './Submit';

export default function Register({ handleSubmit, handleChange, playersNames }) {
    return (
        <Form onSubmit={handleSubmit}>
            <PlayerInput
                name="Player 1"
                dataIndex={0}
                value={playersNames[0]}
                onChange={handleChange}
            />
            <PlayerInput
                name="Player 2"
                dataIndex={1}
                value={playersNames[1]}
                onChange={handleChange}
            />
            <Submit />
        </Form>
    );
}
