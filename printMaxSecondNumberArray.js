// via in-built functions
function secondLargestNumberInArray(arr){
    let uniqueArr = [...new Set(arr)];
    uniqueArr = uniqueArr.sort((a,b)=>b-a)
    return uniqueArr[1]
}
console.log(secondLargestNumberInArray([1,2,3,4,5,3,3,2,3,4,1,2,3,4,10,12]))

// manual implementation
function printSecondLargestNumberInArrayManual(arr) {
  if (arr.length < 2) {
    return;
  }
    let first = -Infinity;
    let second = -Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > first) {
        second = first;
        first = arr[i];
      } else if (arr[i] > second && arr[i] !== first) {
        second = arr[i];
      }
    }
    if (second === -Infinity) {
      console.log("There is no second largest number");
    } else {
      console.log("Second largest number (manual):", second);
    }
}
