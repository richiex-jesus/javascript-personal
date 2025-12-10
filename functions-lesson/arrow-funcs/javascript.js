let power = (number1, number2) => number1 ** number2

console.log(power(2, 4))

let double = (n) => n * n

console.log(double(3))

function sayHi() {
    console.log("Hello there!")
}

sayHi();

let divisionMachine = (number1, number2, number3, number4) => {
    let result1 = number1 / number2;
    let result2 = result1 / number3;
    let result3 = result2 / number4;
    let result4 = result3 / result1;
    let result5 = result4 / result2;
    return result5;
}

console.log(divisionMachine(16, 8, 4, 2));

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
  "Do you agree?",
    () => { alert("You agreed."); },
    () => { alert("You canceled the execution."); }
);