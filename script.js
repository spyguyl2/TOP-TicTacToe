const gameBoard = (() => {
    const board = [];
    const row = 3;
    const col = 3;

    for (let n = 0; n < row; n++) {
        board[n] = [];
        for (let i = 0; i < col; i++) {
            board[n][i] = "empty";
        }
    }
//evaluating false despite only containing "empty"
    const hasEmpty = () => {
        return board.some((row) => {
            row.some(element => {
                element == "empty";
            });
        });
    }

    return{board, hasEmpty};
})();

const gameController = (() => {
    const playRound = () => {
        //loop through player turns until someone wins or there's no empty spaces left. declare winner/tie and update score accordingly
        //use while loop?
        
    }
})();

function createPlayer (name, symbol, isTurn = false, score = 0) {
    return {name, symbol, isTurn, score}
}

const displayController = (() => {
    //Use AFTER the game works in the console.
})();

console.table(gameBoard.board);

const player1 = createPlayer("Damon", "X");
const player2 = createPlayer("Bob", "O");

console.log(player1, player2);
console.log(gameBoard.hasEmpty());