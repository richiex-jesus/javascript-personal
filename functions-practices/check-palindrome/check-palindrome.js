function checkPalindrome(word) {
    let wordArray = word.split('');
    wordArray.reverse();
    let palindromeChecker = wordArray.join('')
    if (word === palindromeChecker) {
        console.log(true);
    } else {
        console.log(false)
    }
}