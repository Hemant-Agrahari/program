// Implement a deep clone function in JavaScript that creates a copy of a nested object or array without any reference to the original. 

const deepClone = JSON.parse(JSON.stringify(person));

deepClone.name = "Rahul";
deepClone.address.city = "Bangalore";
deepClone.skills.push("AWS");

console.log("Original Person:", person);
console.log("Deep Clone:", deepClone);

// Original Person: { 
//   name: "Hemant", 
//   skills: [ "React", "Next.js" ], 
//   address: { city: "Delhi", pin: 110001 } 
// }

// Deep Clone: { 
//   name: "Rahul", 
//   skills: [ "React", "Next.js", "AWS" ], 
//   address: { city: "Bangalore", pin: 110001 } 
// }


// Explanation:

// Deep copy creates a new object in memory for everything.

// Changing nested properties doesn’t affect the original.

// No shared references.


// person ──► address ──► { city: "Delhi" }
//      │
//      └──► skills ──► ["React", "Next.js"]

// deepClone ──► new address ──► { city: "Bangalore" }
//           └──► new skills ──► ["React", "Next.js", "AWS"]

