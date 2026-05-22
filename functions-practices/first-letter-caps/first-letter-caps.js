// create the function firstLetterCaps with parameter string

function firstLetterCaps(string) { 
    wordArray = string.split(' '); // this is done to split up by individual words rather than letters. 
    newArray = [];
    for (i = 0; i < wordArray.length; i++) {
        let word = wordArray[i].toLowerCase();
        // word is a string. so, we can apply the string methods and also directly access the first letter which is at index 0.
        updatedWord = word[0].toUpperCase() + word.slice(1);
        // push the updated word into the new array.
        newArray.push(updatedWord);
    }
    return console.log(newArray.join(' '));
}

firstLetterCaps("the quick brown fox")