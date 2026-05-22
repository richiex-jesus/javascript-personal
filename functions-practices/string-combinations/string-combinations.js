console.log("the purpose of this program is to generate all possible combinations of letters, following the order given in the provided word. e.g. 'dog' --> 'd', 'do', 'dog', 'o', 'og', 'g'")

function stringCombo(word) {
    // a classic example of nested loops. in this case, the outer loop determines the first letter of every possible letter combination (in order).
    for (i = 0; i < word.length; i++) {
        // begin by assigning an empty string to a variable
        stringConcatenation = "";
        // the inner loop is in charge of generating every possible letter combination in their appropriate order
        for (j = i; j < word.length; j++) {
            // let's analyse this a bit, using 'dog' as an example:
            // for i = 0,
                // j = 0: '' + 'd' = 'd'
                // j = 1: 'd' + 'o' = 'do' --> realise that we are just updating the value of stringConcatenation (rather than reusing the value on line 7, that is, '')
                // j = 2 (this is still called becasue at the end of the execution of the for loop for j = 1, j++ is still applicable since 1 < 2, thus j = 2 runs): 'dog'
                // no more j = 3 (since 3 < 2 is false, it fails to pass the condition of the given for-loop)
            // cycle of inner loop ends yay! so, time to move on to the next iteration of i (that is, i = 1)! the cycle repeats:
                // j = 1: 'o'
                // j = 2: 'og'
            // inner loop cycle ends again! move on to the final iteration of i, i = 2: 'g' is the only possible outcome since for the inner loop, j = 2 and j++ would result in j = 3 which will fail the condition of the inner for-loop.

            stringConcatenation += word[j];
            console.log(stringConcatenation);
        }
    }
}

inputWord = prompt("please input a random word:")
stringCombo(inputWord);

