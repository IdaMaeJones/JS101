// let i = 1;
// console.log(i);
// let i = 20;
// console.log(i);

// var j = 20;
// console.log(j);
// var j = 30;
// console.log(j);

// const PI_VALUES = [3.14, 3.145, 3.1459, 3.14592];
// console.log(PI_VALUES);
// PI_VALUES.push('3.145926'); // the array declared as const is mutable
// console.log(PI_VALUES);
// PI_VALUES = [3.14, 3.145, 3.1459, 3.14592]; // throws error
// // TypeError: Assignment to constant variable.

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
Object.freeze(MATH_CONSTANTS);
  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
let myPI = freezeObj();
freezeObj();
// console.log(myPI);
// console.log(`${freezeObj}`);
// console.log(freezeObj);
// const PI = freezeObj();


let PI_DIGITS = [3.14, 3.145, 3.1459];
console.log(PI_DIGITS);
PI_DIGITS.push(3.14592);
console.log(PI_DIGITS);
Object.freeze(PI_DIGITS);
PI_DIGITS.push(3.145926); // throws error
// TypeError: Cannot add property 4, object is not extensible

