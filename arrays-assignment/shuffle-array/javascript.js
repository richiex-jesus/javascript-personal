let arr = [1, 2, 3];

function shuffle(arr) {
// method 1:
    arr.sort(() => Math.random() - 0.5);
    console.log(arr)
}

shuffle(arr);






// function shuffle(arr) {
//     let randomNumber = (Math.floor(Math.random)) * 6 + 1;
//     if (randomNumber == 1) {
//         return arr = [1, 2, 3];
//         console.log(arr)
//     } else if (randomNumber == 2) {
//         return arr = [1, 3, 2];
//         console.log(arr)
//     } else if (randomNumber == 3) {
//         return arr = [2, 3, 1];
//         console.log(arr)
//     } else if (randomNumber == 4) {
//         return arr = [2, 1, 3];
//         console.log(arr)
//     } else if (randomNumber == 5) {
//         return arr = [3, 1, 2];
//         console.log(arr)
//     } else if (randomNumber == 6) {
//         return arr = [3, 2, 1];
//         console.log(arr)
//     }

// }

// shuffle(arr);