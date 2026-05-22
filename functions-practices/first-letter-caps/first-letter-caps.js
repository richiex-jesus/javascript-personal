// create the function firstLetterCaps with parameter string

function firstLetterCaps(string) { 
    wordArray = string.split(' '); // this is done to split up by individual words rather than letters. 
    for (index in wordArray) { // for every word in wordArray:
        wordLowerCase = word.toLowerCase(); // convert the entire word to lowercase first.
        let wordLowerCaseSplit = wordLowerCase.split; // assign the split lowercase word to an array variable, which is now MUTABLE!
        let wordFirstAlphabet = wordLowerCaseSplit[0]; // get the first alphabet of the array.
        wordFirstAlphabet.toUpperCase() // this is the important step which supposedly converts the first letter to uppercase.
        wordArray[index] = wordLowerCaseSplit.join(''); // join up the newly updated word.
        // update the word in the initial index of the old wordArray
    }
    console.log(wordArray);
}

firstLetterCaps("the quick brown fox")