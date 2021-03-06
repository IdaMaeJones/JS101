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
buffer = `Given a string, return a new string that replaces every occurrence of 
the word "important" with "urgent":
let advice = "Few things in life are as important as house training your pet 
dinosaur."; `;
print();
print('ans');
buffer = `Use the .replace() method of String. `;
print();
print('code');
buffer = `let advice = "Few things in life are as important as house training 
your pet dinosaur."; 
advice.replace('important', 'urgent');
console.log(advice);`;
print();
print('output');
let advice = `Few things in life are as important as house training your pet 
dinosaur.`; 
console.log(advice.replace('important', 'urgent'));
/*
console.log(" ");
console.log(`Other examples of string replacement include using reular 
expressions as follows:`);
console.log(`let str10 = "Welcome message: Hello World! hello world! Hello, 
hello, hello"; `);
let str10 = "Welcome message: Hello World! hello world! Hello, hello, hello"; 
console.log(`str10.replace('hello', 'hi'): ` + str10.replace('hello', 'hi')); 
console.log(`str10.replace(/hello/, 'hi'): ` + str10.replace(/hello/, 'hi')); 
console.log(`str10.replace(/hello/g, 'hi'): ` + str10.replace(/hello/g, 'hi')); 
console.log(`str10.replace(/hello/gi, 'hi'): ` + str10.replace(/hello/gi, 'hi')); 
console.log(`str10 remains unchanged: ` + str10);

console.log(' ');
console.log(`The same can be achieved using objects to map replacements and 
functions in .replace:`);

var mapObj = {cat:"kitty", dog:"pooch", goat:"billy"};
console.log(`mapObj is: ` + getObjPropsValues(mapObj));

var re = new RegExp(Object.keys(mapObj).join("|"),"gi");
console.log(`regular expression used is: ` + re);

let str12 = "I have a cat, a dog, a mouse, and a goat.";
console.log(`str12 original: ` + str12);

str12 = str12.replace(re, function(matched){return mapObj[matched];});
console.log(`str12 is now: ` + str12);

mapObj.mouse = "snake";
console.log(`mapObj is: ` + getObjPropsValues(mapObj));

re = RegExp(Object.keys(mapObj).join("|"),"gi");
console.log(`regular expression used is: ` + re);

str12 = str12.replace(re, function(matched){return mapObj[matched];});
console.log(`str12 is now: ` + str12);

*/
qs += 1;
ans += 1;
print('end');

// Qs. 2
QS = `qs` + qs;
print('qs');
buffer = `The Array.prototype.reverse method reverses the order of elements in
an array, and Array.prototype.sort can rearrange the elements in a variety of 
ways, including descending. Both of these methods mutate the original array as 
shown below. Write two distinct ways of reversing the array without mutating 
the original array. Use reverse for the first solution, and sort for the second.
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]
numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ] `;
print();
print('ans');
buffer = ` `;
print();
print('code');
buffer = `reversedArray = [...numbers1].slice().reverse();
sortedArray = [...numbers2].sort((num1, num2) => num2 - num1); or
sortedArray = [...numbers2].sort() for ascending;`;
print();
/*
print('output');
let continueCode = 1;
let numbers1 = [1, 2, 3, 4, 5];
console.log(`Original array numbers1 is: [` + numbers1 + `]`);
let numbers2 = [10, 2, 13, 24, 5];
console.log(`Original array numbers2 is: [` + numbers2 + `]`);
let reversedArray = [];
let sortedArray = [];
do {
  prompt('flavor');
  let useMethod = readline.question();
  while (invalidNumber(useMethod) || useMethod < 1 || useMethod > 3) {
    prompt('user input');
    console.log(useMethod);
    prompt('correct input');
    useMethod = readline.question();
  }
  switch (useMethod) {
    case '1':
      reversedArray = [...numbers1].slice().reverse();
      console.log(prompt('reversed array') + numbers1 + `: ` + reversedArray);
      console.log(prompt('original array') + numbers1);
      sortedArray = [...numbers2].sort((num1, num2) => num2 - num1);
      console.log(prompt('sorted array') + numbers2 + `: ` + sortedArray);
      console.log(prompt('original array') + numbers2);
      sortedArray = [...numbers2].sort((num1, num2) => num1 - num2);
      console.log(prompt('sorted array') + numbers2 + `: ` + sortedArray);
      break;
    case '2':
      numbers1.forEach((num) => {reversedArray.unshift(num)});
      console.log(prompt('reversed array') + numbers1 + `: ` + reversedArray);
      console.log(prompt('original array') + numbers1);
      break;
    case '3':
      reversedArray = [...numbers1].slice().reverse();
      console.log(prompt('reversed array') + numbers1 + `: ` + reversedArray);
      console.log(prompt('original array') + numbers1);
      break;
    default:
      reversedArray = [...numbers1].slice().reverse();
      console.log(prompt('reversed array') + numbers1 + `: ` + reversedArray);
      console.log(prompt('original array') + numbers1);
      sortedArray = [...numbers2].sort((num1, num2) => num2 - num1);
      console.log(prompt('sorted array') + numbers2 + `: ` + sortedArray);
      console.log(prompt('original array') + numbers2);
      break;
  }
  
  // GET would user like to perform another calculation
  prompt('continue');
  let anotherMethod = readline.question();
  while (anotherMethod.trimStart() === '' ||
         !VALID_RESPONSES.includes(anotherMethod)) {
    prompt('flavor');
    console.log(`${anotherMethod}`);
    prompt('valid answers');
    anotherMethod = readline.question();
  }
  if (anotherMethod.toUpperCase() === 'N') break;
  console.clear();

} while (continueCode === 1);
prompt('adieu');
*/
qs += 1;
ans += 1;
print('end');


