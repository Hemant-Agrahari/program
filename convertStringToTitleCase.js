// Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).
function convertStringToTitleCase(str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return words.join(" "); 
}