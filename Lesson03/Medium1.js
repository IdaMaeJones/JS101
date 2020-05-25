// Launch School
// JS 101 Lesson 3: Practice Problems
// Easy 2
const readline = require('readline-sync');
const MESSAGES = require('./Easy2.json');
const VALID_RESPONSES = ['y', 'Y', 'n', 'N'];
var LANGUAGE = 'en';
var QS = '';
//
// COMMON HELPER CODE
// pair message with language
function messages(message, ques = QS, lang = LANGUAGE) {
  return MESSAGES[lang][ques][message];
}
// Insert '=> ' before messages to user
function prompt(key) {
  let message = messages(key, QS, LANGUAGE);
  console.log(`=> ${message}`);
  return '';
}
// Invalid Number Check
function invalidNumber(num) {
    return num.trimStart() === '' || Number.isNaN(Number(num));
}
// END COMMON HELPER CODE
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
buffer = `Write four different ways to remove all of the elements from the following array:
let numbers = [1, 2, 3, 4];`;
print();
print('ans');
buffer = `The four ways are: (1) set to null; (2) set length to 0; (3) use the
.pop() method of Array; (4) use .splice() method of Array.`;
print();
print('code');
buffer = `// (1) set to null
numbers = [];
// set length to 0
numbers.length = [];
// using .pop()
for (var i = numbers.length; i > 0; i--) {
  numbers.pop();
}
// using .splice()
numbers.splice(0, numbers.length);
`;
print();
print('output');
let numbers = [1, 2, 3, 4];
console.log(`Array 'numbers' is: ${numbers}`);
console.log('Setting array to null array.');
numbers = [];
console.log(`Array 'numbers' is: ${numbers}\n`);
//
numbers = [1, 2, 3, 4];
console.log(`Array 'numbers' is: ${numbers}`);
console.log('Setting array length to 0.');
numbers.length = [];
console.log(`Array 'numbers' is: ${numbers}\n`);
//
numbers = [1, 2, 3, 4];
console.log(`Array 'numbers' is: ${numbers}`);
console.log('Using for-loop to pop() elements.');
for (var i = numbers.length; i > 0; i--) {
  numbers.pop();
}
console.log(`Array 'numbers' is: ${numbers}\n`);
//
numbers = [1, 2, 3, 4];
console.log(`Array 'numbers' is: ${numbers}`);
console.log('Using splice() to truncate array.');
numbers.splice(0, numbers.length);
console.log(`Array 'numbers' is: ${numbers}`);
qs += 1;
ans += 1;
print('end');


// Qs. 2
QS = `qs` + qs;
print('qs');
buffer = `What will the following code output?
console.log([1, 2, 3] + [4, 5]);`;
print();
print('ans');
buffer = `It should output 1,2,34,5`;
print();
print('code');
buffer = `console.log([1, 2, 3] + [4, 5]);`;
print();
print('output');
console.log([1, 2, 3] + [4, 5]);
qs += 1;
ans += 1;
print('end');


// Qs. 3
QS = `qs` + qs;
print('qs');
buffer = `What will the code output?
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);`;
print();
print('ans');
buffer = `It will output: hello there`;
print();
//print('code');
//buffer = ` `;
//print();
print('output');
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);
qs += 1;
ans += 1;
print('end');


// Qs. 4
QS = `qs` + qs;
print('qs');
buffer = `What will the following code output?
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);`;
print();
print('ans');
buffer = `It will output : [ { first: 42 }, { second: 'value2' }, 3, 4, 5 ]
as arr2 is a pointer to the unmutated array (.slice() does not mututate array)
referred to by arr1. When arr2[0].first is assigned 42, it mutates arr1's first
element which is an object with key 'first' and a value 'value1'. 'value1' is
replaced with 42. So, console.log(arr1) prints the mutated array.`;
print();
//print('code');
//buffer = ` `;
//print();
print('output');
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
console.log(`Old arr1 is: ${arr1} where arr1[0] is: ${Object.entries(arr1[0])}`);
let arr2 = arr1.slice();
console.log(`slice() does not mutate arr1: ${arr1.slice()} &
the first element is the object (arr1[0]) is: {${Object.entries(arr1[0])}}`);
console.log(`Also, arr2[0] is: {${Object.entries(arr2[0])}}`);
arr2[0].first = 42;
console.log(`After arr2[0].first = 42, arr1 is:`);
console.log(arr1);
qs += 1;
ans += 1;
print('end');


// Qs. 5
QS = `qs` + qs;
print('qs');
buffer = `The following function unnecessarily uses two return statements to 
return boolean values. How can you eliminate the unnecessary duplication?
function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}
Try to come up with at least two different solutions. `;
print();
print('ans');
buffer = `Replace the if-statement by a return (OR condition) statement. This
can be further simplified by using .includes() method of String datatype which
would also allow for multiple valid choices.`;
print();
print('code');
buffer = `// eliminating if-condition
function isColorValid(color) {
  return (color === "blue" || color === "green");
}
console.log(\`\${color = "red"}: \${isColorValid(color)}\`);
console.log(\`\${color = "green"}: \${isColorValid(color)}\`);
console.log(\`\${color = "blue"}: \${isColorValid(color)}\`);`;
print();
print('output');
let color;
function isColorValid(color) {
  return (color === "blue" || color === "green");
}
console.log(`${color = "red"}: ${isColorValid(color)}`);
console.log(`${color = "green"}: ${isColorValid(color)}`);
console.log(`${color = "blue"}: ${isColorValid(color)}`);

print('code');
buffer = `// simplified code
const isValid = (color => ["blue", "green"].includes(color));
console.log(\`\${color = "red"}: \${isValid(color)}\`);
console.log(\`\${color = "green"}: \${isValid(color)}\`);
console.log(\`\${color = "blue"}: \${isValid(color)}\`);`;
print();
print('output');
const isValid = (color => ["blue", "green"].includes(color));
console.log(`${color = "red"}: ${isValid(color)}`);
console.log(`${color = "green"}: ${isValid(color)}`);
console.log(`${color = "blue"}: ${isValid(color)}`);
qs += 1;
ans += 1;
print('end');


/* TEMPLATE
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