// Qs. 3
QS = `qs` + qs;
print('qs');
buffer = `Given a number and an array, determine whether the number is included in the array.
let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
let number1 = 8;  // false
let number2 = 95; // true`;
print();
print('ans');
buffer = `Use .includes() method of Array.`;
print();
print('code');
buffer = `console.log(numbers.includes(number1));
console.log(numbers.includes(number2));`;
print();
print('output');
let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
let number1 = 8;  // false
let number2 = 95; // true
console.log(numbers.includes(number1));
console.log(numbers.includes(number2));
qs += 1;
ans += 1;
print('end');


// Qs. 4
QS = `qs` + qs;
print('qs');
buffer = `Starting with the string:
let famousWords = "seven years ago..."; `;
print();
print('ans');
buffer = `Use .concat() or '+' operator in front of famousWords. `;
print();
print('code');
buffer = `console.log("Four score and" + famousWords); `;
print();
print('output');
let famousWords = "seven years ago...";
console.log("Four score and" + famousWords);
qs += 1;
ans += 1;
print('end');


// Qs. 5
QS = `qs` + qs;
print('qs');
buffer = `Given an array of numbers [1, 2, 3, 4, 5], mutate the array by 
removing the number at index 2, so that the array becomes [1, 2, 4, 5]. `;
print();
print('ans');
buffer = `Use .splice(start, end, <none>) method of Array. `;
print();
print('code');
buffer = `let numbers = [1, 2, 3, 4, 5];
numbers.splice(2,1);
console.log(numbers); `;
print();
print('output');
numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1);
console.log(numbers);
qs += 1;
ans += 1;
print('end');


// Qs.6
QS = `qs` + qs;
print('qs');
buffer = `let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
This code will create a nested array that looks like this:
["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
Create a new array that contains all of the above values, but in an un-nested 
format: [ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]`;
print();
print('ans');
buffer = `Use one of three methods: Spread Syntax, .reduce() method, or 
.forEach() method.`;
print();
print('code');
buffer = `flintstones = [].concat(...flintstones);
console.log(flintstones);
// Using .reduce()
flintstones = flintstones.reduce( ((accum, element) => {return accum.concat(element)}), []);
console.log(flintstones);
// Using .forEach()
let tempArray = [];
flintstones.forEach((element) => {tempArray = tempArray.concat(element)});
console.log(flintstones);`;
print();
print('output');
console.log("// Spread Syntax");
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
flintstones = [].concat(...flintstones);
console.log(flintstones);
// Using .reduce()
console.log("// .reduce() method");
flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
flintstones = flintstones.reduce( ((accum, element) => {return accum.concat(element)}), []);
console.log(flintstones);
// Using .forEach()
console.log("// .forEach method");
flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
let tempArray = [];
flintstones.forEach((element) => {tempArray = tempArray.concat(element)});
flintstones = tempArray;
console.log(flintstones);
qs += 1;
ans += 1;
print('end');


