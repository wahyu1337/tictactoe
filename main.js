// Gameboard with IIFE pattern
const gameBoard = (function() {
    const boards = ["", "", "", "", "", "", "", "", ""];

    // Get board index.
    const retrieveBoardIndex = () => boards;

    // Give index and marker
    const retrieveBoardMarker = (index, marker) => {
        boards[index] = marker;
    }

    // Resetting the game logic
    const resetGame = function(){
        for (let i = 0; i < boards.length; i++){
            boards[i] = "";
        }
    };

    return {boards, retrieveBoardIndex, retrieveBoardMarker, resetGame};
})();

// create a  player
const createPlayer = function(name, marker){    
    return {name, marker};
};

// game controller with iife
const gameController = (function(){
    const player1 = createPlayer("Ways", "X");
    const player2 = createPlayer("Frost", "O"); 

    // player's turn track
    let currentPlayer = player1;
    let getCurrentPlayer = () => currentPlayer;
    
    // a play round's
    const playRound = function(index){
        // immediately retrieve the marker into board.
        gameBoard.retrieveBoardMarker(index, currentPlayer.marker); 

        // switch the player        
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    };


    return {player1, player2, currentPlayer, getCurrentPlayer, playRound};
})();

gameController.playRound(0);
gameController.playRound(1);
gameController.playRound(2);
gameController.playRound(3);
console.log(gameController.getCurrentPlayer(), "<< Current turns");
gameController.playRound(4);
console.log(gameController.getCurrentPlayer(), "<< Current turns");
console.log(gameBoard.retrieveBoardIndex())