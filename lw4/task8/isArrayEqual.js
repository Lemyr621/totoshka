function isArrayEqual(array1, array2) {
  if ((!Array.isArray(array1) || !Array.isArray(array2)) || (array1.length != array2.length)) {
    return false;
  }

  for (var i = 0; i < array1.length; i++) {
    if((Array.isArray(array1[i]) || Array.isArray(array2[i])) || (array1[i] !== array2[i])) {
      if (!isArrayEqual(array1[i], array2[i])) {
        return false;
      }
    }
  }

  return true;
}


  console.log(isArrayEqual([], null)); // false or exception
  console.log(isArrayEqual([], [])); // true
  console.log(isArrayEqual([], ['test'])); // false
  console.log(isArrayEqual([1, 2, 3], [1, 2, 3])); // true
  console.log(isArrayEqual([1, [1, 2], 3], [1, [1, 2], 3])); // true
  console.log(isArrayEqual([1, null, 3], [1, undefined, 3])); // false
