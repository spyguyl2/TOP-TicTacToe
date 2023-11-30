const gameBoard = (function () {
    const board = [];
    for (let x = 0; x < 10; x++) {
        board.push("empty");
    }

    let topRow = [board[0], board[1], board[2]];
    let midRow = [board[3], board[4], board[5]];
    let botRow = [board[6], board[7], board[8]];

    let leftCol = [board[0], board[3], board[6]];
    let midCol = [board[1], board[4], board[7]];
    let rightCol = [board[2], board[5], board[8]];

    let diag1 = [board[0], board[4], board[8]];
    let diag2 = [board[2], board[4], board[6]];    

    const resetBoard = () => {
        board.forEach (i => {
            board[i] = "empty"
        });
        updateBoard();
        displayBoard();
    }

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
        if (player === player1) {
            player2.isTurn = true;
            player1.isTurn = false;
        }
        else if (player === player2) {
            player1.isTurn = true;
            player2.isTurn = false;
        }
    }

    const changeBoard = (player, index) => {
        if (player.isTurn) {
            if (board[index] == "empty") {
                    board[index] = player.symbol;
                    updateBoard();
                    displayBoard();
                    checkWin(player);
                    endTurn(player);
            }
            else console.log('That space is already taken!');
        }
        else console.log(`It isn't your turn yet, ${player.name}!`);
    }

    const checkWin = (player) => {
        //get all possible rows
        const potentialThreesInARow = [topRow, midRow, botRow, leftCol, midCol, rightCol, diag1, diag2];
        //for each possible winning row...
        potentialThreesInARow.forEach(row => {
            //check each cell of that row
            if (row.every(ele => ele == player.symbol)) {
                console.log(`${player.name} wins!`);
                player.score++;
                console.log(player1.name, player1.score, player2.name, player2.score);
                resetBoard()
            }
        });
        
    }

    return { changeBoard}
})();

const displayController = (function () {
    
})();

function player (name, symbol, isWinner = false, isTurn = false, score = 0) {
    return { name, symbol, isWinner, isTurn, score};
} 

function 

const player1 = player("John", "X");
const player2 = player("Jane", "O");
player1.isTurn = true;

