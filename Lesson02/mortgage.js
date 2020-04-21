const readline = require('readline-sync');
const MESSAGES = require('./mortgage_messages.json');
const VALID_RESPONSES = ['y', 'Y', 'n', 'N'];
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
// SUBPROCESS check if input is a valid number
function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num)) || (num < 0);
}


// SUBPROCESS pair message with language
function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}


// SUBPROCESS output message in requested language after appending "=> "
function prompt(key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}


// GET language for user interface
prompt('language');
console.log(messages('language', 'es'));
prompt('valid answers');
console.log(messages('valid answers', 'es'));
let answer = readline.question();
while (answer.trimStart() === '' || !VALID_RESPONSES.includes(answer)) {
  prompt('user input');
  console.log(`${answer}`);
  prompt('valid answers');
  console.log(messages('valid answers', 'es'));
  answer = readline.question();
}


// SET language for user interface
switch (answer.toUpperCase()) {
  case 'Y':
    LANGUAGE = 'es';
    break;
  default:
    LANGUAGE = 'en';
    break;
}


// MAIN MORTGAGE FUNCTION //
// while loop is used to encapsulate the mortgage code //
// in case user wants additional mortgage calculations //
prompt('welcome');
while (true) {
  // SET internal variables
  let monthlyPmt = 0;
  let intRatePctMthly = 0;
  let loanTermMths = 0;
  let output = 'Uninitialized Output';

  // GET loan amount
  prompt('loan amount');
  let loanAmt = readline.question();
  while (invalidNumber(loanAmt)) {
    prompt('user input');
    console.log(`${loanAmt} ` + messages('invalid amount', LANGUAGE) + `\n`);
    prompt('enter number');
    loanAmt = readline.question();
  }

  // GET APR interest rate
  prompt('interest rate');
  let intRatePctAPR = readline.question();
  while (invalidNumber(intRatePctAPR)) {
    prompt('user input');
    console.log(`${intRatePctAPR}% ` +
                messages('invalid APR', LANGUAGE) + `\n`);
    prompt('enter number');
    intRatePctAPR = readline.question();
  }

  // GET term of loan in years
  prompt('loan term');
  let loanTermYrs = readline.question();
  while (invalidNumber(loanTermYrs)) {
    prompt('user input');
    console.log(`${loanTermYrs} ` + messages('invalid term', LANGUAGE) + `\n`);
    prompt('enter number');
    loanTermYrs = readline.question();
  }

  // Calculate monthly interest rate & loan term in months
  intRatePctMthly = (intRatePctAPR / 100) / 12;
  loanTermMths = loanTermYrs * 12;

  // READ loanAmt, intRatePctMthly, loanTermMths
  // Calcuate monthly payment using formula
  // let m = p * (j / (1 - Math.pow((1 + j),(-n))));
  if (intRatePctAPR > 0) {
    monthlyPmt = (loanAmt * (intRatePctMthly /
                 ( 1 - Math.pow((1 + intRatePctMthly),
                   (-loanTermMths))))).toFixed(2);
  } else {
    monthlyPmt = (loanAmt / loanTermMths).toFixed(2);
  }

  // Build output string
  output = messages('output payment', LANGUAGE) + `${loanAmt}` +
             messages('output is', LANGUAGE) + `${monthlyPmt}` +
             messages('output for', LANGUAGE) + `${loanTermMths}` +
             messages('output months', LANGUAGE) + `\n`;

  // PRINT output
  console.log(output);

  // GET would user like to perform another calculation
  prompt('continue');
  let anotherCalculation = readline.question();
  while (anotherCalculation.trimStart() === '' ||
         !VALID_RESPONSES.includes(anotherCalculation)) {
    prompt('user input');
    console.log(`${anotherCalculation}`);
    prompt('valid answers');
    anotherCalculation = readline.question();
  }
  if (anotherCalculation.toUpperCase() === 'N') break;
  console.clear();
}

// Display Goodbye Message
prompt('adieu');

// END
/* ==== ==== ==== ==== */