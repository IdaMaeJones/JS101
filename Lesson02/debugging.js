const readline = require('readline-sync');
// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

function prompt (message) {
    console.log(`=> ${message}`);
}

function invalidInput(inputArg) {
    return (inputArg.trimStart() === '');
}

console.log('Welcome to Is your new car a Pony?');

function car(newCar) {
    let make = getMake(newCar);
    let model = getModel(newCar);
    return [make, model];
}

function getMake(newCar) {
    return newCar.split(' ')[0];
}

function getModel(newCar) {
    return newCar.split(' ')[2];
}

prompt('What is the make of your car?');
let carMake = readline.question();
while (invalidInput(carMake)) {
    prompt(`You entered ${carMake}, which is not a valid make for a car.\n` +
           `Please enter a valid make.`);
    carMake = readline.question();
}

prompt('What is the model of your car?');
let carModel = readline.question();
while (invalidInput(carModel)) {
    prompt(`You entered ${carMake}, which is not a valid model for a car.\n` +
           `Please enter a valid model.`);
    carModel = readline.question();
}

let [make, model] = car(carMake + ' ' + carModel);
// console.log(make);
console.log(model);
// console.log((make === 'Ford') && (model[0] === 'M'));
console.log(model[0] === 'M'); // => TypeError: Cannot read property '0' of undefined
