import React from 'react';
import PlayerInput from './PlayerInput';
import Form from './Form';
import Submit from './Submit';

export default function Register({ handleSubmit, handleChange, playersNames }) {
    return (
        <Form onSubmit={handleSubmit}>
            <PlayerInput
                dataIndex={0}
                name="Player 1"
                value={playersNames[0]}
                onChange={handleChange}
                placeHolder="Player 1"
            />
            <PlayerInput
                dataIndex={1}
                name="Player 2"
                value={playersNames[1]}
                onChange={handleChange}
                placeHolder="Player 2"
            />
            <Submit />
        </Form>
    );
}
