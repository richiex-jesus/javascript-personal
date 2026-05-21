console.log("the purpose of this program is to generate all possible combinations of letters, following the order given in the provided word. e.g. 'dog' --> 'd', 'do', 'dog', 'o', 'og', 'g'")

function stringCombo(word) {
    let wordArray = word.split('')
    // check to see what the word looks like in an array!
    console.log(wordArray)
    // make a loop that will be able to start with every possible letter in wordArray
    for (letter in wordArray) { 
        // this should give the index of the focused letter
        let index_number = wordArray.indexOf(letter)
        // a for-loop that will generate all possible letter combinations beginning with the focused letter
        for (i = index_number; i < (wordArray.length); i++) {
            // print out the result of the letter combination in the console.
            console.log(letter + wordArray[index_number])
        }
    }
}

word = prompt("please input a random word:")
stringCombo(word);

