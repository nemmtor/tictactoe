export default function getMovesLeft(board) {
    const emptyCells = board.filter(cell => !cell);
    console.log(emptyCells.length);
    return emptyCells.length;
}
