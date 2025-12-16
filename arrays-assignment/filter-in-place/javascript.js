let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function filterRangeInPlace(arr, a, b) {
    for (i = 0; i < arr.length; i++) {
        let num = arr[i]
        if (num < a || num > b) { // mistake earlier: used && operator instead of || operator. did a <= num <= b but problem is now splice can't be implemented.
            arr.splice(i, 1);
            i-- // what about i = 0? it does NOT work because you need i-- to ensure that you do not repeat checks on items that you have already checked!
        }
    }
}

filterRangeInPlace(arr, 6, 7);
alert(arr);


