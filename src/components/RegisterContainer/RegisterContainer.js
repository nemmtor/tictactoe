import React, { useContext, useState } from 'react';
import { PlayersContext } from 'context';
import PropTypes from 'prop-types';
import Register from './Register';

const RegisterContainer = ({ setPlayersRegistered }) => {
    const { setPlayers } = useContext(PlayersContext);
    const [playersNames, setPlayersNames] = useState(['', '']);
    const [inputErrors, setInputErrors] = useState(['', '']);

    const handleSubmit = () => {
        setPlayers(playersNames[0], playersNames[1]);
        setPlayersRegistered(true);
    };
    const handleChange = e => {
        const newPlayersNames = [...playersNames];
        const index = e.target.getAttribute('data-index');
        newPlayersNames[parseInt(index, 10)] = e.target.value;
        setPlayersNames(newPlayersNames);
    };
    return (
        <Register
            handleSubmit={handleSubmit}
            playersNames={playersNames}
            handleChange={handleChange}
            inputErrors={inputErrors}
            setInputErrors={setInputErrors}
        />
    );
};

RegisterContainer.propTypes = {
    setPlayersRegistered: PropTypes.func.isRequired,
};

export default RegisterContainer;
