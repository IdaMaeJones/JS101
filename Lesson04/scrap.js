



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
