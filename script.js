const gameBoard = (() => {
    const board = [];
    
    const newBoard = () => {
        for (let i = 0; i < 9; i++) {
            board[i] = "";
        }
        displayController.wipeBoard();
        if(player2.isTurn) player2.isTurn = false;
        player1.isTurn = true;
    }

    const getWinningRow = (x, y, z) => {
        const row = [board[x], board[y], board[z]];
        return row;
    }

    const isBlank = () => {
        return board.some((element) => {
            return element == "";
        });
    }

    const getBoard = () => {
        return board;
    }
    
    const checkRowsForWinner = (player) => {
        const topRow = getWinningRow('0', '1', '2');
        const midRow = getWinningRow('3', '4', '5');
        const botRow = getWinningRow('6', '7', '8');

        const leftCol = getWinningRow('0', '3', '6');
        const midCol = getWinningRow('1', '4', '7');
        const rightCol = getWinningRow('2', '5', '8');

        const diag1 = getWinningRow('0', '4', '8');
        const diag2 = getWinningRow('2', '4', '6');
    

        const possibleThreesInARow = [topRow, midRow, botRow, leftCol, midCol, rightCol, diag1, diag2];
        for (const row of possibleThreesInARow) {
            if (row.every((ele) => ele == player.symbol)) {
                return true;
            }
        }
        return false;
    }

    const setBoard = (player, id) => {
        //REMINDER! ***cell IDs start at 1, not 0***
        board[id - 1] = player.symbol;
    }

    return{getBoard, isBlank, checkRowsForWinner, setBoard, newBoard};
})();

const gameController = (() => {

    const newGame = () => {
        player1 = createPlayer("", "X");
        player2 = createPlayer("", "O");
        gameBoard.newBoard();
        displayController.renderBoard();
        player1.isTurn = true;
        displayController.updateScoreBoard();
        displayController.enableStartButton();
    }

    const takeTurn = () => {
        return [player1.isTurn, player2.isTurn] = [player2.isTurn, player1.isTurn];
    }

    const checkForWinner = (player) => {
        if (gameBoard.checkRowsForWinner(player)) {
            displayController.announcer(`${player.name} wins!`);
            player.score++;
            displayController.updateScoreBoard();
            gameBoard.newBoard();
        }
        else if (!gameBoard.isBlank()) {
            displayController.announcer("It's a tie!");
            gameBoard.newBoard();
        }
        else return;
    }

    return {newGame, takeTurn, checkForWinner}
})();

function createPlayer (name, symbol, isTurn = false, score = 0) {
    return {name, symbol, isTurn, score};
}

const displayController = (() => {
    const renderBoard = () => {
        let id = 1;
        let boardContainer = document.querySelector(".gameBoard");
        let board = gameBoard.getBoard();
        board.forEach((cell) => {
            button = document.createElement("button");
            button.setAttribute("id", id.toString());
            button.classList.toggle("disabled");
            button.textContent = cell;
            id++
            boardContainer.appendChild(button);
        });

        boardContainer.addEventListener("click", (event) => {
            let button = event.target.closest("button");
            let id = event.target.id;
            if(!button) return;
            let player;

            if (player1.isTurn) player = player1;
            if (player2.isTurn) player = player2;
            if (button.textContent == "") {
                button.textContent = player.symbol;
                gameBoard.setBoard(player, id);
                gameController.checkForWinner(player);
                gameController.takeTurn();                
            }
            else announcer(`That space is already taken, ${player.name}. Try again.`);
        });

    }

    const wipeBoard = () => {
        cells = document.querySelectorAll("button");
        cells.forEach((cell) => {
            if (cell.id != "btnStart") cell.textContent = "";
        });
    }

    //take input field, set it as that players name, remove input field, add <p> with that player name.
    //and return the name?
    const setPlayerName = (player1, player2) => {
        player1TB = document.getElementById("player1Name");
        player2TB = document.getElementById("player2Name");
        if (player1TB.value == "") player1.name = "Jeff";
        else player1.name = player1TB.value;
        if ( player2TB.value == "") player2.name = "Bob";
        else player2.name = player2TB.value;

        player1TB.remove();
        player2TB.remove();
        
        pName1 = document.createElement("p");
        pName1.textContent = player1.name;
        document.getElementById("inputLabelBoxPlayer1").appendChild(pName1);
        
        pName2 = document.createElement("p");
        pName2.textContent = player2.name;
        document.getElementById("inputLabelBoxPlayer2").appendChild(pName2);
        
    }

    const updateScoreBoard = () => {
        score1 = document.getElementById("player1Score");
        score2 = document.getElementById("player2Score");

        score1.textContent = player1.score.toString();
        score2.textContent = player2.score.toString();
    }

    const announcer = (announcement) => {
        banner = document.querySelector("#banner");
        banner.textContent = announcement;
    }

    const enableStartButton = () => { 
        button = document.getElementById("btnStart"); 
        button.addEventListener("click", () => {
            setPlayerName(player1, player2);
            document.querySelectorAll("button").forEach((button) => {
                if (button.id != "btnStart")
                button.classList.toggle("disabled");
            });
            button.remove();
        });
    }

    return {renderBoard, announcer, enableStartButton, updateScoreBoard, setPlayerName, wipeBoard};
})();

gameController.newGame();