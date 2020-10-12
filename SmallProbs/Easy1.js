// Launch School
// JS 101 Small Problems
// Easy 1
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
buffer = `Write a function that takes one integer argument, which may be 
positive, negative, or zero. This method returns true if the number's absolute 
value is odd. You may assume that the argument is a valid integer value.`;
print();
print('ans');
buffer = `isOdd will be coded as follows.`;
print();
print('code');
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
function logArea() {
  let rlSync = require('readline-sync');
  let length = rlSync.question("What is the length?\n");
  while(isNaN(length) || length < 0) {
    length = rlSync.question("Please enter a positive number for length. \n");
  }
  let width = rlSync.question("What is the width?\n");
  while(isNaN(width) || width < 0) {
    width = rlSync.question("Please enter a positive number for width. \n");
  }
  let areaSqMeters = length * width;
  let areaSqFeet = (areaSqMeters * 10.7639) ;
  console.log(`Area in square meters is ${areaSqMeters} sq. m.
Area in square feet is ${areaSqFeet.toFixed(2)} sq. ft.`);
}

buffer = `function logArea() {
  let rlSync = require('readline-sync');
  let length = rlSync.question("What is the length?\n");
  while(isNaN(length) || length < 0) {
    length = rlSync.question("Please enter a positive number for length. \n");
  }
  let width = rlSync.question("What is the width?\n");
  while(isNaN(width) || width < 0) {
    width = rlSync.question("Please enter a positive number for width. \n");
  }
  let areaSqMeters = length * width;
  let areaSqFeet = (areaSqMeters / 10.7639) ;
  console.log(\`Area in square meters is \${areaSqMeters} sq. m.
Area in square feet is \${areaSqFeet.toFixed(2)} sq. ft.\`);
}`;
print();
print('output');
buffer = `Testing \n
....................`;
logArea();
qs += 1;
ans += 1;
print('end');
*/

// Qs. 5
QS = `qs` + qs;
print('qs');
buffer = `Create a simple tip calculator. The program should prompt for a bill 
amount and a tip rate. The program must compute the tip, and then log both the 
tip and the total amount of the bill to the console. You can ignore input 
validation and assume that the user will enter numbers.`;
print();
print('ans');
buffer = `tipCalculator will be coded as follows.`;
print();
print('code');
function tipCalculator() {
  let rlSync = require('readline-sync');
  // bill
  let bill = rlSync.question("What is the bill?\n");
  if (bill.charAt(0) === '$') {
    bill = bill.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '') ;
    bill = Number(bill.substr(1, bill.length-1), 10) ;
  }
  while(isNaN(bill) || bill < 0) {
    bill = rlSync.question("Please enter a positive number for bill. \n");
    if (bill.charAt(0) === '$') {
      bill = bill.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '') ;
      bill = Number(bill.substr(1, bill.length-1), 10) ;
      } 
  }
  bill = Number(bill, 10);
  console.log(`Accepted bill amount ${bill}.`);
  // tip percentage
  let tipPct = rlSync.question("What is the tip percentage?\n");
  if (tipPct.charAt(tipPct.length-1) === '%') {
    tipPct = tipPct.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]/g, '') ;
    tipPct = Number(tipPct.substr(0, tipPct.length-1), 10) ;
  }
  while(isNaN(tipPct) || tipPct < 0) {
    tipPct = rlSync.question("Please enter a positive number for tip %. \n");
    if (tipPct.charAt(tipPct.length-1) === '%') {
      tipPct = tipPct.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '') ;
      tipPct = Number(tipPct.substr(0, tipPct.length-1), 10) ;
      } 
  }
  console.log(`Accepted tip percentage ${tipPct}.`);
  let tip = bill * tipPct / 100; // Comment 
  console.log(`Calculated tip ${tip}.`);
  let totalBill = (bill + tip) ;
  console.log(`Calculated totalBill ${totalBill}.`);
  console.log(`OUTPUT: Bill amount used is $${(Math.round(bill * 100) / 100).toFixed(2)}
        Tip percentage used is ${tipPct}%
        Tip calculated is $${(Math.round(tip * 100) / 100).toFixed(2)}
        Total bill amount (bill + tip) calculated is $${(Math.round(totalBill * 100) / 100).toFixed(2)}`);
}

buffer = ` `;
print();
print('output');
buffer = `Testing \n
....................`;
tipCalculator();
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
