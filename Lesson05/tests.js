/*
var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

let itemsByValue = [];
for (let i = 0; i < items.length; i++) {
  itemsByValue.push(items[i]) ;
}

// sort by value
itemsByValue.sort(function (a, b) {
  return a.value - b.value;
});
console.log(itemsByValue);
console.log(items);


// sort by name
let itemsByName = [] ;
for (var i = 0; i < items.length; i++ ) {
  itemsByName.push(items[i]) ;
}

itemsByName.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
console.log(itemsByName);
console.log(items);
*/

/*
let words = ['go', 'ahead', 'and', 'jump'];
console.log(`Original array of words:`);
console.log(words) ;
console.log(`Ascending sort by word length:`);
console.log(words.slice().sort( (a, b) => a.length - b.length )) ;

let numArray = [12, -10, 680, 2356, 5, 1];
console.log(`Original array:`);
console.log(numArray) ;
// numerical sorting ascending - compact code
console.log(`Ascending sort array:`);
console.log(numArray.slice().sort( (a, b) => a - b )) ;

// numerical sorting descending - compact code
console.log(`Original array:`);
console.log(numArray) ;
console.log(`Descending sort array:`);
console.log(numArray.slice().sort( (a, b) => b - a )) ;


// Array of scores of 4 players
let scores = [ [ 1, 4, 2 ], [ 3, 6, 4 ], [ 6, 8, 9 ], [ 0, 3, 2 ] ];

// sorting array of scores by value of total score of each player
console.log(`Scores:`);
console.log(scores);

let newScores = scores.slice();

newScores.sort( (a, b) => {
  let aTotal = a.reduce((acc, cur) => acc + cur);
  let bTotal = b.reduce((acc, cur) => acc + cur);
  return aTotal - bTotal;
}
);

console.log(`newScores - Scores sorted by total score of each player:`);
console.log(newScores);


// Shallow and Deep Copy Experiments
let arr = [['a'], ['b'], ['c'] ];
let copyArr = [...arr];
console.log(`Array arr is:`);
console.log(arr);
console.log(`Array copyArr, which is a copy of Array arr, is:`);
console.log(copyArr);
console.log(`Modifiying copyArr by copyArr[1] = ['d']:`);
copyArr[1] = ['d'];
console.log(copyArr);
console.log(`Original Array arr is same as before:`);
console.log(arr);
console.log(`Modifiying copyArr by copyArr[0].push(['d']);`);
copyArr[0].push(['d']);
console.log(copyArr);
console.log(`Original Array arr is now:`);
console.log(arr);
*/

/*
let mixArray =[[[1], [2], [3], [4]], [['a'], ['b'], ['c']]] ;
let retValue ;
retValue = mixArray.map(element1 => {
  return element1.map(element2 => {
    return element2.filter(element3 => {
      return element3.length > 0;
    });
  });
});
console.log(retValue);
// => [ undefined, undefined ]

// let array3 = [['a'], ['b'], ['c']];
let array3 = ['a'];
console.log(`${array3.forEach(element => {return element.length > 0;})}`);
*/

let obj1 = [{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
  return Object.keys(object).every(key => object[key][0] === key);
});

console.log(obj1);
// => [ { c: 'cat', d: 'dog' } ]

let obj2 = [{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
  return Object.keys(object).some(key => object[key][0] === key);
});
console.log(obj2);

// => [ {a: 'ant', b: 'elephan'}, { c: 'cat', d: 'dog' } ]