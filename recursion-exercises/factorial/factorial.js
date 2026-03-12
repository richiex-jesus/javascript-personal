let n = Number(prompt("Input a number:"))

function factorialRecursive(n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * factorialRecursive(n - 1);
    }
}

console.log(factorialRecursive(n));