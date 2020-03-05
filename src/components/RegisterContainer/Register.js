import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PlayerInput from './PlayerInput';
import Form from './Form';
import Submit from './Submit';

export default function Register({
    handleSubmit,
    handleChange,
    playersNames,
    show,
    setShow,
}) {
    const { colors, queries } = useContext(ThemeContext);
    return (
        <Form
            onSubmit={handleSubmit}
            colors={colors}
            queries={queries}
            show={show}
            setShow={setShow}
        >
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
