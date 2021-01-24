// Free Code Camp
// Nesting for Loops
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/nesting-for-loops

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var x = 0; x < arr.length; x++) {
    var subProduct = 1;
    for (var y = 0; y < arr[x].length; y++) {
      subProduct *= arr[x][y];
    }
    product *= subProduct;
  }
  // Only change code above this line
  return product;
}

console.log(multiplyAll([[1], [2], [3]])); // 6
console.log(multiplyAll([[1,2],[3,4],[5,6,7]])); // 5040
console.log(multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]])); // 54
