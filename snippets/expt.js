const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json')

// SETS
/*
  INSTANTIATION:        let mySet = new Set();
  Set.prototype.add()       mySet.add(myVal);
  Set.prototype.clear()     mySet.clear();
  Set.prototype.delete()    mySet.delete(myVal);
  Set.prototype.entries()   mySet.entries();
  Set.prototype.forEach()   mySet.forEach(callback[, thisArg])
  Set.prototype.has()       mySet.has(myVal);
  Set.prototype.values()    mySet.values();
*/


let mySet = new Set();

for (var i = 3; i > 0; i--) {
    mySet.add(i);
    mySet.add('a' + i);
}

console.log(`Use regular console.log(mySet) to view:`);
console.log(mySet);
console.log(`... as ...`);
console.log(`... use of \$\{mySet\} does not print values:`);
console.log(`mySet is a Set type standard built-in object: ${mySet}`);

