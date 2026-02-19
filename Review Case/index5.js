const board =  ["X", "X", "",
                "O", "X", "",
                "",  "O", "X"];

function checkWinner(board, marker){
    const winPattern = [
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
    ]
    
    for(let pattern of winPattern){
        const [a, b, c] = pattern;

        if (board[a] === marker &&
            board[b] === marker &&
            board[c] ===  marker) {
                return true;
        }
    }
    return false;
}

console.log(checkWinner(board, "X"));
console.log(checkWinner(board, "O"));