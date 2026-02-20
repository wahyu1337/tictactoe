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
})()


// Create Player function (factory function)
const createPlayer = function(name, marker){
    // Retrieve player's information
    function getPlayerInfo(){
        console.log(`Player: ${name} | Marker: ${marker}`)
    }

    return {getPlayerInfo}
}

// Game Controller
const gameController = (function(){
    const player1 = createPlayer("Ways", "X");
    const player2 = createPlayer("Kinan", "O");

    return {player1, player2};    
})()

console.log('\n-------------------OUTPUT-------------------');