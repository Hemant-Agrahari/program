// Reverse each word in a sentence → ("Hello World" → "olleH dlroW")
function reverseEachWordInSentence(sentence) {
    let words = sentence.split(" ");
    console.log(words);
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].split("").reverse().join("");
    }
    return words.join(" ");
}

// Example usage:
console.log(reverseEachWordInSentence("Hello World")); // "olleH dlroW"
console.log(reverseEachWordInSentence("JavaScript is fun")); // "tpircSavaJ si nuf"