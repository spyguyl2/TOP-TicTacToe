const gameBoard = (function () {
    const board = [];
    for (let x = 0; x < 10; x++) {
        board.push("empty");
    }
    //#region Arrays of rows/cols/diagonals
    let topRow = [board[0-2]];
    let midRow = [board[3], board[4], board[5]];
    let botRow = [board[6], board[7], board[8]];

    let leftCol = [board[0], board[3], board[6]];
    let midCol = [board[1], board[4], board[7]];
    let rightCol = [board[2], board[5], board[8]];

    let diag1 = [board[0], board[4], board[8]];
    let diag2 = [board[2], board[4], board[6]];
//#endregion
    const potentialThreesInARow = [topRow, midRow, botRow, leftCol, midCol, rightCol, diag1, diag2];

    const updateBoard = () => {
        topRow = [board[0], board[1], board[2]];
        midRow = [board[3], board[4], board[5]];
        botRow = [board[6], board[7], board[8]];

        leftCol = [board[0], board[3], board[6]];
        midCol = [board[1], board[4], board[7]];
        rightCol = [board[2], board[5], board[8]];

        diag1 = [board[0], board[4], board[8]];
        diag2 = [board[2], board[4], board[6]];
    }

    const displayBoard = () => {
        console.log(topRow);
        console.log(midRow);
        console.log(botRow);
    }

    const endTurn = (player) => {
        if (player === player1) player2.isTurn = true;
        else player1.isTurn = true;
    }

    const changeBoard = (player, index) => {
        if (player.isTurn) {
            if (board[index] == "empty") {
                    board[index] = player.symbol;
                    endTurn(player);
                    updateBoard();
                    displayBoard();
            }
        }
        else console.log(`It isn't your turn yet, ${player.name}!`);
    }

    const checkWin = () => {
        //for each possible winning row...
        potentialThreesInARow.forEach(row => {
            //check each cell of that row
            if (row.every (ele => {
                
                //look into how to use Array.every
                //goal is it should cleanly evaluate true or false based on whether or not it's all X's or all O's
            }));
        });
    }

    return { changeBoard}
})();

const displayController = (function () {
    
})();

//add parameter to choose X or O?
function player (name, symbol, isWinner = false, isTurn = false) {
    return { name, symbol, isWinner, isTurn};
} 

const player1 = player("Bob", "X");
const player2 = player("NPC", "O");

player1.isTurn = true;
console.log(player1);
console.log(player2);
gameBoard.changeBoard(player1, 0);
gameBoard.changeBoard(player2, 5);
gameBoard.changeBoard(player1, 2);
gameBoard.changeBoard(player2, 6);
gameBoard.changeBoard(player1, 1);