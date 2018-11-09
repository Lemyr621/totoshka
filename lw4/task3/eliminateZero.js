var odd = function(number) {
  return number % 2 === 1;
}

var even = function(number) {
  return number % 2 === 0;
}

// TODO: filter for elimination 0 value
var eliminateZero = function(number) {
  return number!=0;
  // your code
}

// TODO: get every second element in sequence
var counter=1;
var everySecond = function(number) {
  return even(counter++);
  // your code
}

function filterArray(arr, filter) {
  var resultArray = [];
  for (i = 0; i < arr.length; i++) {
    if (filter(arr[i])) {
      resultArray.push(arr[i]);
      // TODO: add filtered element in resultArray
      // your code
    }
  }
  return resultArray;
}

var arr = [0, 1, 2, 3, 4, 0, 5];

console.log(filterArray(arr, odd)); // [1, 3, 5]
console.log(filterArray(arr, even)); // [2, 4]
console.log(filterArray(arr, eliminateZero)); // [1, 2, 3, 4, 5]
console.log(filterArray(arr,everySecond));
