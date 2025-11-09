function printEvenNumber(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
console.log(printEvenNumber(20));

function printOddNumber(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
  return num;
}
console.log(printOddNumber(20));

function printNumberBetweenGivenNumber(num) {
    let numb = []
  for (let i = 1; i <= num; i++) {
    console.log(numb.push(i));
  }
  return numb
}

console.log(printNumberBetweenGivenNumber(50));


function printSquare(num){
for(let i = 0;i<=num;i++){
    console.log(i*i)
}
}

console.log(printSquare(20))