// Function to print unique elements from an array
//Set is a built-in JavaScript object that stores unique values of any type, whether primitive values or object references.

function printUniqueArray(arr) {
    const uniqueArray = [...new Set(arr)];
    console.log(uniqueArray);
}

// Example usage:
printUniqueArray([1, 2, 2, 3, 4, 4, 5]); // Output: [1, 2, 3, 4, 5]
printUniqueArray(['apple', 'banana', 'apple', 'orange']); // Output: ['apple', 'banana', 'orange']