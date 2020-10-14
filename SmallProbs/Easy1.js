// Launch School
// JS 101 Small Problems
// Easy 1
var QS = '';
//
// COMMON DISPLAY CODE
const QUESTION = 'QUESTION';
const ANSWER = 'ANSWER';
var buffer = '';
var divider = "==== ==== ==== ==== ====";
var qs = 1;
var ans = 1;
var code = '.......... CODE ..........';
var output = '.......... OUTPUT ..........';
function print(arg) {
  switch (arg) {
    case 'qs':
      console.log(`${divider}\n${QUESTION} ${qs}: `);
      break;
    case 'ans':
      console.log(`${divider}\n${ANSWER} ${ans}: `);
      break;
    case 'code':
      console.log(`${code}`);
      break;
    case 'end':
      console.log(` `);
      break;
    case 'output':
      console.log(`${output}`);
      break;
    default:
      console.log(`${buffer}`);
      break;
  }
}
// END DISPLAY CODE

/*
// START
// Qs. 1
QS = `qs` + qs;
print('qs');
buffer = `Write a function that takes one integer argument, which may be 
positive, negative, or zero. This method returns true if the number's absolute 
value is odd. You may assume that the argument is a valid integer value.`;
print();
print('ans');
buffer = `isOdd will be coded as follows.`;
print();
print('code');
function isOdd(arg) {
  if (arg%2 === 0) {
    return false;
  } else {
    return true;
  }
}

buffer = `function isOdd(arg) {
  if (arg%2 === 0) {
    return true;
  } else {
    return false;
  }
} `;
print();
print('output');
buffer = `Testing \n
....................

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true`;

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
qs += 1;
ans += 1;
print('end');


// Qs. 2
QS = `qs` + qs;
print('qs');
buffer = `Log all odd numbers from 1 to 99, inclusive, to the console. Log all 
numbers on separate lines.`;
print();
print('ans');
buffer = `logOdd will be coded as follows.`;
print();
print('code');
function logOdd(arg = 1) {
  do {
    if (isOdd(arg)) {
      console.log(`${arg} is odd.`);
    }
    arg++;
  } while (arg < 100);
}
buffer = `function logOdd(arg = 1) {
  do {
    if (isOdd(arg)) {
      console.log(\`\${arg} is odd.\`);
    }
    arg++;
  } while (arg < 100);
} `;
print();
print('output');
buffer = `Testing \n
....................`;
logOdd();
qs += 1;
ans += 1;
print('end');


// Qs. 3
QS = `qs` + qs;
print('qs');
buffer = `Log all even numbers from 1 to 99, inclusive, to the console. Log all 
numbers on separate lines.`;
print();
print('ans');
buffer = `logEven will be coded as follows.`;
print();
print('code');
function logEven(arg = 1) {
  do {
    if (!isOdd(arg)) {
      console.log(`${arg} is even.`);
    }
    arg++;
  } while (arg < 100);
}
buffer = `function logEven(arg = 1) {
  do {
    if (!isOdd(arg)) {
      console.log(\`\${arg} is even.\`);
    }
    arg++;
  } while (arg < 100);
}`;
print();
print('output');
buffer = `Testing \n
....................`;
logEven();
qs += 1;
ans += 1;
print('end');


// Qs. 4
QS = `qs` + qs;
print('qs');
buffer = `Build a program that asks the user to enter the length and width of a 
room in meters, and then logs the area of the room to the console in both square
meters and square feet.
Note: 1 square meter == 10.7639 square feet
Do not worry about validating the input at this time. 
Use the readlineSync.prompt method to collect user input..`;
print();
print('ans');
buffer = `logArea will be coded as follows.`;
print();
print('code');
function logArea() {
  let rlSync = require('readline-sync');
  let length = rlSync.question("What is the length?\n");
  while(isNaN(length) || length < 0) {
    length = rlSync.question("Please enter a positive number for length. \n");
  }
  let width = rlSync.question("What is the width?\n");
  while(isNaN(width) || width < 0) {
    width = rlSync.question("Please enter a positive number for width. \n");
  }
  let areaSqMeters = length * width;
  let areaSqFeet = (areaSqMeters * 10.7639) ;
  console.log(`Area in square meters is ${areaSqMeters} sq. m.
Area in square feet is ${areaSqFeet.toFixed(2)} sq. ft.`);
}

buffer = `function logArea() {
  let rlSync = require('readline-sync');
  let length = rlSync.question("What is the length?\n");
  while(isNaN(length) || length < 0) {
    length = rlSync.question("Please enter a positive number for length. \n");
  }
  let width = rlSync.question("What is the width?\n");
  while(isNaN(width) || width < 0) {
    width = rlSync.question("Please enter a positive number for width. \n");
  }
  let areaSqMeters = length * width;
  let areaSqFeet = (areaSqMeters / 10.7639) ;
  console.log(\`Area in square meters is \${areaSqMeters} sq. m.
Area in square feet is \${areaSqFeet.toFixed(2)} sq. ft.\`);
}`;
print();
print('output');
buffer = `Testing \n
....................`;
logArea();
qs += 1;
ans += 1;
print('end');


// Qs. 5
QS = `qs` + qs;
print('qs');
buffer = `Create a simple tip calculator. The program should prompt for a bill 
amount and a tip rate. The program must compute the tip, and then log both the 
tip and the total amount of the bill to the console. You can ignore input 
validation and assume that the user will enter numbers.`;
print();
print('ans');
buffer = `tipCalculator will be coded as follows.`;
print();
print('code');
function tipCalculator() {
  let rlSync = require('readline-sync');
  // bill
  let bill = rlSync.question("What is the bill?\n");
  if (bill.charAt(0) === '$') {
    bill = bill.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '') ;
    bill = Number(bill.substr(1, bill.length-1), 10) ;
  }
  while(isNaN(bill) || bill < 0) {
    bill = rlSync.question("Please enter a positive number for bill. \n");
    if (bill.charAt(0) === '$') {
      bill = bill.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '') ;
      bill = Number(bill.substr(1, bill.length-1), 10) ;
      } 
  }
  bill = Number(bill, 10);
  console.log(`Accepted bill amount ${bill}.`);
  // tip percentage
  let tipPct = rlSync.question("What is the tip percentage?\n");
  if (tipPct.charAt(tipPct.length-1) === '%') {
    tipPct = tipPct.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]/g, '') ;
    tipPct = Number(tipPct.substr(0, tipPct.length-1), 10) ;
  }
  while(isNaN(tipPct) || tipPct < 0) {
    tipPct = rlSync.question("Please enter a positive number for tip %. \n");
    if (tipPct.charAt(tipPct.length-1) === '%') {
      tipPct = tipPct.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '') ;
      tipPct = Number(tipPct.substr(0, tipPct.length-1), 10) ;
      } 
  }
  console.log(`Accepted tip percentage ${tipPct}.`);
  let tip = bill * tipPct / 100; // Comment 
  console.log(`Calculated tip ${tip}.`);
  let totalBill = (bill + tip) ;
  console.log(`Calculated totalBill ${totalBill}.`);
  console.log(`OUTPUT: Bill amount used is $${(Math.round(bill * 100) / 100).toFixed(2)}
        Tip percentage used is ${tipPct}%
        Tip calculated is $${(Math.round(tip * 100) / 100).toFixed(2)}
        Total bill amount (bill + tip) calculated is $${(Math.round(totalBill * 100) / 100).toFixed(2)}`);
}

buffer = ` `;
print();
print('output');
tipCalculator();
qs += 1;
ans += 1;
print('end');


// Qs. 6
QS = `qs` + qs;
print('qs');
buffer = `Write a program that asks the user to enter an integer greater than 0,
then asks whether the user wants to determine the sum or the product of all 
numbers between 1 and the entered integer, inclusive.
EXAMPLES:
Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.

Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.`;
print();
print('ans');
buffer = `intFunction() - Sum or Product of Consecutive Integers will be coded 
as follows.`;
print();
print('code');
const VALID_CONSECUTIVE_FUNCTION_CHOICES = ['s', 'S', 'p', 'P'];
function intFunction() {
  let rlSync = require('readline-sync');
  let userInt = Number(rlSync.question("Please enter an integer greater than 0: "), 10);
  while (((!Number.isInteger(userInt)) || isNaN(userInt)) || ((userInt <= 0) || isNaN(userInt))) {
    userInt = Number(rlSync.question("That is not a valid input. Please enter an integer greater than 0: "), 10);
  }

  let userChoice = rlSync.question("Enter \"s\" to compute the sum, or \"p\" to compute the product: ");
  while (!VALID_CONSECUTIVE_FUNCTION_CHOICES.includes(userChoice)) {
    userChoice = rlSync.question("That is not a valid choice. Enter \"s\" to compute the sum, or \"p\" to compute the product: ");
  }

  switch (userChoice) {
    case 's':
      sumIntegers(userInt);
      break;
    case 'p':
      productIntegers(userInt);
      break;
    default:
      console.log("Could not determine what to do.");
  }
}


function sumIntegers(arg) {
  let sum = arg;
  for (var i = arg-1; i > 0; i--) {
    sum = sum + i;
  }
  console.log(`\nThe sum of the integers between 1 and ${arg} is ${sum}.`);
}


function productIntegers(arg) {
  let product = arg;
  for (var i = arg-1; i > 0; i--) {
    product = product * i;
  }
  console.log(`\nThe product of the integers between 1 and ${arg} is ${product}.`);
}

buffer = ` `;
print();
print('output');
intFunction();
qs += 1;
ans += 1;
print('end');


// Qs. 7
QS = `qs` + qs;
print('qs');
buffer = `Write a function that takes two strings as arguments, determines the 
longer of the two strings, and then returns the result of concatenating the 
shorter string, the longer string, and the shorter string once again. You may 
assume that the strings are of different lengths.
EXAMPLES
shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"`;
print();
print('ans');
buffer = `shortLongShort(arg1, arg2) - Short Long Short is as follows.`;
print();
print('code');
function shortLongShort(arg1, arg2) {
  let returnVal;
  if (arg1.length > arg2.length) {
    returnVal = arg2 + arg1 + arg2;
  } else {
    returnVal = arg1 + arg2 + arg1;
  }
  console.log(returnVal);
}


buffer = ` `;
print();
print('output');
let str1 = 'abc';
let str2 = 'defgh';
let str3 = 'abcde';
let str4 = 'fgh';
let str5 = '';
let str6 = 'xyz';
shortLongShort(str1, str2);
shortLongShort(str3, str4);
shortLongShort(str5, str6);
qs += 1;
ans += 1;
print('end');


// Qs. 8
QS = `qs` + qs;
print('qs');
buffer = `In the modern era under the Gregorian Calendar, leap years occur in 
every year that is evenly divisible by 4, unless the year is also divisible by 
100. If the year is evenly divisible by 100, then it is not a leap year, unless 
the year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0. Write a function 
that takes any year greater than 0 as input, and returns true if the year is a 
leap year, or false if it is not a leap year.`;
print();
print('ans');
buffer = `isLeapYear(arg1) - Returns true if arg1 is leap year, false otherwise.`;
print();
print('code');
buffer = `PEDAC
Problem: Is given year a leap year? Return true or false.
Examples/Edge & Test Cases:
isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true
Data Structure:
  isLeapYear(arg1);
  arg1 - number
  answerLeapYr - boolean answer
Algorithm:
  arg1 divisible by 4?
  arg1 divisible by 100?
  arg1 divisible by 400?
Code:
  if (arg1%4 != 0) answer = false
    else if (arg1%100 != 0) answer = true  // div by 4, not div by 100
          else if (arg1%400 != 0) answer = false  // div by 100, not div by 400
                else answer = true  // div by 100, div by 400`;
print();
function isLeapYear(arg1) {
  let answerLeapYr;
  if (arg1%4 != 0) {
    answerLeapYr = false;
  } else {
    if (arg1%100 != 0) {
      answerLeapYr = true;
    } else {
      if (arg1%400 != 0) {
        answerLeapYr = false;
      } else {
        answerLeapYr = true;
      }
    }
  }
  return answerLeapYr;
}


buffer = ` `;
print();
print('output');
let str1 = 'abc';
let str2 = 'defgh';
let str3 = 'abcde';
let str4 = 'fgh';
let str5 = '';
let str6 = 'xyz';
let TEST_YEARS = [2016, 2015, 2100, 2400, 240000, 240001, 2000, 1900, 1752, 
1700, 1, 100, 400] ;
let TEST_RESULTS = [true, false, false, true, true, false, true, false, true, false, false, false, true];
for (var i = TEST_RESULTS.length; i--; ) {
  isLeapYear(1);
  console.log(`isLeapYear(${TEST_YEARS[i]}) is ${isLeapYear(TEST_YEARS[i])} ... ${TEST_RESULTS[i]}.`);
}
qs += 1;
ans += 1;
print('end');
*/

