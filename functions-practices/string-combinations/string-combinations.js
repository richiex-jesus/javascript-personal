console.log("the purpose of this program is to generate all possible combinations of letters, following the order given in the provided word. e.g. 'dog' --> 'd', 'do', 'dog', 'o', 'og', 'g'")

function stringCombo(word) {
    let wordArray = word.split('')
    // check to see what the word looks like in an array!
    console.log(wordArray)
    for (letter in wordArray) {
        let index_number = wordArray.indexOf(letter)
        for (i = index_number; i < (wordArray.length - 1); i++) {
            print(letter + wordArray[index_number])
        }
    }
}

word = prompt("please input a random word:")
stringCombo(word);

