// Launch School
// JS101, Lesson 4, JavaScript Collections, Practice Problems
// https://launchschool.com/lessons/60e10aa5/assignments/d4f91ca2

let someNumbers = [45, -23, 85];
let a1 = someNumbers.filter(num => 'hi');
someNumbers.push(-12);
console.log(`let someNumbers = [45, -23, 85];
let a1 = someNumbers.filter(num => 'hi');
someNumbers.push(-12);`)
console.log(`someNumbers is [ ${someNumbers} ] with new element ${someNumbers[someNumbers.length-1]}
a1 is [ ${a1} ]`);
console.log(`The return value of the filter method call below will be the 
elements of the array for which filter returns true. The return value in this
case is 'hi', which is true for each of the three elements in the collection
(i.e., array). For each element for which the condition is true, filter
returns the element. The return values are in a new array.`);
