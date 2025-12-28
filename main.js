// Gameboard with IIFE pattern
const gameBoard = (function(){
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
    let getCurrentPlayer = () => console.log(currentPlayer);
    
    // a play round's
    const playRound = function(index){
        // immediately retrieve the marker into board.
        gameBoard.retrieveBoardMarker(index, currentPlayer.marker); 

        // switch the player after turn's        
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    };

    // Check win & lose logic
    const getResult = function(arr){
        const board = gameBoard.retrieveBoardIndex();
        const winPattern = [
            [0, 1, 2] // top row
            [3, 4, 5] // middle row
            [6, 7, 8] // bottom row
            [0, 3, 6] // left column
            [1, 4, 7] // middle column
            [2, 5, 8] // right column
            [0, 4, 8] // diagonal
            [2, 4, 6] // diagonal
        ];

        for (let pattern of winPattern){
            const [a, b, c] = pattern;            
            // win logic pattern
            if( board[a] !== "" && // skip if it's empty strings
                board[a] !== pattern[b] &&
                board[a] !== pattern[c]) {
                return true;   
            };
        };
        return false;
    };

    return {player1, player2, currentPlayer, getCurrentPlayer, playRound, getResult};
})();

console.log(gameBoard.retrieveBoardIndex());
console.log("------------------------------");
gameController.playRound(1)
gameController.playRound(5)
gameController.playRound(2)
gameController.playRound(0)
gameController.playRound(7)
console.log(gameBoard.retrieveBoardIndex());
gameController.getCurrentPlayer();
console.log(gameController.getResult(gameBoard.retrieveBoardIndex()));