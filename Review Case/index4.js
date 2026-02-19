const createPlayer = function(name, marker){
    function getInfo(){
        console.log(`Player: ${name} | Marker: ${marker}`);
    }

    return {name, marker, getInfo};
}

const gameSession = (function(){
    const player1 = createPlayer("WAYS", "X");
    const player2 = createPlayer("Kinan", "O");

    return{player1,player2};
})()

gameSession.player1.getInfo();
gameSession.player2.getInfo();