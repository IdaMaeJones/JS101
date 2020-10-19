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