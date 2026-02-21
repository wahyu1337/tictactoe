// board selection
const board = document.querySelector("#board");

// looping for dynamic button
for (let i = 0; i < 9; i++){
    const cell = document.createElement("button");

    cell.textContent = i;
    cell.addEventListener("click", function(){
        console.log("Cell ke-" + i + " diklik!")
    });
    board.appendChild(cell);
};