// Launch School
// JS 101 Small Problems
// Easy1
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
/*
PEDAC (Process the Problem, Examples/Test Cases, Data Structures, Algorithm, Code with intent)
Process the Problem:
explicit req.
Function isOdd if supplied an integer as an arg
implicit req.
What is the default argument? 
What if the function is called without an argument?
What if the argument is not an integer?

Pseudocode:
isOdd(arg)
arg mod 2
if remainder, odd
 else even
*/

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
/*
Function logOdd takes no arguments.
Loops from 1 to 99.
If number odd, logs to console.
*/
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
/*
Function logEven takes no arguments.
Loops from 1 to 99.
If number even, logs to console.
*/
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
/*
Function logEven takes no arguments.
Loops from 1 to 99.
If number even, logs to console.
*/

function logArea(argument) {
  // body...
}

buffer = ` `;
print();
print('output');
buffer = `Testing \n
....................`;
logArea();
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
