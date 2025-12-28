const boards = ["X", "X", "O", "O", "X", "O", "", "", ""];

function checkPlayerMarker(arr){
    let count = 0;
    let last = null;
    
    // logical reason
    for (let i = 0; i < arr.length; i++){
        const currentArr = arr[i];

        // avoid counting empty string
        if (currentArr === ""){
            count = 0;
            last = null;
            continue;
        }

        // mark the previous value
        if(arr[i] !== last){
            last = arr[i];
            count = 0;
        }
        count += 1;

        //check if the array reach same value 3 times in row (win)
        if (count === 3){
            return true;
        }
    }
    return false;
}
console.log(checkPlayerMarker(boards));

// function hasConsecutive(arr, amount) {
//     var last = null;
//     var count = 0;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] != last) {
//             last = arr[i];
//             count = 0;
//         }
//         count += 1;
//         if (amount <= count) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(hasConsecutive(boards, 3));