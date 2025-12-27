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

// create game controller for tracks the array index
const gameControl = (function(){
    const player1 = createPlayer("Ways", "X");
    const player2 = createPlayer("Donk", "O");

    // turn tracks
    let currentPlayer = player1;

    // A playround
    const playRound = function(index){
        gameBoard.retrieveBoardMarker(index, currentPlayer.marker);
        // Switch the player's turn
       currentPlayer = currentPlayer === player1 ? player2 : player1;       
    };

    // return all the variable
    return{player1, player2, currentPlayer, playRound};
})();

gameControl.playRound(0);
gameControl.playRound(1);
gameControl.playRound(5);
console.log(gameBoard.retrieveBoardIndex());