const getMovesLeft = board => {
    const emptyCells = board.filter(cell => !cell);
    return emptyCells.length;
};

const gameIsFinished = board => {
    const movesLeft = getMovesLeft(board);
    if (movesLeft === 0) {
        // Game is finished
        return true;
    }
    return false;
};
export default gameIsFinished;
