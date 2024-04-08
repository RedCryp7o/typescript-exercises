var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Saudia Arabia", "Singapore", "Dubai", "America", "Lonon"];
console.log("Orgininal Array:");
console.log(placesToVisit);
console.log("Array in Alphabetical:");
console.log(__spreadArray([], placesToVisit, true).sort());
console.log("Original Array: ");
console.log(placesToVisit);
console.log("Alphabeticall Reversed Array: ");
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
console.log("Original Array: ");
console.log(placesToVisit);
placesToVisit.reverse();
console.log("Reversing the Original Array: ");
console.log(placesToVisit);
placesToVisit.reverse();
console.log("Reversing the Original Array again: ");
console.log(placesToVisit);
placesToVisit.sort();
console.log("Sorting the Original Array: ");
console.log(placesToVisit);
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Array in Reverse Alphabetical Order:");
console.log(placesToVisit);
