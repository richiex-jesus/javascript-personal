// writing some pseudocode:
// return a string that has letters in alphabetical order. assume that punctuation and other symbols are not included in the passed string.

// create a function called alphabetSort with paramenter userWord. 
function alphabetSort(userWord) {
// within the alphabetSort function, split userWord (which is of type string) into its individual letters in an array called wordArray.
    wordArray = userWord.split('');
// perform an array sort on wordArray. 
    wordArray.sort();
// join elements wordArray to return a string, call it alphabetSorted.
    alphabetSorted = wordArray.join('');
// console.log(alphabetSorted)
    console.log(alphabetSorted)
}

// create a variable that accepts a text input from a user (using prompt). name the variable userWord.
userWord = prompt("enter a word:")
alphabetSort(userWord);