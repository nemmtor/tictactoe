import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const PlayersContext = React.createContext();

export class PlayersProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [
                { id: 0, name: 'Kacper', mark: 'X' },
                { id: 1, name: 'Filip', mark: 'O' },
            ],
            currentPlayerId: 0,
        };

        this.setCurrentPlayerId = this.setCurrentPlayerId.bind(this);
    }

    setCurrentPlayerId() {
        this.setState(prevState => ({
            currentPlayerId: prevState.currentPlayerId ? 0 : 1,
        }));
    }

    render() {
        const { setCurrentPlayerId } = this;
        const { players, currentPlayerId } = this.state;
        const currentPlayer = players[currentPlayerId];
        const { children } = this.props;

        return (
            <PlayersContext.Provider
                value={{
                    players,
                    currentPlayer,
                    setCurrentPlayerId,
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
