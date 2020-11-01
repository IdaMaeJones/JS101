// Launch School
// JS101, Lesson 5, Advanced JavaScript Collections
// Practice Problems
// https://launchschool.com/lessons/778acada/assignments/8c5df017

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
buffer = `How would you order the following array of number strings by 
descending numeric value (largest number value to smallest)?
let arr = ['10', '11', '9', '7', '8'];`;
print();
print('ans');
buffer = `.`;
print();
print('code');
buffer = `.`;
print();
let arr = ['10', '11', '9', '7', '8'] ;
console.log(`Original Array arr:`) ;
console.log(arr) ;
arr.sort( (a, b) => Number(b) - Number(a)) ;
console.log(`Sorted descending Array arr:`) ;
console.log(arr) ;

arr = ['10', '11', '9', '7', '8'] ;
console.log(`Reset Original Array arr:`) ;
arr.sort( (a, b) => Number(a) - Number(b)) ;
console.log(`Sorted ascending Array arr:`) ;
console.log(arr) ;

buffer = ` `;
print();
print('output');

qs += 1;
ans += 1;
print('end');


// Qs. 2
QS = `qs` + qs;
print('qs');
buffer = `How would you order the following array of objects based on the year 
of publication of each book, from the earliest to the latest?
let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];`;
print();
print('ans');
buffer = ``;
print();
print('code');
buffer = `books.sort((a, b) => {
  return Number(a.published) - Number(b.published);
});

console.log(books) ;`;
print();
let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

books.sort((a, b) => {
  return Number(a.published) - Number(b.published);
});

buffer = ` `;
print();
print('output');
console.log(books) ;

qs += 1;
ans += 1;
print('end');


// Qs. 3
QS = `qs` + qs;
print('qs');
buffer = `For each of these collection objects, demonstrate how you would access
the letter g.
let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}`;
print();
print('ans');
buffer = ``;
print();
print('code');
buffer = `let ans1 = arr1[2][1][3] ;
let ans2 = arr2[1]['third'][0] ;
let ans3 = arr3[2]['third'][0][0] ;
let ans4 = obj1.b[1] ;
let ans5 = Object.keys(obj2['third'])[0] ;
console.log(ans1) ;
console.log(ans2) ;
console.log(ans3) ;
console.log(ans4) ;
console.log(ans5) ;
`;
print();
let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }} ;

let ans1 = arr1[2][1][3] ;
let ans2 = arr2[1]['third'][0] ;
let ans3 = arr3[2]['third'][0][0] ;
let ans4 = obj1.b[1] ;
let ans5 = Object.keys(obj2['third'])[0] ;
buffer = ` `;
print();
print('output');
console.log(ans1) ;
console.log(ans2) ;
console.log(ans3) ;
console.log(ans4) ;
console.log(ans5) ;
qs += 1;
ans += 1;
print('end');


// Qs. 4
QS = `qs` + qs;
print('qs');
buffer = `For each of these collection objects, demonstrate how you would change
the value 3 to 4?
let arr10 = [1, [2, 3], 4];
let arr20 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
let obj10 = { first: [1, 2, [3]] };
let obj20 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };`;
print();
print('ans');
buffer = ``;
print();
print('code');
buffer = `arr10[1][1] = 4;
arr20[2] = 4;
obj10['first'][2][0] = 4;
obj20['a']['a'][2] = 4;
`;
print();
let arr10 = [1, [2, 3], 4];
let arr20 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
let obj10 = { first: [1, 2, [3]] };
let obj20 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };

arr10[1][1] = 4;
arr20[2] = 4;
obj10['first'][2][0] = 4;
obj20['a']['a'][2] = 4;

buffer = ` `;
print();
print('output');
console.log(arr10) ;
console.log(arr20) ;
console.log(obj10) ;
console.log(obj20) ;
qs += 1;
ans += 1;
print('end');


// Qs. 5
QS = `qs` + qs;
print('qs');
buffer = `Consider the following nested object:
let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};
Compute and display the total age of the male members of the family.`;
print();
print('ans');
buffer = ``;
print();
print('code');
buffer = `let ageTotal = 0;
Object.values(munsters).forEach(member => {
  if (member.gender === 'male') {
    ageTotal += member.age;
  }
});
console.log(ageTotal);`;
print();
let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};
let ageTotal = 0;
Object.values(munsters).forEach(member => {
  if (member.gender === 'male') {
    ageTotal += member.age;
  }
});

