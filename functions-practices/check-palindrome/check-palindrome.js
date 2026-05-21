function checkPalindrome(word) {
    // following similar logic, you first split the given word into another array, called wordArray in this case.
    let wordArray = word.split('');
    // then, reverse the order of elements in the array.
    wordArray.reverse();
    // join the elements again to get the reversed word, assign to the variable, palindromeChecker
    let palindromeChecker = wordArray.join('')
    // self-explanatory code.
    if (word === palindromeChecker) {
        console.log(true);
    } else {
        console.log(false)
    }
}

let word = prompt("Please enter a word:")
checkPalindrome(word);