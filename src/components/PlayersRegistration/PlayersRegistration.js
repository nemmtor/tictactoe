import React, { useContext, useState } from 'react';
import { PlayersContext } from 'context';
import PropTypes from 'prop-types';
import Styles from './styles';

const {
    RegistrationHeader,
    FormStyled,
    PlayerInputStyled,
    PlayerInputsGroup,
    SubmitStyled,
} = Styles;

const PlayersRegistration = ({ setPlayersRegistered }) => {
    const { setPlayers } = useContext(PlayersContext);
    const [player1Name, setPlayer1Name] = useState('');
    const [player2Name, setPlayer2Name] = useState('');

    const handleChangeP1 = e => {
        setPlayer1Name(e.target.value);
    };
    const handleChangeP2 = e => {
        setPlayer2Name(e.target.value);
    };
    const handleSubmit = e => {
        e.preventDefault();
        setPlayers(player1Name, player2Name);
        setPlayersRegistered(true);
    };
    return (
        <>
            <RegistrationHeader>
                Please enter player&apos;s details!
            </RegistrationHeader>
            <FormStyled onSubmit={handleSubmit}>
                <PlayerInputsGroup>
                    <PlayerInputStyled
                        type="text"
                        onChange={handleChangeP1}
                        value={player1Name}
                        placeholder="Player 1"
                    />
                    <p>VS</p>
                    <PlayerInputStyled
                        type="text"
                        onChange={handleChangeP2}
                        value={player2Name}
                        placeholder="Player 2"
                    />
                </PlayerInputsGroup>

                <SubmitStyled type="submit" value="Start" />
            </FormStyled>
        </>
    );
};

PlayersRegistration.propTypes = {
    setPlayersRegistered: PropTypes.func.isRequired,
};

export default PlayersRegistration;
