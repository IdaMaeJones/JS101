const readline = require('readline-sync');
const MESSAGES = require('./mortgage_messages.json');
var LANGUAGE = 'en';

/*
   FORMAL PSEUDOCODE
   START
   SUBPROCESS check if input is a valid number
     number should be a positive number to be valid
   SUBPROCESS pair message with language
   SUBPROCESS output message in requested language after appending "=> "
   GET language for user interface
   SET language for user interface
   Display Welcome Message
   SET variable to enable second loan payment calculation if user wishes
   DO-WHILE Loop
   DO {
     (MAIN CALCULATION)
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
     Calcuate monthly payment using formula
       let m = p * (j / (1 - Math.pow((1 + j),(-n))));
     Build output string
     PRINT output
     Ask if user would like to perform another calculation
   }
   WHILE (variable to calculate another loan payment is set)
*/


// ==== ===== ==== ==== //
// START

// Array: internal array of valid user inputs //
let continueArray = ['y', 'Y', 'n', 'N'];


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
// Call function "messages" with input "key" and relevant language //
// Log this output //
// Input: A message 'key'//
// Output: Log to console correct 'message' from json in language specified //
// and pre-pended by "=> " //
function prompt(key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}

// GET language for user interface
prompt('language');
console.log(messages('language', 'es'));
prompt('valid answers');
console.log(messages('valid answers', 'es'));
let lang = readline.question();
while (lang.trimStart() === '' || !continueArray.includes(lang)) {
  prompt('user input');
  console.log(`${lang}`);
  prompt('valid answers');
  lang = readline.question();
}


// SET language for user interface
// Once user inputs valid answer for language question
// if yes, set language to Spanish: LANGUAGE = 'es'
// if no, set language to English: LANGUAGE = 'en'
switch (lang.toUpperCase()) {
  case 'Y':
    LANGUAGE = 'es';
    break;
  default:
    LANGUAGE = 'en';
    break;
}


/* Welcome Message */
prompt('welcome');


// SET "continueCalc"
// Variable: internal variable to decide if user wants another calculation //
let continueCalc = 1;


// MAIN MORTGAGE FUNCTION //
// do-while loop is used to encapsulate the entire calculator code //
// in case user wants to perform additional calculations //
// do-while loop ensures that calculation is performed at least once //
// before while condition is checked //
do {
  /* SET internal variables */
  // SET monthlyPmt
  // SET intRatePctMthly
  // SET loanTermMths
  // SET output
  let monthlyPmt = 0;
  let intRatePctMthly = 0;
  let loanTermMths = 0;
  let output = 'Unitialized Output';


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


  // Ask if user would like to perform another calculation //
  prompt('continue');
  let anotherCalc = readline.question();


  // if user inputs blank or non-valid answer to continue calculating
  // pester them to input a valid answer
  while (anotherCalc.trimStart() === '' || !continueArray.includes(anotherCalc)) {
    prompt('user input');
    console.log(`${anotherCalc}`);
    prompt('valid answers');
    anotherCalc = readline.question();
  }


  // Once user inputs valid answer
  // if yes, ensure while condition of the do-while loop is true
  // if no, set continueCalc to 0 to end do-while loop
  switch (anotherCalc.toUpperCase()) {
    case 'Y':
      continueCalc = 1;
      break;
    default:
      continueCalc = 0;
      break;
  }
} while (continueCalc === 1);
prompt('adieu');

/* ==== ==== END OF MAIN MORTGAGE CODE ==== ==== */
/* END */
