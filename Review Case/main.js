// Default Game Boards
const gameBoard = (function (){
    // Empty Board
    const board = [ "", "", "",
                    "", "", "",
                    "", "", ""];  

    // get board index
    const getBoard = () => board;

    // Place marker for board index
    function placeMarker(index, marker){
        board[index] = marker;
    }

    // Reset the board
    function resetBoard(){
        for (let i = 0; i < board.length; i++){
            board[i] = "";
        }
    }

    return {getBoard, placeMarker, resetBoard};
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
    // Print/Console the board
    const printBoard = () => {
        const board = gameBoard.getBoard();

        console.log(`
                -----------
                |${board[0] || "-"} | ${board[1] || "-"} | ${board[2] || "-"}|
                |${board[3] || "-"} | ${board[4] || "-"} | ${board[5] || "-"}|
                |${board[6] || "-"} | ${board[7] || "-"} | ${board[8] || "-"}|
                -----------
        `)
    }

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
       console.log(`${currentPlayer.name}'s Turn! (${currentPlayer.marker})`);
    }

    // flag agar game berhenti jika selesai.
    let gameOver = false;

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
                // Notification winner message
                console.log(`${currentPlayer.name} is the winner!`);
                // Set gameOver true
                gameOver = true;
                printBoard();
            }
        }
    }
    
    // PLAY ROUND-
    function playRound(index){
        if(gameOver){
            console.log("Game is finish! Reset the game first...");
            return resetGame();
        } else {
            // Start or Put the marker immediately
            gameBoard.placeMarker(index, currentPlayer.marker);
            
            // Print the board after player one round start.
            printBoard();
            
            // Check Game status after print out board.
            winnerChecks();

            // Switch the player after put the marker.
            switchPlayer();
            
            // Get current player's turn after board's print
            getCurrentPlayer();
        }
    }
    
    // Reset Game function
    function resetGame(){
        console.log("Resetting the game...");
        gameOver = false;
        gameBoard.resetBoard();
        // setelah game di reset, kembalikan ke player 1 (X)
        currentPlayer = player1;
        console.log("Game has been reset!\n---------------------")
        getCurrentPlayer();
    }

    return {printBoard, player1, player2, switchPlayer, getCurrentPlayer, playRound, resetGame};    
})()

console.log('\n-------------------OUTPUT-------------------');
gameController.playRound(0);
gameController.playRound(4);
gameController.playRound(3);
gameController.playRound(6);
gameController.playRound(1);
gameController.playRound(2);
// resetting
gameController.playRound(8);
gameController.playRound(1);