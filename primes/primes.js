let a = Number(prompt("Input a number: "));
console.log(a);
checkPrime(a);

let b = Number(prompt("Input another number: ")) 
console.log(b);
checkPrime(b);

function checkPrime(x) {
    if (x <= 1) {
        return console.log("This is not a prime number as it is less than or equal to 1!");
    }
    if (x == 2) {
        return console.log("This is a prime number and is the only even prime number.");
    } else {
        let basisNum = Math.sqrt(x);
            for (i = 2; i <= basisNum; i++) {
                if (x % i === 0) {
                    return console.log("This is not a prime!") // the return statement is like an 'exit' button. once it is written, the program will exit out of the entire function.
                }
            } 
        return console.log("This is a prime!")
    }
}