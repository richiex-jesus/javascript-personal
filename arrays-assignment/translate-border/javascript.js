function camelise() {

    let testString = '-testing-frightened'
    let arr = testString.split('-');
    console.log( arr );

    let arrUpdated = arr.slice(1);
    console.log( arrUpdated );

    function capitalise(item) {
        let firstLetterOfStr = item.slice(0, 1);
        let capitalisedLetter = firstLetterOfStr.toUpperCase();
        let remainingLetters = item.slice(1);
        let uncapitalisedLetters = remainingLetters.toLowerCase();
        return capitalisedLetter + uncapitalisedLetters;
    }

    let arrCapitalised = arrUpdated.map(capitalise);
    console.log(arrCapitalised);

    let arrRemaining = arr.slice(0, 1);
    console.log(arrRemaining);

    let arrNew = arrRemaining.concat(arrCapitalised);
    console.log(arrNew);

    let arrFinal = arrNew.join('');
    console.log(arrFinal);


    
    // function capitalise(item) {
    //     let firstLetter = item[0];
    //     return firstLetter.toUpperCase();
    // }

    // let arrCapitalised = arrUpdated.map(capitalise(item));
    // console.log( arrCapitalised )
}

camelise();