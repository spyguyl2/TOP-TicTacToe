const gameBoard = (function () {
    const board = new Array(9);

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

 //   const checkWin = () => {
   //     potentialThreesInARow.forEach(x => {
     //       
       // });
    //}

    return { displayBoard }
})();

const displayController = (function () {
    
})();

//add parameter to choose X or O?
function player (name, symbol, isWinner) {
    return { name, symbol, isWinner};
} 

const player1 = player("Player", "X");
const npc = player("NPC", "O");

console.log(player1);
console.log(npc);
gameBoard.displayBoard();