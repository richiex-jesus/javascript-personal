const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function IsEven(number) {
    return number % 2 == 0;
}

let arrFiltered = arr.filter(IsEven)

console.log(arrFiltered);

function multiply(number) {
    return number * 3;
}

let arrMultiplied = arrFiltered.map(multiply);

console.log(arrMultiplied);

const totalSum = arrMultiplied.reduce((total, currentItem) => {
    return total * currentItem;
}, 1);

console.log(totalSum);