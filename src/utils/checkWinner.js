const winningLinges = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
];

export default function checkWinner(board) {
    const xCells = [];
    const oCells = [];
    let winner;
    board.forEach((cell, cellIndex) => {
        if (cell === 'X') {
            xCells.push(cellIndex);
        }
        if (cell === 'O') {
            oCells.push(cellIndex);
        }
    });

    winningLinges.forEach(line => {
        if (line.every(value => xCells.includes(value))) {
            winner = 'X';
        }
        if (line.every(value => oCells.includes(value))) {
            winner = 'O';
        }
    });
    return winner;
}
