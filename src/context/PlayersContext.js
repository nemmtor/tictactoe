import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const PlayersContext = React.createContext();

export class PlayersProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [
                { id: 0, name: '', mark: 'X' },
                { id: 1, name: '', mark: 'O' },
            ],
            currentPlayerId: 0,
        };

        this.changeCurrentPlayer = this.changeCurrentPlayer.bind(this);
        this.setPlayers = this.setPlayers.bind(this);
    }

    setPlayers(player1Name, player2Name) {
        this.setState(prevState => {
            const { players } = prevState;
            players[0].name = player1Name;
            players[1].name = player2Name;
            return players;
        });
    }

    changeCurrentPlayer() {
        this.setState(prevState => ({
            currentPlayerId: prevState.currentPlayerId ? 0 : 1,
        }));
    }

    render() {
        const { changeCurrentPlayer, setPlayers } = this;
        const { players, currentPlayerId } = this.state;
        const currentPlayer = players[parseInt(currentPlayerId, 10)];
        const { children } = this.props;

        return (
            <PlayersContext.Provider
                value={{
                    players,
                    currentPlayer,
                    changeCurrentPlayer,
                    setPlayers,
                }}
            >
                {children}
            </PlayersContext.Provider>
        );
    }
}

PlayersProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};
