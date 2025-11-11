// Count how many vowels are in a string → ("javascript" → 3)

function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";
    for (let char of str) {
        if (vowels.includes(char)) {

            count++;
        }
    }
    return count;
}

// Example usage:
console.log(countVowels("javascript")); // 3
console.log(countVowels("Hello World")); // 3



//print each vowel found in the string along with the total count of vowels
function countVowels(str) {
  let count = 0;
  let foundVowels = [];
  const vowels = "aeiouAEIOU";

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
      foundVowels.push(char);
    }
  }

  console.log("Vowels found:", foundVowels.join(", "));
  return count;
}

// Example usage:
console.log("Total vowels:", countVowels("javascript")); // Vowels found: a, a, i → Total vowels: 3
console.log("Total vowels:", countVowels("Hello World")); // Vowels found: e, o, o → Total vowels: 3
