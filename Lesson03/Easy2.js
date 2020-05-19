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
// Display an Object's properties and corresponding values
function getObjPropsValues(myObj){
  var propsAndValues = [];
  var result;
  // keys.push(Object.getOwnPropertyNames(mapObj));
  for(var key in myObj) {
    if (Object.prototype.hasOwnProperty.call(myObj, key)) {
      result = key + `:` + myObj[key];
      propsAndValues.push(result);
    }
  }
  return propsAndValues;
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
var code = 'CODE:';
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
      console.log(`${divider}`);
      break;
    default:
      console.log(`${buffer}`);
      break;
  }
}
// END DISPLAY CODE


// START
// Qs. 
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
let advice = `Few things in life are as important as house training your pet 
dinosaur.`; 
console.log(advice.replace('important', 'urgent'));
qs += 1;
ans += 1;
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
      reversedArray = [...numbers1].slice().reverse();
      console.log(prompt('reversed array') + numbers1 + `: ` + reversedArray);
      console.log(prompt('original array') + numbers1);
      sortedArray = [...numbers2].sort((num1, num2) => num2 - num1);
      console.log(prompt('sorted array') + numbers2 + `: ` + sortedArray);
      console.log(prompt('original array') + numbers2);
      break;
    case '3':
      reversedArray = [...numbers1].slice().reverse();
      console.log(prompt('reversed array') + numbers1 + `: ` + reversedArray);
      console.log(prompt('original array') + numbers1);
      sortedArray = [...numbers2].sort((num1, num2) => num2 - num1);
      console.log(prompt('sorted array') + numbers2 + `: ` + sortedArray);
      console.log(prompt('original array') + numbers2);
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
qs += 1;
ans += 1;
print('end');


// Qs. 3
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
qs += 1;
ans += 1;
print('end');

/*
// Qs. 4
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
qs += 1;
ans += 1;
print('end');


// Qs. 10
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
qs += 1;
ans += 1;
print('end');


// Qs. 10
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
qs += 1;
ans += 1;
print('end');


// Qs. 10
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
qs += 1;
ans += 1;
print('end');


// Qs. 10
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
qs += 1;
ans += 1;
print('end');


// Qs. 10
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
qs += 1;
ans += 1;
print('end');


// Qs. 10
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
qs += 1;
ans += 1;
print('end');
*/

// END
/* ==== ==== ==== ==== */