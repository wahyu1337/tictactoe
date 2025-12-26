// gameboard module

const gameBoard = (function (){
    const board = ["", "", "", "", "", "", "", "", ""];

    const getBoard = () => {
        for (let i = 0; i < 9; i++){
            if(i % 2 === 0){
                board.push("O");
            } else {
                board.push("X");
            }
        }

    }

    return {getBoard};
})();