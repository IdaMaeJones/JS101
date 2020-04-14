const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
const LANGUAGE = 'en';

// PSEUDOCODE
// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.
// Ask the user if they want to perform another calculation.

/*
   Helper function: messages 
   Input: A string 'message'
   Output: relevant language and message
*/
function messages(message, lang='en') {
    return MESSAGES[lang][message];
}

/* 
   Helper function: prompt 
   Call function "messages" with input "key" and relevant language
   Log this output
   Input: A message 'key'
   Output: Log to console correct 'message' from json in language specified
   and pre-pended by "=> "
*/
/*
function prompt(message) {
    console.log(`=> ${message}`);
}
*/
function prompt(key) {
    let message = messages(key, LANGUAGE);
    console.log(`=> ${message}`);
}

/* 
   Helper function: invalidNumber 
   Input: 'num' from readline-sync user response
   Output: return true if input is a number, false if not
*/
function invalidNumber(num) {
    return num.trimStart() === '' || Number.isNaN(Number(num));
}

/* Welcome Message */
//console.log('Welcome to Calculator!');
// prompt(MESSAGES['welcome']);
prompt('welcome');

/* Variable: internal variable to decide if user wants another calculation */
var continueCalc = 1


/* 
   MAIN CALCULATOR FUNCTION 
   do-while loop is used to encapsulate the entire calculator code
   in case user wants to perform additional calculations
*/
do {
    // prompt('What is the first number?');
    // prompt(MESSAGES['firstNumber']);
    prompt('firstNumber');
    let number1 = readline.question();
    while (invalidNumber(number1)) {
        console.log(`You entered ${number1}, which is not a number.\n` +
               `Please enter a valid number.`);
        number1 = readline.question();
    }

    // prompt('What is the second number?');
    // prompt(MESSAGES['secondNumber']);
    prompt('secondNumber');
    let number2 = readline.question();
    while (invalidNumber(number2)) {
        console.log(`You entered ${number1}, which is not a number.\n` +
               `Please enter a valid number.`);
        number2 = readline.question();
    }

    const operatorArray = ['+', '-', '*', '/', '^'];

    // prompt('What operation would you like to perform?\n' +
    //       '+  -  *  /  ^');
    // prompt(MESSAGES['operation']);
    prompt('operation');
    let operation = readline.question();
    while (operation.trimStart() === '' || !operatorArray.includes(operation)) {
        console.log(`You entered "${operation}", which is not a valid operator.\n` +
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
    
    /* Ask if user would like to perform another calculations */
    let continueArray = ['y', 'Y', 'n', 'N'];
    //prompt(`Would you like to perform another calculation?\n` +
    //       `Type y for yes or n for no.`);
    // prompt(MESSAGES['continue']);
    prompt('continue');
    let anotherCalc = readline.question();
    while (anotherCalc.trimStart() === '' || !continueArray.includes(anotherCalc)) {
        console.log(`You entered "${anotherCalc}".\n` +
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

/* ==== ==== END OF MAIN CALCULATOR CODE ==== ==== */