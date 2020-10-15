// Launch School
// JS 101 Small Problems
// Easy 2
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
  let greet = `Hello, ___ ! Nice to have a ___ around.` ;
  return greet;
}


buffer = ` `;
print();
print('output');
console.log(
  greetings(["John", "Q", "Doe"], {title: "Master", occupation: "Plumber"})
);
qs += 1;
ans += 1;
print('end');


// Qs. 2
QS = `qs` + qs;
print('qs');
buffer = `Write a function that computes the sum of all numbers between 1 and 
some other number, inclusive, that are multiples of 3 or 5. For instance, if the
supplied number is 20, the result should be 98 
(3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).
You may assume that the number passed in is an integer greater than 1..`;
print();
print('ans');
buffer = `multisum(arg1) - Returns true if arg1 leap year, false otherwise.`;
print();
print('code');
buffer = `PEDAC
Problem: Sum all multiples of 3 or 5 up to a given input.
Examples/Edge & Test Cases:
multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168
Data Structure:
  multisum(arg);
  arg - number (assume integer greater than 1)
  answerSum - number
Algorithm:
 for i = 0, i <= arg, i++
  i%3 === 0 - add i to answer
  if not i%3 === 0, i%5 === 0 - add i to answer
Code:
  if i%3 != 0  // not div by 3, check 5
      if i%5 != 0  // not div by 5
        else add i to answer  // div by 5, add to answer
    else add i to answer  // div by 3, add to answer
  `;
print();
function multisum(arg) {
  let answerSum = 0;
  for (var i = arg; i >= 0; i--) {
    if (i%3 != 0) {
      if (i%5 != 0) {
      } else {
        answerSum += i ;
      }
    } else {
      answerSum += i ;
    }
  }
  return answerSum;
}


buffer = ` `;
print();
print('output');
let TEST_CASES = [2, 3, 5, 10, 1000] ;
let TEST_SUMS = [0, 3, 8, 33, 234168];
for (var i = TEST_SUMS.length; i--; ) {
  console.log(`multisum(${TEST_CASES[i]}) is ${multisum(TEST_CASES[i])} ... ${TEST_SUMS[i]}.`);
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
