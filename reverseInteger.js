function reverseInteger(num) {
  if (num < 0) return null;
  let reverse = 0;
  while (num > 0) {
    let getLastDigit = num % 10;
    reverse = reverse * 10 + getLastDigit;
    num = Math.floor(num / 10);
    console.log(reverse);
    return reverse;
  }
}

console.log("Hello, World!");
console.log(reverseInteger(12345));
