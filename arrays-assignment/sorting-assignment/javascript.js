let arr = [5, 2, -1, 8, 10];

function arrSorter(a, b) {
    // method 1: return b - a --> if b - a < 0, then a is in front of b.
    // method 2 is below. a result of -1 would mean that a is front of b, a result of 1 would mean that b is in front of a.
    if (a > b) return -1;
    if (a == b) return 0;
    if (a < b) return 1;
}

let sortedArr = arr.sort(arrSorter);
alert(sortedArr);