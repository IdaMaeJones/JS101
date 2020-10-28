// Launch School
// JS101, Lesson 5, Advanced JavaScript Collections
// Practice Problems
// https://launchschool.com/lessons/778acada/assignments/8c5df017

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
