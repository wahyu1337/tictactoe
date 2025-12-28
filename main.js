// Gameboard with IIFE pattern
const gameBoard = (function() {
    const boards = 
    ["", "", "", 
    "", "", "", 
    "", "", ""];

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

        // switch the player after turn's        
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    };

    // Set win & lose logic
    const gameScore = function(){
        let score = 0;
        let boards = gameBoard.retrieveBoardIndex();
        
        // check the array if it has 3 consecutive
        function checkPlayerMarker(arr, amount = 3){
            let count = 0;

        }
        return{score, boards};
    };

    return {player1, player2, currentPlayer, getCurrentPlayer, playRound, gameScore};
})();

gameController.playRound(0);
gameController.playRound(1);
gameController.playRound(5);
gameController.playRound(6);
console.log(gameController.gameScore());