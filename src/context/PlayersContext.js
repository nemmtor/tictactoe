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
        this.getCurrentPlayer = this.getCurrentPlayer.bind(this);
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

    getCurrentPlayer() {
        const { currentPlayerId } = this.state;
        const { players } = this.state;
        return players[parseInt(currentPlayerId, 10)];
    }

    changeCurrentPlayer() {
        this.setState(prevState => ({
            currentPlayerId: prevState.currentPlayerId ? 0 : 1,
        }));
    }

    render() {
        const { changeCurrentPlayer, setPlayers } = this;
        const { players } = this.state;
        const { children } = this.props;
        const currentPlayer = this.getCurrentPlayer();

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
