//using in built methods
function checkNumberPalindrone(num) {
  let storeNumber = num.toString();
  let reverse = storeNumber.split("").reverse().join("");

  if (storeNumber === reverse) {
    console.log("Yes, it is a palindrome number");
  } else {
    console.log("No, it is not a palindrome number");
  }
}

checkNumberPalindrone(121);
checkNumberPalindrone(123);

//using manual implementation
function checkNumberPalindrone(num) {
  let original = num; 
  let reverse = 0;
  while (num > 0) {
    let lastDigit = num % 10;
    reverse = reverse * 10 + lastDigit;
    num = Math.floor(num / 10);
  }
  if (original === reverse) {
    console.log("Yes, it is a palindrome number");
  } else {
    console.log("No, it is not a palindrome number");
  }
}

checkNumberPalindrone(121);  // ✅ palindrome
checkNumberPalindrone(123);  // ❌ not palindrome

