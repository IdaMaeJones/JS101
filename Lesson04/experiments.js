// Launch School
// JS 101 Lesson 4: Collections
// Experiments
//
// COMMON DISPLAY CODE
const QUESTION = 'QUESTION';
const ANSWER = 'ANSWER';
var buffer = '';
var divider = "==== ==== ==== ==== ====";
var line = "....................";
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
      console.log(`${line}\n${ANSWER} ${ans}: `);
      break;
    case 'code':
      console.log(`${code}`);
      break;
    case 'divider':
      console.log(`${divider}`);
      break;
    case 'end':
      console.log(` `);
      break;
    case 'line':
      console.log(`${line}`);
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
print('divider');
print('code');
buffer = `let sample = 'My sample string.';
console.log(\`'sample' string is: \${sample}\`);
let tempString = sample.concat(' I have made a change.');
console.log(\`concat operation completed.\`);
console.log(\`'sample' string still is: \${sample}\`);
console.log(\`'tempString' string is: \${tempString}\`);
let num1 = 5;
let num2 = 10;
let num3 = 100;
let text1 = sample.charAt(num1);
let text2 = sample.charAt(num2);
let text3 = sample.charAt(num3);
let text4 = sample.charAt(num1, num3, num2);
console.log(\`sample.charAt(\${num1}) is: \${text1}\`);
console.log(\`sample.charAt(\${num2}) is: \${text2}\`);
console.log(\`sample.charAt(\${num3}) is: \${text3}\`);
console.log('String.charAt() does not accept multiple arguments.');
console.log(\`sample.charAt(\${num1}, \${num3}, \${num2}) is: \${text4}\`);`;
print();
print('output');
let sample = 'My sample string.';
console.log(`'sample' string is: ${sample}`);
let tempString = sample.concat(' I have made a change.');
console.log(`concat operation completed.`);
console.log(`'sample' string still is: ${sample}`);
console.log(`'tempString' string is: ${tempString}`);
let num1 = 5;
let num2 = 10;
let num3 = 100;
let text1 = sample.charAt(num1);
let text2 = sample.charAt(num2);
let text3 = sample.charAt(num3);
let text4 = sample.charAt(num1, num3, num2);
console.log(`sample.charAt(${num1}) is: ${text1}`);
console.log(`sample.charAt(${num2}) is: ${text2}`);
console.log(`sample.charAt(${num3}) is: ${text3}`);
console.log('String.charAt() does not accept multiple arguments.');
console.log(`sample.charAt(${num1}, ${num3}, ${num2}) is: ${text4}`);
buffer = '';
print();
// FOR-IN LOOPS
print('divider');
buffer = `Exploring FOR-IN loops.`;
print();
print('code');
buffer = `let numberOfPets = {
  dogs: 2,
  cats: 4,
  fish: 1
};

for (let currentPet in numberOfPets) {
  let currentPetNumber = numberOfPets[currentPet];
  console.log(\`I have \${currentPetNumber} \${currentPet}\`);}`;
print();
print('output');
let numberOfPets = {
  dogs: 2,
  cats: 4,
  fish: 1
};

for (let currentPet in numberOfPets) {
  let currentPetNumber = numberOfPets[currentPet];
  console.log(`I have ${currentPetNumber} ${currentPet}!`);
}
print('code');
buffer = `var object = {
a: 1,
b: 2,
c: 3,
d: 4
};
for (var key in object) {
     console.log('current key:', key);
     console.log('current value:', object[key]);
     //gives context for when each iteration of loop ends
     console.log('==============');}`;
print();
print('output');
var object = {
a: 1,
b: 2,
c: 3,
d: 4
};

for (var key in object) {
     console.log('current key:', key);
     console.log('current value:', object[key]);
     //gives context for when each iteration of loop ends
     console.log('==============');
}
buffer = ``;
print();
print('divider');
print('code');
buffer = `We can also do this with variables:
var iceCream = {
flavor: 'Strawberry Cheesecake',
supportingCast: 'Waffle Cone',
price: 2.5,
iScream: true
};

for (var namedOddlyToMakeAPoint in iceCream) {
     console.log('current key:', namedOddlyToMakeAPoint);
     console.log('current value:', iceCream[namedOddlyToMakeAPoint]);
}`;
print();
print('output');
var iceCream = {
flavor: 'Strawberry Cheesecake',
supportingCast: 'Waffle Cone',
price: 2.5,
iScream: true
};

for (var namedOddlyToMakeAPoint in iceCream) {
     console.log('current key:', namedOddlyToMakeAPoint);
     console.log('current value:', iceCream[namedOddlyToMakeAPoint]);
}


/* TEMPLATE
/*
// Qs. 
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
