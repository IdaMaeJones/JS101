// Launch School
// Handy Scripts
// Loop over Object
// JS101, Lesson 4, JavaScript Collections, Selection and Transformation
// https://launchschool.com/lessons/60e10aa5/assignments/159da1eb


let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable',
  chicken: 'Meat',
  lamb: 'Meat',
  salmon: 'Fish',
  cod: 'Fish'
};

console.log(selectFruit(produce, "Fruit")) ; // => { apple: 'Fruit', pear: 'Fruit' }
console.log(selectFruit(produce, "Vegetable")) ; // => { carrot: 'Vegetable', broccoli: 'Vegetable' }
console.log(selectFruit(produce, "Meat")) ; // => { chicken: 'Meat', lamb: 'Meat' }
console.log(selectFruit(produce, "Fish")) ; // => { salmon: 'Fish', cod: 'Fish' }

function selectFruit(produceList, produceType) {
  // PEDAC
  // Problem: 
  //   iterate over supplied object and compare value of keys with "Fruit"
  //   select if "Fruit"
  // Example, Test and Edge Cases:
  //   produce = {apple: 'Fruit', carrot: 'Vegetable', pear: 'Fruit',
  //              broccoli: 'Vegetable'};
  // Data Structures:
  //   Array - produceKeys ... of object keys using Object.keys(myObject)
  //   String - currentKey
  //   String - currentValue
  // Code:
  //   
  let produceKeys = Object.keys(produceList) ;
  let fruitsList = {} ;

  for (var groceryItem in produceList) {
    let currentKey = groceryItem ;
    let currentValue = produceList[groceryItem] ;
    if (produceList.hasOwnProperty(groceryItem)) {
      if (produceList[groceryItem] === produceType) fruitsList[currentKey] = currentValue;
    }
  }
  console.log(produceKeys) ;
  return fruitsList ;
}
