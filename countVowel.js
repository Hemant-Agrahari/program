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