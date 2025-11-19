function printMaxNumberInArray(arr) {
  if (arr.length === 0) return null;
  let maxValue = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  return maxValue;
}

console.log(printMaxNumberInArray([1, 2, 3, 4, 5, 6]));

function printMinMax(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return { min, max };
}

console.log(printMinMax([1, 12, 3, 4, 5]));


// Using Set (Simple & Best for Interviews)
function removeDuplicatesUsingSet(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicatesUsingSet([0,0,1,1,1,2,2,3,3,4]));
