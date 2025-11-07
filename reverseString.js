//via in build functions
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("Hello, World!"));

//manual implementation
function reverseStringManual(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed;
}

console.log(reverseStringManual("Hello, World Manual!"));
