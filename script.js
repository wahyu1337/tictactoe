// gameboard module
const gameBoard = (function (){
    const boards = ["", "", "", "", "", "", "", "", ""];

    // get the board index
    const retrieveBoardIndex = () => boards;

    // put the marker in board
    const retrieveBoardMarker = (index, marker) => {
        boards[index] = marker;
    };

    // reset the board
    const resetBoard = () => {
        for (let i = 0; i < boards.length; i++){
            boards[i] = "";
        }
    };

    return {boards, retrieveBoardIndex, retrieveBoardMarker, resetBoard};
})();;

// create player func
const createPlayer = function(name, marker){
    return {name, marker};
}

const player1 = createPlayer("Ways", "X");
const player2 = createPlayer("Kinan", "O");

// create game controller for tracks the array index


console.log(player1);
console.log(player2);