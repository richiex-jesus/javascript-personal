function findLongestWord(sentence) {
    let wordArray = sentence.split(' ');
    for (i = 0; i < wordArray.length; i++) {
        if (wordArray[0].length <= wordArray[i].length) {
            wordArray[0] = wordArray[i];
        } else {}
    }
    return console.log(wordArray[0]);
}

findLongestWord(prompt("enter a random sentence."));