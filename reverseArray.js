function reverseArray(arr){
  return arr.reverse();
}
console.log(reverseArray([12,23,45]))


//usng loop

function reverseArray(arr){
    let reversedArr = [];
    for(let i=arr.length-1 ;i>=0;i--){
        reverseArray.push(arr[i])
    }
    return reversedArr;
}
console.log(reverseArray([12,23,45]))

