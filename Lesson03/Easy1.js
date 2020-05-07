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
// Qs 1
print('qs');
buffer = `Will the code below raise an error?
let numbers = [1, 2, 3];
numbers[6] = 5;
Bonus:
let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?`;
print();
print('ans');
print('code');
let numbers = [1, 2, 3];
numbers[6] = 5;
buffer = `let numbers = [1, 2, 3];
numbers[6] = 5;
The statement above assigns the number 5 to the 7th element in the array
'numbers'. The array now contains three empty elements in 4th, 5th & 6th place.
`;
print();
console.log(numbers);
numbers[4];
buffer = `numbers[4]; 
This does not return anything as the 5th element was already assigned empty.`;
print();
console.log(numbers);
qs += 1;
ans += 1;
print('end');


// Qs. 2
print('qs');
buffer = `How can you determine whether a given string ends with an exclamation mark (!)?
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false`;
print();
print('ans');
buffer = `use endsWith() method of String.`;
print();
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false
print('code');
buffer = `str1.endsWith('!');
str2.endsWith('!');`;
print();
console.log(str1.endsWith('!'));
console.log(str2.endsWith('!'));
qs += 1;
ans += 1;
print('end');


// Qs. 3
print('qs');
buffer = `Determine whether the following object of people and their age 
contains an entry for 'Spot':
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };`;
print();
print('ans');
buffer = `Use the Object.prototype.hasOwnProperty() method.`;
print();
print('code');
buffer = `console.log(ages.hasOwnProperty('Spot'));`;
print();
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
console.log(ages.hasOwnProperty('Spot'));
qs += 1;
ans += 1;
print('end');


// Qs. 4
print('qs');
buffer = `Using the following string, create a new string that contains all 
lowercase letters except for the first character, which should be capitalized.
(See the example output.)
let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky. `;
print();
print('ans');
buffer = `Use toUpperCase()[0] and chain substring(1).toLowerCase()) . `;
print();
print('code');
buffer = `console.log(munstersDescription.toUpperCase()[0] + 
            munstersDescription.substring(1).toLowerCase());`;
print();
let munstersDescription = "the Munsters are CREEPY and Spooky.";
console.log(munstersDescription.toUpperCase()[0] + 
            munstersDescription.substring(1).toLowerCase());
qs += 1;
ans += 1;
print('end');


// Qs. 5
print('qs');
buffer = `What will the following code output?
console.log(false == '0');
console.log(false === '0'); `;
print();
print('ans');
buffer = `The first statement is true as non-strict comparision would yield
the boolean 'false' compared with boolean. The second statement is false as the
boolean false is strictly compared with the number zero, which is false.`;
print();
print('code');
buffer = `console.log(false == '0');
console.log(false === '0'); `;
print();
console.log(false == '0');
console.log(false === '0');
qs += 1;
ans += 1;
print('end');


// Qs. 6
print('qs');
buffer = `We have most of the Munster family in our ages object:
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
Add entries for Marilyn and Spot to the object:
let additionalAges = { Marilyn: 22, Spot: 237 }; `;
print();
print('ans');
buffer = `Use Object.assign method to add 'additionalAges' to 'ages'. `;
print();
print('code');
buffer = `let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 }; 
Object.assign(ages, additionalAges);`;
print();
ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
console.log(`Before: ` + JSON.stringify(ages));
let additionalAges = { Marilyn: 22, Spot: 237 }; 
Object.assign(ages, additionalAges);
console.log(`After: ` + JSON.stringify(ages));
qs += 1;
ans += 1;
print('end');


// Qs. 7
print('qs');
buffer = `Determine whether the name Dino appears in the strings below -- check each string separately):
let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino."; `;
print();
print('ans');
buffer = `Use one of the following methods: .includes() or .match() or 
.indexOf() > -1 `;
print();
print('code');
buffer = `Using .includes()
let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";
str1.includes('Dino');
str2.includes('Dino');
Using .match()
str1.match('Dino') !== null;
str2.match('Dino') !== null;
Using .indexOf() > -1
str1.indexOf('Dino') > -1 ;
str2.indexOf('Dino') > -1;`;
print();
str1 = "Few things in life are as important as house training your pet dinosaur.";
str2 = "Fred and Wilma have a pet dinosaur named Dino.";
console.log(`Using .includes()`);
console.log(str1.includes('Dino'));
console.log(str2.includes('Dino'));
console.log(`Using .match()`);
console.log(str1.match('Dino') !== null);
console.log(str2.match('Dino') !== null);
console.log(`Using .indexOf() > -1`);
console.log(str1.indexOf('Dino') > -1 );
console.log(str2.indexOf('Dino') > -1);
qs += 1;
ans += 1;
print('end');


// Qs. 8
print('qs');
buffer = `How can we add the family pet, "Dino", to the following array?
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];`;
print();
print('ans');
buffer = `Use the Array.push() method. `;
print();
print('code');
buffer = `let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push('Dino');
console.log(flintstones);`;
print();
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push('Dino');
console.log(flintstones);
qs += 1;
ans += 1;
print('end');

/*
// Qs. 9
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
*/


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