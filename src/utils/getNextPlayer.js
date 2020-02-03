const getNextPlayer = (currentPlayerId, players) => {
    const nextPlayer = players.filter(
        player => player.id !== currentPlayerId,
    )[0];
    return nextPlayer;
};

export default getNextPlayer;
