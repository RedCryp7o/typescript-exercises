let placesToVisit = ["Saudia Arabia", "Singapore", "Dubai", "America", "Lonon"];

console.log("Orgininal Array:");
console.log(placesToVisit);

console.log("Array in Alphabetical:");
console.log([...placesToVisit].sort());

console.log("Original Array: ");
console.log(placesToVisit);

console.log("Alphabeticall Reversed Array: ");
console.log([...placesToVisit].sort().reverse());

console.log("Original Array: ");
console.log(placesToVisit);

placesToVisit.reverse()
console.log("Reversing the Original Array: ");
console.log(placesToVisit);

placesToVisit.reverse()
console.log("Reversing the Original Array again: ");
console.log(placesToVisit);

placesToVisit.sort()
console.log("Sorting the Original Array: ");
console.log(placesToVisit);

placesToVisit.sort((a,b) => b.localeCompare(a));
console.log("Array in Reverse Alphabetical Order:");
console.log(placesToVisit);



