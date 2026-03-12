function startGCD() {
    let a = Number(prompt("input a number:"));
    // console.log(a);
    let b = Number(prompt("input another number:"));
    // console.log(b);
    gcd(a, b);
}


function gcd(a, b) { 
    if (a == 0 || b == 0) {
        return console.log(0)
    } else if (a % b == 0) {
        return console.log(b)
    } else {
        return gcd(b, a % b)
    }
}

startGCD();

// for example, comparing 10 and 12. 10 = 2 * 5, 12 = 2 * 2 * 3.

// i realised a few problems.
// firstly, my code is way too long.
// secondly, i did not really make use of the base case scenario basis to try and generalise a pattern.
// thirdly, it did not cover the cases where the denominators are very large. 

// one algorithm I learnt today: euclidean algorithm :D 