import React, { useContext, useState } from 'react';
import { PlayersContext } from 'context';
import Register from './Register';

export default function RegisterContainer({ setPlayersRegistered }) {
    const { setPlayers } = useContext(PlayersContext);
    const [playersNames, setPlayersNames] = useState(['', '']);

    const handleSubmit = () => {
        // VALIDATION HERE
        setPlayers(playersNames[0], playersNames[1]);
        setPlayersRegistered(true);
    };
    const handleChange = e => {
        const newPlayersNames = [...playersNames];
        const index = e.target.getAttribute('data-index');
        newPlayersNames[index] = e.target.value;
        setPlayersNames(newPlayersNames);
        // VALIDATION HERE
    };
    return (
        <Register
            handleSubmit={handleSubmit}
            playersNames={playersNames}
            handleChange={handleChange}
        />
    );
}
