let first_num = Number(prompt("Input number, a:"));
let last_num = Number(prompt("Input number, b:"));

function range(first_num, last_num) {
    // for (i = a + 1; i < b; i++) {
    //     result.push(i);
    // }
    // return result (this is the ITERATIVE METHOD)

    vs 

    // consider base case: if the difference between a and b (assuming a > b) is 2, return a + 1 in an array
    if (last_num - first_num == 2) {
        return [first_num + 1]
    } else { // consider recursive case: within a range of numbers (first_num, last_num - 1)
        let result = range(first_num, last_num - 1);
        result.push(last_num - 1);
        return result
    }
}
console.log(range(first_num, last_num));

// e.g. range(1, 5)

// first step: 1 and 5
// -> 5 - 1 = 4 (not 2)
// -> result = range(1, 4) [which has yet to be evaluated and thus need to do this again]
// -> result.push(4)

// second step: 1 and 4
// -> 4 - 1 = 3 (not 2)
// -> result = range (1, 3) [not evaluated, need to execute the function]
// -> result.push(3)

// third step: 1 and 3
// -> 3 - 1 = 2 (yes!) ==> range (1, 3) returns [2]!

// thus, BACKTRACKING to second step (1 and 4):
// result = [2] -> result.push(3) -> result = [2, 3];

// now BACKTRACKING even further to first step (1 and 5):
// result = [2, 3] (currently) -> result.push(4) -> result = [2, 3, 4] (ANSWER)
