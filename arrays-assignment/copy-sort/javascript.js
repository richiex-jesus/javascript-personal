let arr = ['HTML', 'CSS', 'Javascript'];

function copySortedArr(arr) {
// method 1:
    let sorted = arr.toSorted();
    alert(sorted);
    alert(arr);

// method 2:
    let sortedTwo = [...arr].sort();
    alert(sortedTwo);
    alert(arr);

// method 3:
    let sortedThree = arr.slice().sort();
    alert(sortedThree);
    alert(arr)
}

copySortedArr(arr);