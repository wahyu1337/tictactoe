const createPlayer = function(name, marker){
    function getInfo(){
        console.log(`Player: ${name} | Marker: ${marker}`);
    }

    return {name, marker, getInfo};
}

const gameSession = (function(){
    const player1 = createPlayer("WAYS", "X");
    const player2 = createPlayer("Kinan", "O");

    let currentPlayer = player1;

    function switchPlayer(){
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    }

    function getCurrentPlayer(){
        console.log(`${currentPlayer.name}'s Turn!`);
    }

    return{player1,player2, switchPlayer, getCurrentPlayer};
})()

gameSession.player1.getInfo();
gameSession.player2.getInfo();
gameSession.getCurrentPlayer();
gameSession.switchPlayer();
gameSession.getCurrentPlayer();