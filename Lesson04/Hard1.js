// Launch School
// JS 101 Lesson 4: Collections
// 
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
buffer = `Will the following functions return the same results?

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());`;
print();
print('ans');
buffer = `No, they will not return the same result. The { that is on the line
next to return in second() causes problems. JavaScript inserts one if there is
not a semi-colon where one is expected (as semicolons are optional at end of
line) and this causes the function second() to return undefined.`;
print();
// print('code');
// buffer = ` `;
// print();
print('output');
function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());
qs += 1;
ans += 1;
print('end');


// Qs. 2
QS = `qs` + qs;
print('qs');
buffer = `What does the last line in the following code output?
let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);
console.log(numArray); //  => "[1, 2]"
console.log(object); `;
print();
print('ans');
buffer = `It returns first: [1, 2] as the array in 'object' has been mutated
by the numArray.push(2) statement. numArray is a reference to the array in 
'object'.`;
print();
// print('code');
// buffer = ` `;
// print();
print('output');
let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);
console.log(numArray); //  => "[1, 2]"
console.log(object);
qs += 1;
ans += 1;
print('end');


// Qs. 3
QS = `qs` + qs;
print('qs');
buffer = `Given the following similar sets of code, what will each code snippet print?

A)

function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(\`one is: \${one}\`);
console.log(\`two is: \${two}\`);
console.log(\`three is: \${three}\`);
B)

function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(\`one is: \${one}\`);
console.log(\`two is: \${two}\`);
console.log(\`three is: \${three}\`);
C)

function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(\`one is: \${one}\`);
console.log(\`two is: \${two}\`);
console.log(\`three is: \${three}\`);`;
print();
print('ans');
buffer = `A: Scope of changes is limited to within function. Shadow variables 
ensure that originals remain unmutated: one, two, three
B: all changes made to copies. orginals remain unmutated:
["one"], ["two"], ["three"]
C: splice(0, 1, "..."): remove element at index 0, remove 1 element, replace
with "...": two, three, one`;
print();
// print('code');
// buffer = ` `;
// print();
print('output');

// A
function messWithVars1(one, two, three) {
  one = two
  console.log(`in A one is: ${one}`);
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

console.log('A');
messWithVars1(one, two, three);
console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

// B
function messWithVars2(one, two, three) {
  one = ["two"];
  console.log(`in B one is: ${one}`);
  two = ["three"];
  three = ["one"];
}

one = ["one"];
two = ["two"];
three = ["three"];
console.log('B');
messWithVars2(one, two, three);
console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

// C
function messWithVars3(one, two, three) {
  one.splice(0, 1, "two");
  console.log(`in C one is: ${one}`);
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

one = ["one"];
two = ["two"];
three = ["three"];
console.log('C');
messWithVars3(one, two, three);
console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
qs += 1;
ans += 1;
print('end');


// Qs. 4
QS = `qs` + qs;
print('qs');
buffer = `Ben was tasked to write a simple javascript function to determine 
whether an input string is an IP address using 4 dot-separated numbers, 
e.g., 10.4.5.11. He is not familiar with regular expressions.

Alyssa supplied Ben with a function named isAnIpNumber. It determines whether a 
string is a numeric string between 0 and 255 as required for IP numbers and 
asked Ben to use it. Here's Alyssa's isAnIpNumber function:

function isAnIpNumber(str) {
  if (!/^\d+$/.test(str)) return false;

  let number = Number(str);
  return number >= 0 && number <= 255;
}

Here's the code that Ben wrote:

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      break;
    }
  }
  return true;
}
Alyssa reviewed Ben's code and said, "It's a good start, but you missed a few 
things. You're not returning a false condition, and you're not handling the case
when the input string has more or less than 4 components, e.g., 4.5.5 or 
1.2.3.4.5: both those values should be invalid." Help Ben fix his code.`;
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