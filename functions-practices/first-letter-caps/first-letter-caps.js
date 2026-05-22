// create the function firstLetterCaps with parameter string

function firstLetterCaps(string) { 
    wordArray = string.split(' '); // this is done to split up by individual words rather than letters. 
    newArray = [];
    for (index in wordArray) { // for every word in wordArray:
        let word = wordArray[index]; // this is the word.
        wordLowerCase = word.toLowerCase(); // convert the entire word to lowercase first.
        let wordLowerCaseSplit = wordLowerCase.split(''); // assign the split lowercase word to an array variable, which is now MUTABLE!
        (wordLowerCaseSplit[0]).toUpperCase() // this is the important step which supposedly converts the first letter to uppercase.
        sortedWord = wordLowerCaseSplit.join(''); // join up the newly updated word.
        // update the word in the initial index of the old wordArray
        newArray.push(sortedWord);
        console.log(newArray)
        return newArray;
        
    }
    console.log(wordArray);
}

firstLetterCaps("the quick brown fox")