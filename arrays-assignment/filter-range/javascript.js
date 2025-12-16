let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let a = prompt("give a value of a between 1 to 10 inclusive.");
let b = prompt("give a value of b between 1 to 10 inclusive. it must NOT be the same as a.")

function filterRange (arr, a, b) {
    function filterActual(num) {
        if (num >= a && num < b) {
            return num
        }
    }

    let arrFiltered = arr.filter(filterActual);
    console.log(arrFiltered);
    // console.log(arr)
}

filterRange(arr, a, b);

