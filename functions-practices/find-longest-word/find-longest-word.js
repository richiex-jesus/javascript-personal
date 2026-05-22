function findLongestWord(sentence) {
    let wordArray = sentence.split(' ');
    let longestWord = wordArray[0];
    for (i = 0; i < wordArray.length; i++) {
        if (wordArray[0].length <= wordArray[i + 1].length) {
            longestWord = wordArray[i + 1];
        }
    }
    return console.log(longestWord)
}

findLongestWord("what is my richard")