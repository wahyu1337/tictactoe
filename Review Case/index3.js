// Factory Function

const createPlayer = function(name, marker){
    function getInfo(){
        console.log(`Player: ${name} | Marker: ${marker}`)
    }

    return {name,
            marker,
            getInfo,
    }
};

const player1 = createPlayer("Ways", "X");
const player2 = createPlayer("Rons", "O");

player1.getInfo()
player2.getInfo()