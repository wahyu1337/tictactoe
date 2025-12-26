// gameboard module
const gameBoard = (function (){
    const boards = ["", "", "", "", "", "", "", "", ""];
    // get the board index
    const retrieveboardIndex = () => boards;
    // put the marker in board
    const retrieveBoardMarker = (index, marker) => {
        boards[index] = marker;
    };
    // reset the board
    const resetBoard = () => {
        for (let i = 0; i < boards.length; i++){
            boards[i] = "";
        }
    };
    return{retrieveboardIndex, retrieveBoardMarker, resetBoard};
})();;

const play = gameBoard;
console.log(play.retrieveboardIndex());