function reverseNum(num) {
    // split each digit in the number into an array
    let numArray = num.toString().split('')  
    console.log(numArray)
    // reverse the order of the array, correspondingly reversing the digits of the number
    numArray.reverse();
    // join the elements (i.e. the digits) of the array together to get the reversed number as the answer!
    let answer = numArray.join('')
    console.log(answer)
}



reverseNum(123456789);