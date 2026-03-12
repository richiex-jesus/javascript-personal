function startGCD() {
    let a = Number(prompt("input a number:"));
    // console.log(a);
    let b = Number(prompt("input another number:"));
    // console.log(b);
    let numA = Math.floor(Math.sqrt(a));
    // console.log(numA);
    let numB = Math.floor(Math.sqrt(b));
    // console.log(numB)
    if (numA < numB) {
        return gcd(a, b, numA);
    } else {
        return gcd(a, b, numB);
    }
}


function gcd(a, b, num) {
    if (a <= 0 || b <= 0) {
        return startGCD();
    } else if (a == 1 || b == 1) {
        return 1;
    } else if (a == b && (a > 1 && b > 1)) {
        return a;
    } else {
        if (num == 1) {
            return console.log(1)
        } else if (
            (a % num == 0 && b % num == 0) 
            && 
            ((a < b && (b % a !== 0)) || (b < a && (a % b !== 0)))) {
            return console.log(num)
        } else if (a < b && (b % a == 0)) {
            return console.log(a)
        } else if (b < a && (a % b == 0)) {
            return console.log(b)
        } else {
            return gcd(a, b, num - 1);
        }
    }
   
}

startGCD();

// for example, comparing 10 and 12. 10 = 2 * 5, 12 = 2 * 2 * 3.

// i realised a few problems.
// firstly, my code is way too long.
// secondly, i did not really make use of the base case scenario basis to try and generalise a pattern.