function countFrequency(arr) {
  const freq = {};
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (freq[value]) {
      freq[value]++;
    } else {
      freq[value] = 1;
    }
  }
  return freq;
}

console.log(countFrequency([10, 20, 10, 30, 20, 10]));
// Output:{ 10: 3, 20: 2, 30: 1 }

