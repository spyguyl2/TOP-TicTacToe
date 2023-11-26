const gameBoard = (function () {
    const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const topRow = board.slice(0,3);
    const midRow = board.slice(3,6);
    const botRow = board.slice(6,9);
    const displayBoard = () => {
        console.log(board);
        console.log(topRow);
        console.log(midRow);
        console.log(botRow);
    }
    return { displayBoard }
})();

const displayController = (function () {
    
})();

//add parameter to choose X or O?
function player (name, symbol) {
    return { name, symbol};
} 

const damon = player("Damon", "X");
const npc = player("NPC", "O");

console.log(damon);
console.log(npc);
gameBoard.displayBoard();