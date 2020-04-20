const readline = require('readline-sync');
const MESSAGES = require('./mortgage_messages.json');
var LANGUAGE = 'en';

/*
   FORMAL PSEUDOCODE
   START
   Setup helper functions
     SUBPROCESS check if input is a valid, positive number
     SUBPROCESS pair message with language
     SUBPROCESS output message in requested language after appending "=> "
   GET language to use for user interface
   SET language to use for user interface
   Display Welcome Message
   WHILE (true)
   {
     SET internal variables for monthly payment, monthly interest rate,
         loan term in months: monthlyPmt, intRatePctMthly, loanTermMths
     SET variable for output
     GET loan amount: loanAmt
     GET APR interest rate: intRatePctAPR
     GET term of loan in years: loanTermYrs
     Calculate monthly interest rate, loan term in months
       Divide APR by 100 to convert % to decimal
       Divide APR by 12 to convert annual interest rate to monthly
         intRatePctMthly = (intRatePctAPR/100) / 12;
       Divide loan term in years by 12 to get loan term in months
         loanTermMths = loanTermYrs * 12;
     READ loanAmt, intRatePctMthly, loanTermMths
     Main Calculation: calcuate monthly payment using formula
       let m = p * (j / (1 - Math.pow((1 + j),(-n))));
     Build output string
     PRINT output
     GET would user would like to perform another calculation
     IF (no) break ELSE while loop continues
   }
   Display Goodbye Message
   END
*/


// ==== ===== ==== ==== //
// START

// Array: internal array of valid user inputs //
let validAnswersArray = ['y', 'Y', 'n', 'N'];


// SUBPROCESS check if input is a valid number
// Helper function: invalidNumber //
// Input: 'num' from readline-sync user response //
// Output: return true if input is a positive number, false if not //
function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num)) || (num < 0);
}


// SUBPROCESS pair message with language
// Helper function: messages //
// Input: A string 'message' //
// Output: relevant language and message //
function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}


// SUBPROCESS output message in requested language after appending "=> "
// Helper function: prompt //
// Call function "messages" with input "key" //
// and relevant language. Log this output //
// Input: A message 'key' //
// Output: Log to console correct 'message' from json in  //
//         language specified and pre-pended by "=> " //
function prompt(key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}

// GET language for user interface
// Ask in English if another language should be used //
// Ask same in Spanish //
// Show valid answer choices in English //
// Show valid answers in Spanish //
prompt('language');
console.log(messages('language', 'es'));
prompt('valid answers');
console.log(messages('valid answers', 'es'));
let answer = readline.question();
while (answer.trimStart() === '' || !validAnswersArray.includes(answer)) {
  prompt('user input');
  console.log(`${answer}`);
  prompt('valid answers');
  console.log(messages('valid answers', 'es'));
  answer = readline.question();
}


// SET language for user interface
// Once user inputs valid answer for language question
// if yes, set language to Spanish: LANGUAGE = 'es'
// if no, set language to English: LANGUAGE = 'en'
// Using switch to allow future addition of new languages
switch (answer.toUpperCase()) {
  case 'Y':
    LANGUAGE = 'es';
    break;
  default:
    LANGUAGE = 'en';
    break;
}


/* Welcome Message */
prompt('welcome');


// MAIN MORTGAGE FUNCTION //
// while loop is used to encapsulate the entire calculator code //
// in case user wants to perform additional calculations //
while (true) {
  /* SET internal variables */
  // SET monthlyPmt
  // SET intRatePctMthly
  // SET loanTermMths
  // SET output
  let monthlyPmt = 0;
  let intRatePctMthly = 0;
  let loanTermMths = 0;
  let output = 'Uninitialized Output';


  /* GET input data */
  // GET loan amount: loanAmt
  prompt('loan amount');
  let loanAmt = readline.question();
  while (invalidNumber(loanAmt)) {
    prompt('user input');
    console.log(`${loanAmt}, which is not a valid number.\n`);
    prompt('enter number');
    loanAmt = readline.question();
  }


  // GET APR interest rate: intRatePctAPR
  prompt('interest rate');
  let intRatePctAPR = readline.question();
  while (invalidNumber(intRatePctAPR)) {
    prompt('user input');
    console.log(`${intRatePctAPR}%, which is not a valid number.\n`);
    prompt('enter number');
    intRatePctAPR = readline.question();
  }


  // GET term of loan in years: loanTermYrs
  prompt('loan term');
  let loanTermYrs = readline.question();
  while (invalidNumber(loanTermYrs)) {
    prompt('user input');
    console.log(`${loanTermYrs}, which is not a valid number.\n`);
    prompt('enter number');
    loanTermYrs = readline.question();
  }


  // Calculate monthly interest rate, loan term in months
  // Divide APR by 100 to convert % to decimal
  // Divide APR by 12 to convert annual interest rate to monthly
  // Divide loan term in years by 12 to get loan term in months
  intRatePctMthly = (intRatePctAPR / 100) / 12;
  loanTermMths = loanTermYrs * 12;


  // READ loanAmt, intRatePctMthly, loanTermMths
  // Calcuate monthly payment using formula
  /* let m = p * (j / (1 - Math.pow((1 + j),(-n)))); */
  if (intRatePctAPR > 0) {
    monthlyPmt = (loanAmt * (intRatePctMthly /
                 ( 1 - Math.pow((1 + intRatePctMthly),
                   (-loanTermMths))))).toFixed(2);
  } else {
    monthlyPmt = (loanAmt / loanTermMths).toFixed(2);
  }


  // Build output string
  output = messages('outputA', LANGUAGE) + `${loanAmt}` +
             messages('outputB', LANGUAGE) + `${monthlyPmt}` +
             messages('outputC', LANGUAGE) + `${loanTermMths}` +
             messages('outputD', LANGUAGE) + `\n`;


  // PRINT output
  console.log(output);


  // GET would user like to perform another calculation
  // if user inputs blank or non-valid answer //
  // pester them to input a valid answer //
  // IF (no) break ELSE while loop continues to perform loan calculation
  prompt('continue');
  let anotherCalc = readline.question();
  while (anotherCalc.trimStart() === '' || !validAnswersArray.includes(anotherCalc)) {
    prompt('user input');
    console.log(`${anotherCalc}`);
    prompt('valid answers');
    anotherCalc = readline.question();
  }
  if (anotherCalc.toUpperCase() === 'N') break;
}

// Display Goodbye Message
prompt('adieu');

// END
/* ==== ==== ==== ==== */