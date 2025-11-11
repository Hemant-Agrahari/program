function checkPalindroneString(str){
    let original = str;
    let reverse = ""
    for(let i = str.length-1;i>=0;i--){
      reverse = reverse + str[i]
    }
    if(original === reverse){
        console.log("Yes,This is Palindrone")
    }else{
        console.log("No,This is not a Palindrone")
    }
    return reverse;
}
console.log(checkPalindroneString("hemant"))


function checkPalindroneStr(str) {
    const reversed = str.split("").reverse().join("");
    if (str === reversed) {
        console.log(`${str} → Yes, it's a palindrome`);
    } else {
        console.log(`${str} → No, it's not a palindrome`);
    }
}

checkPalindroneStr("hemant");
checkPalindroneStr("madam");


Original: "A man, a plan, a canal: Panama"
Reversed:  "amanaplanacanalpanama"


function isPalindrome(str) {
  // Remove all non-alphanumeric characters and convert to lowercase
  const cleaned = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

  // Compare cleaned string with its reverse
  return cleaned === cleaned.split('').reverse().join('');
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("No lemon, no melon")); // true


