// Count how many times each character appears in a string
function countCharacterOccurrences(str) {
    const charCount = {};
    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    return charCount;
}

// Example usage:
const inputString = "hello world";
const result = countCharacterOccurrences(inputString);
console.log(result); // { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }


function countVowelsAndConsonants(str) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    let consonantCount = 0;

    for (let char of str) {
        if (/[a-zA-Z]/.test(char)) { // Check if the character is a letter
            if (vowels.includes(char)) {
                vowelCount++;
            } else {
                consonantCount++;
            }
        }
    }

    return { vowels: vowelCount, consonants: consonantCount };
}
console.log(countVowelsAndConsonants("Hello World")); // { vowels: 3, consonants: 7 }