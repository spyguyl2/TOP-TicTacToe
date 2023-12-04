const gameBoard = (() => {
    const board = [];
    const row = 3;
    const col = 3;
    
    const newBoard = () => {
        for (let n = 0; n < row; n++) {
            board[n] = [];
            for (let i = 0; i < col; i++) {
                board[n][i] = "empty";
            }
        }
    }

    const getCell = (num) => {
        const array = num.split('');
        const row = (array[0]);
        const col = (array[1]);
        return board[row][col];
    }

    const getWinningRow = (x, y, z) => {
        cell1 = getCell(x);
        cell2 = getCell(y);
        cell3 = getCell(z);
        const row = [cell1, cell2, cell3];
        return row;
    }

    const hasEmpty = () => {
        return board.some((row) => {
            return row.some(element => {
                return element == "empty";
            });
        });
    }

    const getBoard = () => {
        return board;
    }
    
    const checkRowsForWinner = (player) => {
        const topRow = getWinningRow("00", "01", "02");
        const midRow = getWinningRow("10", "11", "12");
        const botRow = getWinningRow("20", "21", "22");

        const leftCol = getWinningRow("00", "10", "20");
        const midCol = getWinningRow("01", "11", "21");
        const rightCol = getWinningRow("02", "12", "22");

        const diag1 = getWinningRow("00", "11", "22");
        const diag2 = getWinningRow("02", "11", "20");
    

        const possibleThreesInARow = [topRow, midRow, botRow, leftCol, midCol, rightCol, diag1, diag2];
        for (const row of possibleThreesInARow) {
            if (row.every((ele) => ele == player.symbol)) {
                return true;
            }
        }
        return false;
    }

    const displayBoard = () => {
        console.table(board);
    }

    const setBoard = (player, x, y) => {
        board[x][y] = player.symbol;
        getBoard();
    }

    return{getBoard, hasEmpty, checkRowsForWinner, setBoard, displayBoard, newBoard};
})();

const gameController = (() => {

    const newGame = () => {
        gameBoard.newBoard();
        player1 = createPlayer("Damon", "X");
        player2 = createPlayer("Bob", "O");
        player1.isTurn = true;
        gameBoard.displayBoard();
        playRound();
    }

    const playRound = () => {
        //loop through player turns until someone wins or there's no empty spaces left. declare winner/tie and update score accordingly
        let hasWon = false;
        while(gameBoard.hasEmpty() && !hasWon) {
            requestSelection(player1);
            gameBoard.displayBoard();
            hasWon = checkForWinner(player1);
            if (hasWon)break;
            requestSelection(player2);
            gameBoard.displayBoard();
            hasWon = checkForWinner(player2);
            if (hasWon)break;
        }
    }

    const checkForWinner = (player) => {
        if (gameBoard.checkRowsForWinner(player)) {
            console.log(`${player.name} wins!`);
            player.score++;
            return true;
        }
        return false;
    }

    const requestSelection = (player) => {
        let isLegalMove = false;
        while(!isLegalMove) {
            let choice = prompt(`Select a cell, ${player.name}.`);
            const array = choice.split('');
            x = parseInt(array[0]);
            y = parseInt(array[1]);
            if (gameBoard.getBoard()[x][y] == "empty") isLegalMove = true;
            else console.log("That space is already taken. Try again.")
        }
        gameBoard.setBoard(player, x, y);
    }


    return {newGame, playRound, requestSelection}
})();

function createPlayer (name, symbol, isTurn = false, score = 0) {
    
     return {name, symbol, isTurn, score}
}

const displayController = (() => {
    //Use AFTER the game works in the console.
})();

gameController.newGame();
