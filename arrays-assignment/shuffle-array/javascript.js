let arr = [1, 2, 3, 5, 8];

// function shuffle(arr) {
// // method 1:
//     arr.sort(() => Math.random() - 0.5); // Math.random generates num btw 0 and 1 (e.g. 0.4753..., 0.75643....)

//     // -1 0 1 
//     // (1, 2) --> -0.2
//     // (1, 3) --> 0.456....

//     // [3, 1, 2]
    
//     console.log(arr)
// }

function shuffle(arr) {
    arr.sort(shuffleCheck);
    console.log(arr);
}

function shuffleCheck(a, b) {
    console.log(a, b);
    let r = Math.random() - 0.5;
    console.log("result =", r)
    return r
}

shuffle(arr);






// function shuffle(arr) {
//     let randomNumber = Math.floor(Math.random()) * 6 + 1;
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