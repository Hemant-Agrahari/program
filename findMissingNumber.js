//using formula for sum of first n natural numbers
function findMissingNumber(arr) {
  const n = arr.length + 1; // since one number is missing
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

// Example usage:
console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 8, 9])); // 7


// Alternative approach using for loop
function findMissingNumber(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== 1) {
      return arr[i] + 1;
    }
  }
  return null; // no missing number
}

console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 8, 9])); // 7
