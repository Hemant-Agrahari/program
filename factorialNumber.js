function factorialNumber(num){
    let result = 1
    for(let i=1;i<=num;i++){
        result = result * i
    }
    return result
}

console.log(factorialNumber(5))


// recursive approach
function factorial(num) {
   if (num <= 1) {
    return 1;
   }
   return num * factorial(num - 1);

}

console.log(factorial(5));