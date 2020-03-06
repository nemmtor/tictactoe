import React from 'react';

import PropTypes from 'prop-types';
import PlayerInput from './PlayerInput';
import Form from './Form';
import Submit from './Submit';

const Register = ({
    handleSubmit,
    handleChange,
    playersNames,
    inputErrors,
    setInputErrors,
}) => {
    return (
        <Form
            onSubmit={handleSubmit}
            playersNames={playersNames}
            setInputErrors={setInputErrors}
            inputErrors={inputErrors}
        >
            <PlayerInput
                name="Player 1"
                dataIndex={0}
                onChange={handleChange}
                value={playersNames[0]}
                error={inputErrors[0]}
            />
            <PlayerInput
                name="Player 2"
                dataIndex={1}
                onChange={handleChange}
                value={playersNames[1]}
                error={inputErrors[1]}
            />
            <Submit />
        </Form>
    );
};

Register.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setInputErrors: PropTypes.func.isRequired,
    playersNames: PropTypes.arrayOf(PropTypes.string).isRequired,
    inputErrors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Register;
