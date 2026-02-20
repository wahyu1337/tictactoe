// Default Game Boards
const gameBoard = (function (){
    // Empty Board
    const board = [ "X", "O", "O",
                    "", "X", "O",
                    "O", "X", ""];  
    
    // Print first Board value
    const printBoard = () => console.log(board);
    
    const getBoard = () => board;

    // Reset the board
    function resetBoard(){
        for (let i = 0; i < board.length; i++){
            board[i] = "";
        }
    }

    return {printBoard, getBoard, resetBoard};
})();


// Create Player function (factory function)
const createPlayer = function(name, marker){
    // Retrieve player's information
    function getPlayerInfo(){
        console.log(`Player: ${name} | Marker: ${marker}`)
    }

    return {name, marker, getPlayerInfo}
};

// Game Controller
const gameController = (function(){
    // Take the boards
    const board = gameBoard;

    // Create player inside game controller
    const player1 = createPlayer("Ways", "X");
    const player2 = createPlayer("Kinan", "O");

    // Set Player's turn
    let currentPlayer = player1;

    // Switch Player's turn
    function switchPlayer(){
        // Ternary
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    }

    // get current player's turn information
    function getCurrentPlayer(){
       console.log(`${currentPlayer.name}'s Turn!`);
    }

    // Winner Checkers
    function winnerChecks(){
        let currentBoards = gameBoard.getBoard();
        const winnerPattern = [
            // Row 1, 2, 3 
            [0, 1, 2], // row 1 horizontal
            [3, 4, 5], // row 2 horizontal
            [6, 7, 8], // row 3 horizontal

            // Vertical 1, 2, 3
            [0, 3, 6], // Vertical 1
            [1, 4, 7], // Vertical 2
            [2, 5, 8], // Vertical 3

            // Diagonal
            [0,4,8], // Diagonal Line 1
            [2,4,6] // Diagonal Line 2
        ];

        for (let pattern of winnerPattern){
            const [a, b, c] = pattern;

            if (currentBoards[a] !== "" &&
                currentBoards[a] === currentBoards[b] &&
                currentBoards[a] === currentBoards[c]
            ) {
                return console.log('We have a winner!');
            }
        }
        return console.log("Game still going on!")
    }

    return {board, player1, player2, switchPlayer, getCurrentPlayer, winnerChecks};    
})()

console.log('\n-------------------OUTPUT-------------------');
gameController.board.printBoard();
gameController.getCurrentPlayer();
gameController.winnerChecks();