// Launch School
// JS 101 Lesson 3: Practice Problems
// Medium1
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
buffer = `Let's do some "ASCII Art": a stone-age form of nerd artwork from back
in the days before computers had video screens. Write a program that creates the
following output 10 times, with each line indented 1 space to the right of the 
line above it:
The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock!`;
print();
print('ans');
buffer = ` `;
print();
print('code');
buffer = `let message = "The Flintstones Rock!";
let padding = '';
for (let count = 0; count < 10; count++) {
  padding = padding + ' ';
  console.log(padding + message);
};
//Another alternative
for (let count = 0; count < 10; count++) {
  console.log(" ".repeat(count+1) + message);
};`;
print();
print('output');
let message = "The Flintstones Rock!";
let padding = '';
let repetitions = 10;
for (let count = 0; count < repetitions; count++) {
  padding = padding + ' ';
  console.log(padding + message);
}
padding = ' ';
for (let count = 0; count < repetitions; count++) {
  console.log(padding.repeat(count+1) + message);
}
qs += 1;
ans += 1;
print('end');


// Qs. 2
QS = `qs` + qs;
print('qs');
buffer = `Starting with the string:
let munstersDescription = "The Munsters are creepy and spooky.";
Return a new string that swaps the case of all of the letters:
\`tHE mUNSTERS ARE CREEPY AND SPOOKY.\``;
print();
print('ans');
buffer = ` `;
print();
print('code');
buffer = ` `;
print();
print('output');
let munstersDescription = "The Munsters are creepy and spooky.";
function switchCase(str) {
  let splitCharacters = str.split('');
  let modifiedString = '';
  for (let count = 0; count < splitCharacters.length; count++) {
    if (str.charAt(count).toUpperCase() == str.charAt(count)) {
      modifiedString = modifiedString + str.charAt(count).toLowerCase();
    } else {
      modifiedString = modifiedString + str.charAt(count).toUpperCase();
    }
  }
  console.log(`Original string: ${str}`);
  return modifiedString;
}
console.log(switchCase(munstersDescription));
qs += 1;
ans += 1;
print('end');


// Qs. 3
QS = `qs` + qs;
print('qs');
buffer = `Alan wrote the following function, which was intended to return all of
the factors of 'number':
function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}
Alyssa noticed that this code would fail when the input is 0 or a negative 
number, and asked Alan to change the loop. How can he make this work without 
using a do/while loop? Note that we're not looking to find the factors for 0 or
negative numbers, but we want to handle it gracefully instead of raising an 
exception or going into an infinite loop.
Bonus: What is the purpose of number % divisor === 0 in that code?`;
print();
print('ans');
buffer = `Use a while-loop instead of do-while. The do-while loop ensures that 
the code in the loop is executed at least one time before the loop condition is
checked. The purpose of the number % divisor === 0 is to see if the divisor is a
factor of the number as there is no remainder resulting from the division by a
factor.`;
print();
//print('code');
//buffer = ` `;
//print();
//print('output');
qs += 1;
ans += 1;
print('end');


// Qs. 4
QS = `qs` + qs;
print('qs');
buffer = ` `;
print();
print('ans');
buffer = `Yes, there is a difference. The first implementation mutates the input
but the second implementation does not and hence it is not a valid solution for
the problem of implementing a rolling buffer. The new element is not added to 
the buffer in the second implementation.`
print();
//print('code');
//buffer = ` `;
//print();
print('output');
buffer ='';
function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}
function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}
let myBuffer = [];
console.log(`addToRollingBuffer1 ...`);
myBuffer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(`Buffer of max size 10: ${myBuffer} to which element 'b' is added.`);
addToRollingBuffer1(myBuffer, 10, 'b');
console.log(myBuffer);
console.log(`addToRollingBuffer2 ...`);
myBuffer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(`Buffer of max size 10: ${myBuffer} to which element 'b' is added.`);
addToRollingBuffer2(myBuffer, 10, 'b');
console.log(myBuffer);
qs += 1;
ans += 1;
print('end');


// Qs. 5
QS = `qs` + qs;
print('qs');
buffer = `What will the following two lines of code output?
console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);`;
print();
print('ans');
buffer = `The first line will output 0.89999... and the second the boolean false
due to the use of floating point arithmetic that can yield unexpected results.`;
print();
//print('code');
//buffer = ` `;
//print();
print('output');
console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);
qs += 1;
ans += 1;
print('end');


/*
// Qs. 6
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


/*
// Qs. 7
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


/*
// Qs. 8
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


/*
// Qs. 9
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


/*
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