// Implement a function that takes two sorted arrays and merges them into a single sorted array without using any built-in sorting functions. 
function mergeSortedArraysSimple(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

console.log(mergeSortedArraysSimple([1, 3, 5, 7], [2, 4, 6, 8]));
// Output: [1, 2, 3, 4, 5, 6, 7, 8]



function mergeSortedArraysSimpleManual(a, b) {
  const merged = [];
  while (a.length && b.length) {
    merged.push(a[0] < b[0] ? a.shift() : b.shift());
  }
  return [...merged, ...a, ...b];
}

console.log(mergeSortedArraysSimpleManual([1, 3, 5, 7], [2, 4, 6, 8]));
// Output: [1, 2, 3, 4, 5, 6, 7, 8]
