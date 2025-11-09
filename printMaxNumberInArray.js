function printMaxNumberInArray(arr) {
  if (arr.length === 0) return null;
  let maxValue = arr[0];
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  return maxValue;
}

console.log(printMaxNumberInArray([1, 2, 3, 4, 5, 6]));

