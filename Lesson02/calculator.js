const readline = require('readline-sync');
// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

console.log('Welcome to Calculator!');

console.log('What is the first number?');
let number1 = readline.question();

console.log('What is the second number?');
let number2 = readline.question();

console.log('What operation would you like to perform?\n' + 
            '+  -  *  /  **');
let operation = readline.question();

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
        console.log('Please enter one of the following mathematical\n' +
                    ' +  -  *  / ^')
}

console.log(`The result is: ${output}`);
