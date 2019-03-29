var odd = function(number) {
  return number % 2 === 1;
}

var even = function(number) {
  if(number!=0){  return number % 2 === 0;}
}

var eliminateZero = function(number) {
  return number!=0;
}

var everSecondTimer=0;

var everySecond = function(number) {
  return even(++everSecondTimer);
}

function filterArray(arr, filter) {
  var resultArray = [];
  for (i = 0; i < arr.length; i++) {
    if (filter(arr[i])) {
      resultArray.push(arr[i]);
    }
  }
  return resultArray;
}

var arr = [0, 1, 2, 3, 4, 0, 5];

console.log(filterArray(arr, odd)); // [1, 3, 5]
console.log(filterArray(arr, even)); // [2, 4]
console.log(filterArray(arr, eliminateZero)); // [1, 2, 3, 4, 5]
console.log(filterArray(arr,everySecond));
