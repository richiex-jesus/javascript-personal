function camelise() {

    let testString = 'left-border-width'
    let arr = testString.split('-');
    console.log( arr ); // ["left", 'border', 'width']

    let arrUpdated = arr.slice(1);
    console.log( arrUpdated ); // ['border', 'width']

    function capitalise(item) {
        let firstLetterOfStr = item.slice(0, 1);
        let capitalisedLetter = firstLetterOfStr.toUpperCase();
        let remainingLetters = item.slice(1);
        let uncapitalisedLetters = remainingLetters.toLowerCase();
        return capitalisedLetter + uncapitalisedLetters;
    }

    let arrCapitalised = arrUpdated.map(capitalise);
    console.log(arrCapitalised); // ['Border', 'Width']

    let arrRemaining = arr.slice(0, 1);
    console.log(arrRemaining); // ['left']

    let arrNew = arrRemaining.concat(arrCapitalised);
    console.log(arrNew); // ['left', 'Border' 'Width'] 

    let arrFinal = arrNew.join('');
    console.log(arrFinal); // ['leftBorderWidth']


    
    // function capitalise(item) {
    //     let firstLetter = item[0];
    //     return firstLetter.toUpperCase();
    // }

    // let arrCapitalised = arrUpdated.map(capitalise(item));
    // console.log( arrCapitalised )
}

camelise();