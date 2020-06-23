




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