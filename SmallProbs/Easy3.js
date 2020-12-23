// Launch School
// JS 101 Small Problems
// Easy 3
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
buffer = `Create a function that takes 2 arguments, an array and an object. The
array will contain 2 or more elements that, when combined with adjoining spaces,
will produce a person's name. The object will contain two keys, "title" and 
"occupation", and the appropriate values. Your function should return a greeting
that uses the person's full name, and mentions the person's title.`;
print();
print('ans');
buffer = `greetings(arg1, arg2) - Returns greetings.`;
print();
print('code');
buffer = `PEDAC
Problem: Return greetings after looping through array for name and object for
title and occupation.
Examples/Edge & Test Cases:
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.
Data Structure:
  arg1 - array
  arg2 - object
  greetText - string
Algorithm:
  loop through arg1, add each element with appropriate spacing
  loop through arg2, add each element with appropriate spacing
Code:
  for i = 0; i < arg1.length; i++
    add element to greetText
  for i = 0; i < arg2.length; i++
    add element to greetText
  `;
print();
function greetings(arg1, arg2) {
  let greet = `Hello,` ;
  greet += arg1.join(" ") + "! Nice to have a";
  let titleArray = Object.getOwnPropertyNames(arg2);
  let arg2Property ='';
  for (var i = 0; i < titleArray.length; i++) {
    arg2Property = titleArray[i];
    greet = greet + ' ' + arg2[`${arg2Property}`];
  }
  greet += ' around.';
  return greet;
}


buffer = ` `;
print();
print('output');
console.log(
  greetings(["John", "Q", "Doe"], {title: "Master", occupation: "Plumber", grade: "Grade 2"})
);
qs += 1;
ans += 1;
print('end');


// Qs. 2
QS = `qs` + qs;
print('qs');
buffer = `Write a program that will ask for user's name. The program will then 
greet the user. If the user writes "name!" then the computer yells back to the 
user.
What is your name? Bob
Hello Bob.
What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?`;
print();
print('ans');
buffer = `greetUser(arg) - Greet user as appropriate.`;
print();
print('code');
buffer = `PEDAC
Problem: Echo back the input name. All caps and ask a question if ! at end.
Examples/Edge & Test Cases:
What is your name? Bob
Hello Bob.
What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?
Data Structure:
  none
Algorithm:
  if ! at end, all caps and qs
    else normal greeting
Code:
  if arg.arg.length-1 is !  - all caps greeting
    else regular greeting
  `;
print();
function greetUser() {
  let rlSync = require('readline-sync');
  let userName = rlSync.question("What is your name? ");
  let idx = userName.length - 1 ;
  if (userName[idx] != '!') {
    console.log(`Hello ${userName}.`);
  } else {
    console.log(`HELLO ${userName.toUpperCase()}. WHY ARE WE SCREAMING?`);
  }
}


buffer = ` `;
print();
print('output');
greetUser();
greetUser();
qs += 1;
ans += 1;
print('end');


// Qs. 3
QS = `qs` + qs;
print('qs');
buffer = `Create a function that takes two arguments, multiplies them together, 
and returns the result.`;
print();
print('ans');
buffer = `multiply(arg1, arg2) - Multiply and return result.`;
print();
print('code');
buffer = `PEDAC
Problem: multiply two arguments passed to function
Example and Edge/Test Cases:
  multiply(5, 3)
Data Structures: result - number
Algorithm: result = arg1 * arg2
Code: ...
`;
print();
function multiply(arg1, arg2) {
  let result = arg1 * arg2;
  return result;
}


buffer = ` `;
print();
print('output');
console.log(`multiply(5, 3) returns ${multiply(5, 3)} === 15.`);

qs += 1;
ans += 1;
print('end');


// Qs. 4
QS = `qs` + qs;
print('qs');
buffer = `Using the multiply() function from the "Multiplying Two Numbers" 
problem, write a function that computes the square of its argument (the square 
is the result of multiplying a number by itself).`;
print();
print('ans');
buffer = `square(arg) - Square and return result.`;
print();
print('code');
buffer = `PEDAC
Problem: square argument passed to function
Example and Edge/Test Cases:
  square(5)
  square(-8)
Data Structures: result - number
Algorithm: result = arg * arg
Code: ...
`;
print();
function square(arg) {
  let result = multiply(arg, arg);
  return result;
}


buffer = ` `;
print();
print('output');
console.log(`square(5) returns ${square(5)} === 25.`);
console.log(`square(-8) returns ${square(-8)} === 64.`);

qs += 1;
ans += 1;
print('end');


// Qs. 5
QS = `qs` + qs;
print('qs');
buffer = `Write a program that prompts the user for two positive integers, and 
then prints the results of the following operations on those two numbers: 
addition, subtraction, product, quotient, remainder, and power. 
Do not worry about validating the input.`;
print();
print('ans');
buffer = `numberTricks() - Perform number operations on two inputs entered.`;
print();
print('code');
buffer = `PEDAC
Problem: perform number operations
Example and Edge/Test Cases: 23, 17
Data Structures: 
Number - addition, subtraction, product, quotient, remainder, and power
Code: ...
`;
print();
function numberTricks() {
  let rlSync = require("readline-sync");
  let firstNumber = Number(rlSync.question("Enter the first number\n"), 10);
  let secondNumber = Number(rlSync.question("Enter the second number\n"), 10);
  let addition = firstNumber + secondNumber;
  let subtraction = firstNumber - secondNumber;
  let multiplication = firstNumber * secondNumber;
  let division = Math.floor(firstNumber / secondNumber);
  let quotient = firstNumber%secondNumber;
  let power = Math.pow(firstNumber, secondNumber);
  console.log(`${firstNumber} + ${secondNumber} = ${addition}`);
  console.log(`${firstNumber} - ${secondNumber} = ${subtraction}`);
  console.log(`${firstNumber} * ${secondNumber} = ${multiplication}`);
  console.log(`${firstNumber} / ${secondNumber} = ${division}`);
  console.log(`${firstNumber} % ${secondNumber} = ${quotient}`);
  console.log(`${firstNumber} ** ${secondNumber} = ${power}`);
}


buffer = ` `;
print();
print('output');
numberTricks();

qs += 1;
ans += 1;
print('end');
*/

// Qs. 6
QS = `qs` + qs;
print('qs');
buffer = `Write a function that returns the next to last word in the String 
passed to it as an argument. Words are any sequence of non-blank characters.
You may assume that the input String will always contain at least two words.`;
print();
print('ans');
buffer = `penultimate() - return last but one word.`;
print();
print('code');
buffer = `PEDAC
Problem: return penultimate string in array of strings
Example and Edge/Test Cases: "last word" and "Launch School is tedious!"
Data Structures: 
  Array - elements
  String - result
Code: ...
`;
print();
function penultimate(arg) {
  let elements = arg.split(' ');
  let result = elements[elements.length - 2];
  return result;
}


buffer = ` `;
print();
print('output');
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is tedious!") === "is"); // logs true
console.log(`"last word" ... last === ${penultimate("last word")}`);
console.log(`"Launch School is tedious!" ... is === ${penultimate("Launch School is tedious!")}`);
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
