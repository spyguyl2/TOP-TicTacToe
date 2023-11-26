const gameBoard = (function () {
    const board = [];
    for (let x = 0; x < 10; x++) {
        board.push("empty");
    }
    
    const topRow = [board[0], board[1], board[2]];
    const midRow = [board[3], board[4], board[5]];
    const botRow = [board[6], board[7], board[8]];

    const leftCol = [board[0], board[3], board[6]];
    const midCol = [board[1], board[4], board[7]];
    const rightCol = [board[2], board[5], board[8]];

    const diag1 = [board[0], board[4], board[8]];
    const diag2 = [board[2], board[4], board[6]];

    const potentialThreesInARow = [topRow, midRow, botRow, leftCol, midCol, rightCol, diag1, diag2];

    const displayBoard = () => {
        console.log(board);
        console.log(topRow);
        console.log(midRow);
        console.log(botRow);
    }

    const changeBoard = (player, x) => {
        if (player.isTurn) {
            board[x] = player.symbol;
            player.isTurn = false;
        }
        else console.log(`It isn't your turn yet, ${player.name}!`);
    }

    const checkWin = () => {
        //for each possible winning row...
        potentialThreesInARow.forEach(x => {
            //check each cell of that row
            x.forEach(x => {
                if (x == "X" || x == "O");
            });
        });
    }

    return { displayBoard, changeBoard, checkWin}
})();

const displayController = (function () {
    
})();

//add parameter to choose X or O?
function player (name, symbol, isWinner = false, isTurn = true) {
    const mark = (x) => {
        if(isTurn) {
            gameBoard.board[x] = symbol;
            isTurn = false
        }
        else console.log(`It isn't your turn yet, ${name}!`);
    }
    return { name, symbol, isWinner, isTurn, mark};
} 

const player1 = player("Bob", "X");
const npc = player("NPC", "O");

console.log(player1);
console.log(npc);
gameBoard.displayBoard();
gameBoard.changeBoard(player1, 0);
gameBoard.changeBoard(npc, 1);
gameBoard.changeBoard(player1, 2);