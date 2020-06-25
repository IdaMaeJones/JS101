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
