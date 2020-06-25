// Launch School
// JS 101 Lesson 4: Practice Problems

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
print('qs');
buffer = `What is the return value of the filter method call below? Why?
[1, 2, 3].filter(num => 'hi'); `;
print();
print('ans');
buffer = `The return is truthy as the String 'hi' is truthy. So all three
elements of the array pass the filter.`;
print();
print('code');
buffer = `console.log([1, 2, 3].filter(num => 'hi'));`;
print();
print('output');
console.log([1, 2, 3].filter(num => 'hi'))
qs += 1;
ans += 1;
print('end');


// QS 2
print('qs');
buffer = `What is the return value of map in the following code? Why?
[1, 2, 3].map(num => {
  num * num;
});`;
print();
print('ans');
buffer = `The function returns an array of three undefined elements as no return
value is specified in the code and {} are used which requires an explicit return
value.`;
print();
print('code');
buffer = `[1, 2, 3].map(num => {
  num * num;
}); `;
print();
print('output');
console.log([1, 2, 3].map(num => {
  num * num;
}));
qs += 1;
ans += 1;
print('end');


// Qs. 3
print('qs');
buffer = `What is the return value of map in the following code? Why?
[1, 2, 3].map(num => num * num);`;
print();
print('ans');
buffer = `The function returns an array of three elements which are the 
computed squares of the three original elements. As no {} used, the computed
value is returned by .map().`;
print();
print('code');
buffer = `console.log([1, 2, 3].map(num => num * num)); `;
print();
print('output');
console.log([1, 2, 3].map(num => num * num));
qs += 1;
ans += 1;
print('end');


// Qs. 4
print('qs');
buffer = `What is the return value of the following statement? Why?
['ant', 'bear', 'caterpillar'].pop().length`;
print();
print('ans');
buffer = `The return value is the length of the string 'caterpillar': 11 as the
.pop() method returns the last element of the array which is a string.`;
print();
print('code');
buffer = `console.log(['ant', 'bear', 'caterpillar'].pop().length);`;
print();
print('output');
console.log(['ant', 'bear', 'caterpillar'].pop().length);
qs += 1;
ans += 1;
print('end');


// Qs. 5
print('qs');
buffer = `What is the callback's return value in the following code? Also, what
is the return value of every in this code?
[1, 2, 3].every(num => {
  return num = num * 2;
});`;
print();
print('ans');
buffer = `The callback's return value is the boolean 'true' for each of the 
elements as the assignment of num = nu * 2 is 'true'. The return value of every
is also true as the callback is true for each of the elements of the array.`;
print();
print('code');
buffer = `console.log([1, 2, 3].every(num => {
  return num = num * 2;
}));`;
print();
print('output');
console.log([1, 2, 3].every(num => {
  return num = num * 2;
}));
qs += 1;
ans += 1;
print('end');


// Qs. 6
print('qs');
buffer = `How does Array.prototype.fill work? Is it destructive? How can we find out?
let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);`;
print();
print('ans');
buffer = `.fill() method fills the Array 'arr' with value 1 for the indexes
starting from index = 1 to index = 5. Yes it is destructive as the method is 
mutative and changes the Array. For more information about .fill() method
see information at Mozilla Developer Network reference page for .fill(): 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill`;
print();
print('code');
buffer = `let arr = [1, 2, 3, 4, 5];
arr.fill(1, 1, 5);
console.log(arr);`;
print();
print('output');
let arr = [1, 2, 3, 4, 5];
arr.fill(1, 1, 5);
console.log(arr);
qs += 1;
ans += 1;
print('end');


// Qs. 7
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