// Qs. 9
QS = `qs` + qs;
print('qs');
buffer = `In the modern era under the Gregorian Calendar, leap years occur in 
every year that is evenly divisible by 4, unless the year is also divisible by 
100. If the year is evenly divisible by 100, then it is not a leap year, unless 
the year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0. Write a function 
that takes any year greater than 0 as input, and returns true if the year is a 
leap year, or false if it is not a leap year.`;
print();
print('ans');
buffer = `isLeapYear(arg1) - Returns true if arg1 is leap year, false otherwise.`;
print();
print('code');
buffer = `PEDAC
Problem: Is given year a leap year? Return true or false.
Examples/Edge & Test Cases:
isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true
Data Structure:
  isLeapYear(arg1);
  arg1 - number
  answerLeapYr - boolean answer
Algorithm:
  arg1 divisible by 4?
  arg1 divisible by 100?
  arg1 divisible by 400?
Code:
  if (arg1%4 != 0) answer = false
    else if (arg1%100 != 0) answer = true  // div by 4, not div by 100
          else if (arg1%400 != 0) answer = false  // div by 100, not div by 400
                else answer = true  // div by 100, div by 400`;
print();
function isLeapYear(arg1) {
  let answerLeapYr;
  if (arg1%4 != 0) {
    answerLeapYr = false;
  } else {
    if (arg1%100 != 0) {
      answerLeapYr = true;
    } else {
      if (arg1%400 != 0) {
        answerLeapYr = false;
      } else {
        answerLeapYr = true;
      }
    }
  }
  return answerLeapYr;
}


buffer = ` `;
print();
print('output');
let str1 = 'abc';
let str2 = 'defgh';
let str3 = 'abcde';
let str4 = 'fgh';
let str5 = '';
let str6 = 'xyz';
let TEST_YEARS = [2016, 2015, 2100, 2400, 240000, 240001, 2000, 1900, 1752, 
1700, 1, 100, 400] ;
let TEST_RESULTS = [true, false, false, true, true, false, true, false, true, false, false, false, true];
for (var i = TEST_RESULTS.length; i--; ) {
  isLeapYear(1);
  console.log(`isLeapYear(${TEST_YEARS[i]}) is ${isLeapYear(TEST_YEARS[i])} ... ${TEST_RESULTS[i]}.`);
}
qs += 1;
ans += 1;
print('end');


/* TEMPLATE
/*
// Qs. 
QS = `qs` + qs;
print('qs');
buffer = ` `;
print();
print('ans');
buffer = ` `;
print();
print('code');
buffer = ` `;
print();
print('output');
qs += 1;
ans += 1;
print('end');


*/

// END
/* ==== ==== ==== ==== */
