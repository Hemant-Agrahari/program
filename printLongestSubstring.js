const printPalindroneSubstring = (str) => {
  let longest = "";

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      const substring = str.slice(i, j + 1);
      const reverse = substring.split("").reverse().join("");

      if (substring === reverse && substring.length > longest.length) {
        longest = substring;
      }
    }
  }
  return longest;
}

console.log(printPalindroneSubstring("baeebababad"));





/**
 * ✨ 1. What is slice()?

slice(start, end) returns part of a string or an array.

Key rules:
1.Does not modify the original
2.End index is exclusive
3.Works for strings & arrays
4.Supports negative indexes

2. slice() with STRING
syntax:string.slice(start, end)
Example 1 — Basic Slice
let name = "Hemant";

name.slice(0, 2);    // "He"
H  e  m  a  n  t
0  1  2  3  4  5

name.slice(3);   // "ant"

"JavaScript".slice(-6, -3);  
// "Scr"


J  a  v  a  S  c  r  i  p  t
0  1  2  3  4  5  6  7  8  9
-10 -9 -8 -7 -6 -5 -4 -3 -2 -1


3. slice() with ARRAY

let nums = [10, 20, 30, 40, 50];

nums.slice(0, 3)   // [10, 20, 30]
nums.slice(2)      // [30, 40, 50]

 */
