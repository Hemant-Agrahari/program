const shallowCopy = { ...person }; // or Object.assign({}, person)

shallowCopy.name = "Shawn";
shallowCopy.address.city = "Mumbai"; // changing nested object
shallowCopy.skills.push("Node.js"); // modifying array

console.log("Original Person:", person);
console.log("Shallow Copy:", shallowCopy);

// Original Person: 
// { 
//   name: "Hemant", 
//   skills: [ "React", "Next.js", "Node.js" ], 
//   address: { city: "Mumbai", pin: 110001 } 
// }

// Shallow Copy: 
// { 
//   name: "Shawn", 
//   skills: [ "React", "Next.js", "Node.js" ], 
//   address: { city: "Mumbai", pin: 110001 } 
// }

// Explanation:

// ✅ name → independent copy (top-level primitive)

// ❌ skills and address → same memory reference (nested objects/arrays)

// So when you modify them, both change!


// person ──► address ──► { city: "Delhi" }
//      │
//      └──► skills ──► ["React", "Next.js"]

// shallowCopy ──► same address reference
//             ──► same skills reference
