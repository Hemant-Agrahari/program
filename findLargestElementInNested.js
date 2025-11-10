function findLargestInNestedArray(nestedArr) {
  let largest = -Infinity; // start with smallest possible number

  for (let i = 0; i < nestedArr.length; i++) {
    for (let j = 0; j < nestedArr[i].length; j++) {
      if (nestedArr[i][j] > largest) {
        largest = nestedArr[i][j];
      }
    }
  }

  return largest;
}

console.log(findLargestInNestedArray([[1, 2, 3], [4, 5], [9, 8, 7]]));
console.log(findLargestInNestedArray([[-10, -20], [-3, -4], [-1, -5]]));
