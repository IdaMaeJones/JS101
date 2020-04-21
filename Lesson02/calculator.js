const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
const LANGUAGE = 'en';
const VALID_OPERATORS = ['+', '-', '*', '/', '^'];
const VALID_RESPONSES = ['y', 'Y', 'n', 'N'];
var CALCULATOR_ON_OFF = 'ON';

// PSEUDOCODE
// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.
// Ask the user if they want to perform another calculation.

// HELPER FUNCTIONS //
// Function to return message in appropriate language
function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}


// Function to append prompt and call helper function for
// message in appropriate language
function prompt(key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}


// Function to check if input number is not empty or NaN
function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}


// MAIN CALCULATOR FUNCTION
//   do-while loop used to encapsulate the calculator code
//   in case user wants to perform additional calculations
prompt('welcome');
do {
  prompt('firstNumber');
  let number1 = readline.question();
  while (invalidNumber(number1)) {
    console.log(`You entered ${number1}, which is not a number.\n` +
               `Please enter a valid number.`);
    number1 = readline.question();
  }

  prompt('secondNumber');
  let number2 = readline.question();
  while (invalidNumber(number2)) {
    console.log(`You entered ${number1}, which is not a number.\n` +
               `Please enter a valid number.`);
    number2 = readline.question();
  }

  prompt('operation');
  let operation = readline.question();
  while (operation.trimStart() === '' || !VALID_OPERATORS.includes(operation)) {
    console.log(`You entered "${operation}", which is not a valid operator.\n` +
               `Please enter a valid operator: + - * / ^`);
    operation = readline.question();
  }

  let answer;
  switch (operation) {
    case '+':
      answer = Number(number1) + Number(number2);
      break;
    case '-':
      answer = Number(number1) - Number(number2);
      break;
    case '*':
      answer = Number(number1) * Number(number2);
      break;
    case '/':
      answer = Number(number1) / Number(number2);
      break;
    case '^':
      answer = Number(number1) ** Number(number2);
      break;
    default:
      console.log('Please enter one of the following math operators\n' +
                        ' +  -  *  / ^');
  }

  console.log(`The result is: ${answer}\n`);

  prompt('continue');
  let anotherCalculation = readline.question();
  while (anotherCalculation.trimStart() === '' ||
         !VALID_RESPONSES.includes(anotherCalculation)) {
    console.log(`You entered "${anotherCalculation}".\n` +
               `Please type y for yes or n for no.`);
    anotherCalculation = readline.question();
  }
  switch (anotherCalculation.toUpperCase()) {
    case 'Y':
      CALCULATOR_ON_OFF = 'ON';
      break;
    default:
      CALCULATOR_ON_OFF = 'OFF';
      break;
  }
  console.clear();
} while (CALCULATOR_ON_OFF === 'ON');

/* ==== ==== END OF CALCULATOR CODE ==== ==== */
