var numders = [];

function pulloutArray(numbers) {
  if(Array.isArray(numbers)){
  const arr = [];
  for (i = 0; i < numbers.length; i++) {
    if (Number.isInteger(numbers[i]))
      arr.push(numbers[i]);
    if (Array.isArray(numbers[i])) {
      var promarr = [];
      promarr = numbers[i];
      for (j = 0; j < promarr.length; j++)
        if (Number.isInteger(promarr[j]))
          arr.push(promarr[j]);
        }
    }
    return arr;
  }
}
