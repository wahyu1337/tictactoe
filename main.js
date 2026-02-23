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

// Create player
const btnStart = document.querySelector(".btnStart");
btnStart.addEventListener("click", function(){
    // DOM for input.
    const p1 = document.getElementById("player1").value;
    const p2 = document.getElementById("player2").value;
    const playerInfo = document.querySelector("#playerInfo");
    // Create player name "paragraph"
    const player1Name = document.createElement("p");
    const player2Name = document.createElement("p");
        player1Name.classList.add("player");
        player2Name.classList.add("player");

    if(p1 !== "" && p2 !== ""){
        // Start game
        gameController.startGame(p1, p2);
     
        // Display and get player's name data
        player1Name.textContent = p1 + " (X)";
        player2Name.textContent = p2 + " (O)"; 
        playerInfo.appendChild(player1Name);
        playerInfo.appendChild(player2Name);

        // console message
        console.log("Player Created.");
        console.log("Player 1 = " + p1);
        console.log("Player 2 = " + p2);                
    } else {
        console.log("Error, put name for player first!")
    }    
});

// Restart function
// add restart button
const restart = document.createElement("div");
const btnRestart = document.createElement("button");

btnRestart.classList.add("btnRestart");
btnRestart.textContent = "RESTART";

btnRestart.addEventListener("click", function(){
    // Reset the board
    console.log("Restarting the game...");
    gameController.resetGame();
    gameController.printBoard();

    // re-display the board
    updateBoard();
});

// displayer restart button
document.body.appendChild(restart); 

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

    // var for setup player
    let player1 = null;
    let player2 = null;

    // Set Player's turn
    let currentPlayer = null;       
    
    //func buat start gamenya.
    function startGame(p1name, p2name){
        // set player name and marker
        player1 = createPlayer(p1name, "X");
        player2 = createPlayer(p2name, "O");
        
        // set player's turn here
        currentPlayer = player1;

        // display the board & player info after game start. 
        document.querySelector("#board").style.display = "grid";
        document.querySelector("#playerInfo").style.display = "grid";

        // hide start and input
        document.querySelector("#playerSetup").style.display = "none";
        
        // display restart button after game's start
        restart.appendChild(btnRestart);
        
    };

    //DOM winner informations
    const winners = document.querySelector("#winnerInfo");
    const winnersName = document.createElement("p");
        winnersName.classList.add('winnersName');    

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
                // console winner message
                console.log(`${currentPlayer.name} is the winner!`);
                // Display the winner message
                winnersName.textContent = `${currentPlayer.name} is the winner!`;                
                winners.appendChild(winnersName);
                // Set gameOver true
                gameOver = true;
                printBoard();
                return;
            } else if ( currentBoards[a] !== "" &&
                        currentBoards[a] !== currentBoards[b] &&
                        currentBoards[a] !== currentBoards[c]
            ) {
                console.log()
            }
        }

        const isDraw = currentBoards.every(cell => cell !== "")
        if(isDraw){
            console.log("Game's Draw!");
            gameOver = true;
            printBoard();
        }
    }
    
    // PLAY ROUND-
    function playRound(index){
        // if there's index.
        if(gameBoard.getBoard()[index] !== "") return;
        
        // If game's over
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

        // check jika sudah ada pemenang
        if(winners.contains(winnersName)){
            winners.removeChild(winnersName);
        };

        // Reset gameOver..
        gameOver = false;

        // Reset Boardnya.
        gameBoard.resetBoard();

        // setelah game di reset, kembalikan ke player 1 (X)
        currentPlayer = player1;
        console.log("Game has been reset!\n---------------------")
        getCurrentPlayer();
    }

    return {printBoard, player1, player2, switchPlayer, getCurrentPlayer, playRound, resetGame, startGame};    
})()

// DOM MANIPULATION
const boards = document.querySelector("#board");

// Loop to made a cell;
for(let i = 0; i < 9; i++){
    // create button HTML element
    const cell = document.createElement("button");
    cell.classList.add("cell");

    //text
    cell.textContent = "";
    cell.addEventListener("click", function(){
        console.log("Cell-" + i + " diklik!")
        gameController.playRound(i);
        updateBoard();
    });

    // append the button into html
    boards.appendChild(cell)
}

function updateBoard(){
    // DOM
    // get board
    const cells = document.querySelectorAll("#board button");
    const boardData = gameBoard.getBoard();

    cells.forEach(function(cell, index){
        // make X red color and O blue color
        if (boardData[index] === "X"){
            cell.style.color = "red";
        } else {
            cell.style.color = "blue";
        }
        cell.textContent = boardData[index];
        cell.setAttribute("data-marker", boardData[index]);

    })
}   
console.log('-----OUTPUT-----');