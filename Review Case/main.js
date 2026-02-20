// Default Game Boards
const gameBoard = (function (){
    // Empty Board
    const board =  ["", "", "",
                    "", "", "",
                    "", "", "",]  
    
    // Print first Board value
    const printBoard = () => console.log(board);


    // Reset the board
    function resetBoard(){
        for (let i = 0; i < board.length; i++){
            board[i] = "";
        }
    }

    return {printBoard, resetBoard};
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

    return {board, player1, player2, switchPlayer, getCurrentPlayer};    
})()

console.log('\n-------------------OUTPUT-------------------');
gameController.board.printBoard();
