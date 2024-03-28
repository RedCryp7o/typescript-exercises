var str1 = 'hello';
var str2 = 'world';
var num1 = 10;
var num2 = 20;
var array = [1, 2, 3, 4, 5];
// Tests for equality and inequality with strs
console.log("Is str1 equal to 'hello'? I predict True.");
console.log(str1 == 'hello');
console.log("Is str1 not equal to 'world'? I predict True.");
console.log(str1 != 'world');
// Tests using the lower case function
console.log("Is str1 in lowercase equal to 'hello'? I predict True.");
console.log(str1.toLowerCase() == 'hello');
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is num1 equal to 10? I predict True.");
console.log(num1 == 10);
console.log("Is num1 not equal to 20? I predict True.");
console.log(num1 != 20);
console.log("Is num1 greater than num2? I predict False.");
console.log(num1 > num2);
console.log("Is num1 less than num2? I predict True.");
console.log(num1 < num2);
console.log("Is num1 greater than or equal to 10? I predict True.");
console.log(num1 >= 10);
console.log("Is num1 less than or equal to 10? I predict True.");
console.log(num1 <= 10);
// Tests using "and" and "or" operators
console.log("Is num1 equal to 10 and num2 equal to 20? I predict True.");
console.log(num1 == 10 && num2 == 20);
console.log("Is num1 equal to 10 or num2 equal to 15? I predict True.");
console.log(num1 == 10 || num2 == 15);
// Test whether an item is in an array
console.log("Is num1 in the array? I predict True.");
console.log(array.includes(num1));
// Test whether an item is not in an array
console.log("Is num2 not in the array? I predict True.");
console.log(!(array.includes(num2)));
