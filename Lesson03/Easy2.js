// Launch School
// JS 101 Lesson 3: Practice Problems
// Easy 1
// const readline = require('readline-sync');
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
// START
// Qs. 1
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
hello, hello"; `)
let str10 = "Welcome message: Hello World! hello world! Hello, hello, hello"; 
console.log(`str10.replace('hello', 'hi'): ` + str10.replace('hello', 'hi')); 
console.log(`str10.replace(/hello/, 'hi'): ` + str10.replace(/hello/, 'hi')); 
console.log(`str10.replace(/hello/g, 'hi'): ` + str10.replace(/hello/g, 'hi')); 
console.log(`str10.replace(/hello/gi, 'hi'): ` + str10.replace(/hello/gi, 'hi')); 
console.log(`str10 remains unchanged: ` + str10);

console.log(' ');
console.log(`The same can be achieved using objects to map replacements and 
functions in .replace:`);
function getObjKeysValues(myObj){
  var keysAndValues = [];
  var value;
  // keys.push(Object.getOwnPropertyNames(mapObj));
  for(var key in myObj) {
    if (Object.prototype.hasOwnProperty.call(myObj, key)) {
      value = key + `:` + myObj[key];
      keysAndValues.push(value);
    }
  }
  return keysAndValues;
}
var mapObj = {cat:"kitty", dog:"pooch", goat:"billy"};
console.log(`mapObj is: ` + getObjKeysValues(mapObj));

var re = new RegExp(Object.keys(mapObj).join("|"),"gi");
console.log(`regular expression used is: ` + re);

let str12 = "I have a cat, a dog, a mouse, and a goat.";
console.log(`str12 original: ` + str12);

str12 = str12.replace(re, function(matched){return mapObj[matched];});
console.log(`str12 is now: ` + str12);

mapObj.mouse = "snake";
console.log(`mapObj is: ` + getObjKeysValues(mapObj));

re = RegExp(Object.keys(mapObj).join("|"),"gi");
console.log(`regular expression used is: ` + re);

str12 = str12.replace(re, function(matched){return mapObj[matched];});
console.log(`str12 is now: ` + str12);

/*
// Qs. 2
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