// Qs. 7
QS = `qs` + qs;
print('qs');
buffer = `let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4,
Pebbles: 5 };
Create an array from this flintstones that contains only two elements: Barney's
name and Barney's number [ 'Barney', 2 ] `;
print();
print('ans');
buffer = `Use the .entries() method of Object datatype to create an array and
then use .filter() and .shift() methods of Array datatype to return the
required result.`;
print();
print('code');
buffer = `let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4,
Pebbles: 5 };
let temp = Object.entries(flintstones);
temp = temp.filter(e => e[0] === 'Barney');
temp = temp.shift(); 
// alternately, the above code could also be accomplished in one line ...
console.log(Object.entries(flintstones).filter(e => e[0] === 'Barney').shift();`;
print();
print('output');
flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
// let temp = Object.entries(flintstones);
// temp = temp.filter(e => e[0] === 'Barney');
// temp = temp.shift();
// console.log(`// which returns: ` + temp);
console.log(`// which returns ...`);
console.log(Object.entries(flintstones).filter(e => e[0] === 'Barney').shift());
qs += 1;
ans += 1;
print('end');


// Qs. 8
QS = `qs` + qs;
print('qs');
buffer = `Check whether the objects assigned to variables 'numbers' and 'table'
are arrays.
let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false `;
print();
print('ans');
buffer = `Use Array.isArray(yourArray) method `;
print();
print('code');
buffer = `console.log(Array.isArray(numbers); // true
console.log(Array.isArray(table); // false`;
print();
print('output');
numbers = [1, 2, 3, 4];
let table = { field1: 1, field2: 2, field3: 3, field4: 4 };
console.log(Array.isArray(numbers));
console.log(Array.isArray(table));
qs += 1;
ans += 1;
print('end');


// Qs. 9
QS = `qs` + qs;
print('qs');
buffer = `Write two one-line expressions to count the number of lower-case 't'
characters in each of the following strings:
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";`;
print();
print('ans');
buffer = `Use the String.match() method with a RegExp (Regular Expression) and
the required count is equal to the String.length() method applied to the string
that matches the regular expression.`;
print();
print('code');
buffer = `let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
console.log((statement1.match(/t/g) || []).length);
console.log((statement2.match(/t/g) || []).length);`;
print();
print('output');
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
console.log((statement1.match(/t/g) || []).length);
console.log((statement2.match(/t/g) || []).length);
qs += 1;
ans += 1;
print('end');


// Qs. 10
QS = `qs` + qs;
print('qs');
buffer = `Back in the stone age (before CSS), we used spaces to align things on
the screen. If we have a 40-character wide table of Flintstone family members,
how can we center the following title above the table with spaces?
let title = "Flintstone Family Members"; `;
print();
print('ans');
buffer = `Used String.prototype.padStart() method to pad ' ' at the beginning
of the string 'title'. Determine the number of ' ' to pad by taking the floor
of length of 'title' and dividing by 2.`;
print();
print('code');
buffer = `let title = "Flintstone Family Members";
console.log(\`'title' before padding is: \${title}\`);
let pad = Math.floor((40-title.length)/2);
console.log(\`Inserting \${pad} spaces.\`);
title = title.padStart(pad + title.length);
console.log(\`'title' after padding is : \${title}\`);\n`;
print();
print('output');
let title = "Flintstone Family Members";
console.log(`'title' before padding is: ${title}`);
let pad = Math.floor((40-title.length)/2);
console.log(`Inserting ${pad} spaces.`);
title = title.padStart(pad + title.length);
console.log(`'title' after padding is : ${title}`);
qs += 1;
ans += 1;
print('end');



/* TEMPLATE
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