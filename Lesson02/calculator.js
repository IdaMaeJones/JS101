const readline = require('readline-sync');
// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

function prompt (message) {
    console.log(`=> ${message}`);
}

function invalidNumber(num) {
    return num.trimStart() === '' || Number.isNaN(Number(num));
}

console.log('Welcome to Calculator!');


var continueCalc = 1

do {
    prompt('What is the first number?');
    let number1 = readline.question();
    while (invalidNumber(number1)) {
        prompt(`You entered ${number1}, which is not a number.\n` +
               `Please enter a valid number.`);
        number1 = readline.question();
    }

    prompt('What is the second number?');
    let number2 = readline.question();
    while (invalidNumber(number2)) {
        prompt(`You entered ${number1}, which is not a number.\n` +
               `Please enter a valid number.`);
        number2 = readline.question();
    }

    const operatorArray = ['+', '-', '*', '/', '^'];

    prompt('What operation would you like to perform?\n' +
           '+  -  *  /  ^');
    let operation = readline.question();
    while (operation.trimStart() === '' || !operatorArray.includes(operation)) {
        prompt(`You entered "${operation}", which is not a valid operator.\n` +
               `Please enter a valid operator: + - * / ^`);
        operation = readline.question();
    }

    let output;
/*
if (operation === '1') { // '1' represents addition
  output = Number(number1) + Number(number2);
} else if (operation === '2') { // '2' represents subtraction
  output = Number(number1) - Number(number2);
} else if (operation === '3') { // 3 represents multiplication
  output = Number(number1) * Number(number2);
} else if (operation === '4') { // 4 represents division
  output = Number(number1) / Number(number2);
}
*/

    switch (operation) {
        case '+':
            output = Number(number1) + Number(number2);
            break;
        case '-':
            output = Number(number1) - Number(number2);
            break;
        case '*':
            output = Number(number1) * Number(number2);
            break;
        case '/':
            output = Number(number1) / Number(number2);
            break;
        case '^':
            output = Number(number1) ** Number(number2);
            break;
        default:
            console.log('Please enter one of the following math operators\n' +
                        ' +  -  *  / ^');
    }

    console.log(`The result is: ${output}\n`);
    let continueArray = ['y', 'Y', 'n', 'N'];
    prompt(`Would you like to perform another calculation?\n` +
           `Type y for yes or n for no.`);
    let anotherCalc = readline.question();
    while (anotherCalc.trimStart() === '' || !continueArray.includes(anotherCalc)) {
        prompt(`You entered "${anotherCalc}".\n` +
               `Please type y for yes or n for no.`);
        anotherCalc = readline.question();
    }
    
    switch (anotherCalc.toUpperCase()) {
        case 'Y':
            continueCalc = 1;
            break;
        default:
            continueCalc = 0;
            break;
    }

} while (continueCalc === 1);