buffer = ` `;
print();
print('output');
console.log(ageTotal);
qs += 1;
ans += 1;
print('end');


// Qs. 6
QS = `qs` + qs;
print('qs');
buffer = `One of the most frequently used real-world string operations is that 
of "string substitution," where we take a hard-coded string and modify it with 
various parameters from our program.

Given this previously seen family object, print the name, age, and gender of 
each family member:
let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};
Compute and display the total age of the male members of the family.
Each output line should follow this pattern:
(Name) is a (age)-year-old (male or female).`;
print();
print('ans');
buffer = ``;
print();
print('code');
buffer = `
let memberName = '';
let memberAge = 0;
let memberGender = '';

Object.entries(munsters).forEach(member => {
  memberName = member[0];
  memberAge = member[1]['age'];
  memberGender = member[1]['gender'];
  console.log(\`\${memberName} is a \${memberAge}-year-old \${memberGender}.\`);
}) ;
`;
print();

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let memberName = '';
let memberAge = 0;
let memberGender = '';

buffer = ` `;
print();
print('output');
Object.entries(munsters).forEach(member => {
  memberName = member[0];
  memberAge = member[1]['age'];
  memberGender = member[1]['gender'];
  console.log(`${memberName} is a ${memberAge}-year-old ${memberGender}.`);
}) ;
qs += 1;
ans += 1;
print('end');


// Qs. 7
QS = `qs` + qs;
print('qs');
buffer = `Given the following code, what will the final values of a and b be? 
Try to answer without running the code.
let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2;
arr[1][0] -= a;`;
print();
print('ans');
buffer = `I would expect a to be unchanged and b to be [3, 8].`;
print();
print('code');
buffer = ``;
print();

let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2;
arr[1][0] -= a;

buffer = ` `;
print();
print('output');
console.log(`a:`);
console.log(a);
console.log(`b:`);
console.log(b);
console.log(`arr:`);
console.log(arr);
qs += 1;
ans += 1;
print('end');


// Qs. 8
QS = `qs` + qs;
print('qs');
buffer = `Using the forEach method, write some code to output all vowels from
the strings in the arrays. Don't use a for or while loop.
let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};`;
print();
print('ans');
buffer = ``;
print();
print('code');
buffer = `Object.values(obj).forEach(arr => {
  arr.forEach(str => {
    str.split('').forEach(char => {
      if (vowels.includes(char)) {
        console.log(char);
      }
    });
  });
});`;
print();
let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let vowels = 'aeiou';

print('output');
Object.values(obj).forEach(arr => {
  arr.forEach(str => {
    str.split('').forEach(char => {
      if (vowels.includes(char)) {
        console.log(char);
      }
    });
  });
});
qs += 1;
ans += 1;
print('end');


// Qs. 9
QS = `qs` + qs;
print('qs');
buffer = `Given the following data structure, return a new array with the same 
structure, but with the subarrays ordered -- alphabetically or numerically as 
appropriate -- in ascending order.
let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];
`;
print();
print('ans');
buffer = ` `;
print();
print('code');
buffer = ` `;
print();
let arr100 = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let arrCopy1 = arr100.map(element => {
  return element.slice().sort( (a, b) => {
    if (typeof a === 'number') {
      return a - b ;
    } else {
      if (a > b) {
        return 1 ;
      } else {
        if (a < b) {
          return -1 ;
        } else {
          return 0 ;
        }
      }
    }
  });
}) ;

print('output');
console.log(`Original array arr100:`);
console.log(arr100);
console.log(`Sorted array copy:`);
console.log(arrCopy1);
qs += 1;
ans += 1;
print('end');


// Qs. 10
QS = `qs` + qs;
print('qs');
buffer = `Given the following data structure, return a new array with the same 
structure, but with the subarrays ordered -- alphabetically or numerically as 
appropriate -- in ascending order.
let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];
`;
print();
print('ans');
buffer = ` `;
print();
print('code');
buffer = ` `;
print();
let arr200 = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let arrCopy2 = arr200.map(element => {
  return element.slice().sort( (a, b) => {
    if (typeof a === 'number') {
      return b - a ;
    } else {
      if (a < b) {
        return 1 ;
      } else {
        if (a > b) {
          return -1 ;
        } else {
          return 0 ;
        }
      }
    }
  });
}) ;

print('output');
console.log(`Original array arr:`);
console.log(arr200);
console.log(`Sorted array copy:`);
console.log(arrCopy2);
qs += 1;
ans += 1;
print('end');
*/

// Qs. 11
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
