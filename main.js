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
    const player1 = createPlayer("Player 1", "X");
    const player2 = createPlayer("Player 2", "O");

    // player's turn track
    let currentPlayer = player1;
    let getCurrentPlayer = () => console.log(`Current Turn -> `, currentPlayer);
    
    // a play round's
    const playRound = function(index){
        // immediately retrieve the marker into board.
        gameBoard.retrieveBoardMarker(index, currentPlayer.marker); 

        // switch the player after turn's        
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    };

    // Print the board
    const printBoard = () => {
    const board = gameBoard.retrieveBoardIndex();

    console.log(`
        -----------
        |${board[0] || "-"} | ${board[1] || "-"} | ${board[2] || "-"}|
        |${board[3] || "-"} | ${board[4] || "-"} | ${board[5] || "-"}|
        |${board[6] || "-"} | ${board[7] || "-"} | ${board[8] || "-"}|
        -----------
        `)
    };

    // Check win & lose logic or Get the result win or lose
    const getResult = function(){
        let boards = gameBoard.retrieveBoardIndex();

        console.log(`Player1 ->`, player1);
        console.log(`Player2 ->`, player2);

        // Winner pattern module
        const winPattern = [
            [0, 1, 2], // top row
            [3, 4, 5], // middle row
            [6, 7, 8], // bottom row
            [0, 3, 6], // left column
            [1, 4, 7], // middle column
            [2, 5, 8], // right column
            [0, 4, 8], // diagonal
            [2, 4, 6], // diagonal
        ];
        
        // looping for check each pattern if it's win
        for (let pattern of winPattern){
            const [a, b, c] = pattern;            
            // win logic pattern * ROW
            if( boards[a] !== "" && // skip if it's empty strings
                boards[a] === boards[b] && 
                boards[a] === boards[c]) { 
                // Check the winner's name
                const winners = boards[a] === "X" ? player1 : player2;                
                printBoard();
                console.log(`Winner: `, winners);
                // reset game after game over.
                gameBoard.resetGame();
                currentPlayer = player1;
                return console.log(`(The game will be reset.)\n==========================\n`);
            };          
        };

        // draw checks
        if (boards.filter(cell => cell === "").length === 0){            
            printBoard();
            console.log("Draws");

            // reset game after game over.
            gameBoard.resetGame();
            currentPlayer = player1;
            return console.log(`(The game will be reset.)\n==========================\n`);
        }

        printBoard();
        gameController.getCurrentPlayer();
        return console.log(`Game still going on!\n`);
    };

    return {player1, player2, currentPlayer, getCurrentPlayer, playRound, getResult, printBoard};
})();

gameController.playRound(0);
gameController.playRound(6);
gameController.playRound(2);
gameController.playRound(5);
gameController.playRound(3);
gameController.playRound(8);
gameController.playRound(7);
gameController.playRound(1);
gameController.playRound(1);
gameController.getResult();
gameController.getResult();