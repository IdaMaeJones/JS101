// Launch School
// JS 101 Scrap Code: Trials and Experiments

// COMMON DISPLAY CODE
const QUESTION = 'QUESTION';
const ANSWER = 'ANSWER';
var buffer = '';
var divider = "==== ==== ==== ==== ====";
var code = '.......... CODE ..........';
var output = '.......... OUTPUT ..........';
function print(arg) {
  switch (arg) {
    case 'qs':
      console.log(`${divider}\n${QUESTION}: `);
      break;
    case 'ans':
      console.log(`${divider}\n${ANSWER}: `);
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

let arr = [{1:'foo', 2:'bar'}, 
           [{'Ace':11, 'Jack': 10, 'Joker': 'Any'}, 
            [['Blackjack', 'Poker'], 
             ['Solitaire', 'BLANK']],
            'Games'],
           '...'];
console.log(' ');
console.log('==== ==== ==== ====');
console.log(arr);


let serializedArr = JSON.stringify(arr);
console.log('==== ==== ==== ====');
console.log(`JSON.stringify(arr) is: `);
console.log(serializedArr);
console.log(' ');
console.log('==== ==== ==== ====');
let deepCopiedArr = JSON.parse(serializedArr);
console.log(`deepCopiedArr from JSON.parse(serializedArr) is: `);
console.log(deepCopiedArr);

console.log(' ');
console.log('==== ==== ==== ====');
console.log(`Changing deep copied array`);
console.log(`deepCopiedArr[1][1][1][1] = 'Rummy';`);
deepCopiedArr[1][1][1][1] = 'Rummy';
console.log(`deepCopiedArr after adding 'Rummy' is: `);
console.log(deepCopiedArr);
console.log(`deepCopiedArr[1][1][1][1] is:`);
console.log(deepCopiedArr[1][1][1][1]);

console.log(' ');
console.log('==== ==== ==== ====');
console.log(`Original array 'arr' after adding 'Rummy' is: `);
console.log(arr);
console.log(`arr[1][1][1][1] is:`);
console.log(arr[1][1][1][1]);


console.log([[1, 2], [3, [4, 5]]].map(arr => {
  return arr.map(num => num * 2);
}));










/*
// for loop transformation
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
let transformedNumbers = [];

for (let index = 0; index < numbers.length; index += 1) {
  let currentNum = numbers[index];
  let squaredNum = currentNum * currentNum;
  console.log(`... index is: ${index}`);
  transformedNumbers.push(squaredNum);
  console.log(transformedNumbers);
}
console.log(`..... calling function .....`);
console.log(transformedNumbers); // => [ 1, 4, 9, 16, 25 ]



/*
//JS101, L5, Quiz 1, #7
function evenValues(array) {
  let evens = [];
  let count = 0;
  array.forEach(value => {
    console.log(`==== count is ${count} ====`);
    console.log(`... value is ${value}`);
    count += 1;
    if (value % 2 === 0) {
      console.log(`... even value found: ${value}`);
      evens.push(value);
      console.log(`... evens is: `);
      console.log(evens);
    } else {console.log(`. odd .`);}
    array.shift();
    console.log(`after array.shift() array is:`);
    console.log(array);
  });
  console.log(`==== forEach completed ====`);
  return evens;
}
console.log(evenValues([1, 3, 4, 2, 4, 6, 5, 7, 9, 10, 12]));



/*
// JS101, L4, Quiz 1, #15
let arr1 = [1, 2, 3, 4, 5, null, 7, undefined, 9, 10];
console.log(arr1);
console.log(arr1.forEach(element => {
  if (element === 5) {
    return true;
  }
  console.log(element);
}));


// L4, Q1, #8
buffer = `JS101, Lesson 4, Quiz 1, #8`;
print();
print('qs');
buffer = `Write a function that takes one argument, a positive integer, and
returns an array of all positive integers less than that number.
E.g., lessThan(5) should return [1, 2, 3, 4].`;
print();
let UPPER_LIMIT = 5;

// OPTION A
buffer = `A: console.log(lessThanA(${UPPER_LIMIT});`;
print();
function lessThanA(upperLimit) {
  let numbers =[];
  let candidate = 1;
  while(true){
    numbers.push(candidate);
    ++candidate;
    if (candidate > upperLimit) break;
  }
  return numbers;
}

// OPTION B
console.log(lessThanA(UPPER_LIMIT));

buffer = `B: console.log(lessThanB(${UPPER_LIMIT});`;
print();
function lessThanB(upperLimit) {
  let numbers =[];
  let candidate = 1;
  while(candidate < upperLimit){
    numbers.push(candidate);
    candidate++;
  }
  return numbers;
}

console.log(lessThanB(UPPER_LIMIT));

// OPTION C
buffer = `C: console.log(lessThanC(${UPPER_LIMIT});`;
print();
function lessThanC(upperLimit) {
  let numbers =[];
  let candidate = 0;
  do {
    candidate++;
    numbers.push(candidate);
  } while (candidate < upperLimit);
  return numbers;
}

console.log(lessThanC(UPPER_LIMIT));

// OPTION D
buffer = `D: console.log(lessThanD(${UPPER_LIMIT});`;
print();
function lessThanD(upperLimit) {
  let lengths =[];
  for (let candidate = 1; candidate < upperLimit; candidate += 1) {
    lengths.push(candidate);
  }
  return lengths;
}

console.log(lessThanD(UPPER_LIMIT));


// L4, Q1, #9
buffer = `JS101, Lesson 4, Quiz 1, #8`;
print();
print('qs');
buffer = `Which built-in array method(s) can return the value of the first 
element of a 2-element array, either as a standalone value or as a value 
contained within a single-element array? E.g., if the first element had a value
of 42, both 42 and [42] would be acceptable return values.`;
print();
let arr3 = [];

arr3 = ['A', 42];
console.log(arr3);
console.log(`A: arr3.shift(): `);
console.log(arr3.shift()); 
console.log(`and arr3 is:`);
console.log(arr3);

arr3 = ['A', 42];
console.log(`B: arr3.splice(0,1): `);
console.log(arr3.splice(0,1));
console.log(`arr3 is:`);
console.log(arr3);

arr3 = ['A', 42];
console.log(`C: arr3.slice(0,1): `);
console.log(arr3.slice(0,1));
console.log(`and arr3 is:`);
console.log(arr3);

arr3 = ['A', 42];
console.log(`D: Array.prototype.concat(arr3[0]): `);
console.log(Array.prototype.concat(arr3[0]));
//console.log(arr3.concat(arr3));
console.log(`arr3 is:`);
console.log(arr3);

let arr4 = [42, '42'];
let arr5 = [42, '42'];
console.log(arr4 === arr5);

let arr6 = [];
let arr7 = [];
console.log(arr6 === arr7);

arr3 = ['A', undefined, 42];
console.log(arr3.indexOf(undefined));

console.log(Object.keys(arr3).length === arr3.length);

arr3 = [];
console.log(Object.keys(arr3).length === arr3.length);




/*
let arr1 =[1, 2, 3, 4, 5];
let result = arr1.filter(num => num > 0).pop();
result;
console.log(result);
console.log(arr1);

/*
result = [1, 2, 3, 4, 5].map(num => num[-1]);
result;
console.log(result);

/*
result = [1, 2, 3, 4, 5].forEach(num => num +1);
result;
console.log(result);
result = [1, 2, 3, 4, 5].filter(num => num +1);
console.log(result);
result;
result = [1, 2, 3, 4, 5].map(num => num +1);
result;
console.log(result);
/*
result = ['a', 'b', 'c'].forEach(function(item) {
  console.log(item);
});
result;

result = ['a', 'b', 'c'].map(function(item) {
  console.log(item);
});
result;

result = ['a', 'b', 'c'].filter(function(item) {
  console.log(item);
});
result;


/*
let cat = "Butterscotch";
console.log(cat[8]);
console.log(cat[cat.indexOf('o')]);

let dog = 'fido';
let letters = dog.split('');
letters[0] = letters[0].toUpperCase();
dog = letters.join('');
console.log(dog);

let text = "This is a string";
let arr = ['This', 'is', 'a', 'string'];
let obj = { 'This is': 'a string' };
// console.log(obj.'This is');
console.log(letters[3.14]);
// console.log(obj.keys().includes('x'));
console.log(obj['x']);
console.log(Object.keys(obj).includes('x'));
console.log(obj.x);

console.log(text.split(/ /));
console.log(arr[-1]);

let colors = ['green', 'blue', 'red'];
let result = colors.map(word => word.toUpperCase());
console.log(result);
result = colors.map(word => word.toUpperCase());
console.log(result);

result = [1, 2, 3, 4, 5].map(num => num +1);
console.log(result);
result = [1, 2, 3, 4, 5].forEach(num => num +1);
console.log(result);

result = ['a', 'b', 'c'].forEach(function(item) {
  console.log(item);
});
result;

result = ['a', 'b', 'c'].map(function(item) {
  console.log(item);
});
result;






/*
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

let newKey = 'orange';
let newValue = 'Fruit';

produce[newKey] = newValue;
console.log(Object.entries(produce));


function selectFruit(inputObject){
  let fruits = {};
  for (let key in inputObject) {
    if (inputObject[key] === 'Fruit') {
      fruits[key] = inputObject[key];
    }
  }
  return fruits;
}

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }

/*
let numbersList = [];
let LIST_MAX = 10;
for (let i = 0; i < LIST_MAX; i++){
  numbersList[i] = Math.round(Math.random()*100);
}
console.log(numbersList);
for (let index = 0; index < numbersList.length; index++){
  let currentNumber = numbersList[index];
  if ((currentNumber % 2) === 1) {console.log(currentNumber)}
}

let sentence = 'I wandered lonely as a cloud';
sentence;

/*
let numberOfPets = {
  dogs: 2,
  cats: 4,
  fish: 1
};

let pets = Object.keys(numberOfPets);
let counter = 0;

while (counter < pets.length)  {
  let currentPet = pets[counter];
  let currentPetNumber = numberOfPets[currentPet];
  console.log(`I have ${currentPetNumber} ${currentPet}!`);
  counter += 1;
}


/*
let myObject = {'first fruit':'apple or pear', 'last fruit':''};
console.log(myObject);
console.log(myObject['first fruit']);
console.log(typeof myObject);


// names.js
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
console.log(names);
let maxLength = names.length;
let upperNames = [];
let index = 0;

while (index < maxLength) {
  names[index] = names[index].toUpperCase();
  // let upperCaseName = names.pop().toUpperCase();
  // upperNames.push(upperCaseName);
  index += 1;
}
// names = upperNames.reverse();
// console.log(upperNames); // ['CHRIS', 'KEVIN', 'NAVEED', 'PETE', 'VICTOR']
console.log(names); // ['CHRIS', 'KEVIN', 'NAVEED', 'PETE', 'VICTOR']
*/
