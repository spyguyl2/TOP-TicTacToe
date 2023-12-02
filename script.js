const gameBoard = (() => {
    const board = [];
    let row = 3;
    let col = 3;

    for (let n = 0; n < row; n++) {
        board[n] = [];
        for (let i = 0; i < col; i++) {
            board[n][i] = "empty";
        }
    }

    return{board};

})();

const gameController = (() => {

})();

function createPlayer (name, symbol) {
    return {name, symbol}
}

const displayController = (() => {
    //Use AFTER the game works in the console.
})();

console.table(gameBoard.board);