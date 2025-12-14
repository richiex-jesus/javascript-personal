function getUserInput() {
    let userInput = prompt("Key in a value of n.");
    return parseInt(userInput);
}

// console.log(getUserInput()); 
// for debugging purposes only

// function primeGenerator() {

//     n = getUserInput();

let n = getUserInput();

primeGenerator:
for (i = 2; i <= n; i++) {
    for (j = 2; j < i; j++) {
        if (i % j == 0) continue primeGenerator;
    }
    console.log(i);
}




// n = 9;

// nextPrime:
// for (let i = 2; i <= n; i++) { // for each i...

//   for (let j = 2; j < i; j++) { // look for a divisor..
//     if (i % j == 0) continue nextPrime; // not a prime, go next i
//   }

//   console.log( i ); // a prime
// }




