import React, { useContext, useState } from 'react';
import { PlayersContext } from 'context';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RegistrationHeader = styled.header`
    font-size: 3rem;
    margin-bottom: 60px;
`;

const FormStyled = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    margin: 0;
    padding: 0;
`;

const InputsGroupStyled = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
`;

const InputStyled = styled.input`
    width: 15rem;
    background: none;
    border: none;
    border-bottom: 1px solid white;
    padding: 2px;
    color: white;
`;

const SubmitStyled = styled.input`
    width: 15rem;
    background: transparent;
    margin-top: 60px;
    color: white;
    cursor: pointer;
    text-transform: uppercase;
`;

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
                <InputsGroupStyled>
                    <InputStyled
                        type="text"
                        onChange={handleChangeP1}
                        value={player1Name}
                        placeholder="Player 1"
                    />
                    <p>VS</p>
                    <InputStyled
                        type="text"
                        onChange={handleChangeP2}
                        value={player2Name}
                        placeholder="Player 2"
                    />
                </InputsGroupStyled>

                <SubmitStyled type="submit" value="Start" />
            </FormStyled>
        </>
    );
};

PlayersRegistration.propTypes = {
    setPlayersRegistered: PropTypes.func.isRequired,
};

export default PlayersRegistration;
