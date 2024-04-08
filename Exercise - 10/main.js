// Program: 01
// This is the main function which is calling all defined functions to print the desired output.
function numberEight() {
    console.log(add(2, 6));
    console.log(subtract(12, 4));
    console.log(multiply(4, 2));
    console.log(divide(16, 2));
}
// This function is used to add two numbers.
function add(num1, num2) {
    return num1 + num2;
}
// This function is used to subtract two numbers.
function subtract(num1, num2) {
    return num1 - num2;
}
// This function is used to multiply two numbers.
function multiply(num1, num2) {
    return num1 * num2;
}
// This function is used to Divide two numbers.
function divide(num1, num2) {
    return num1 / num2;
}
// We are calling our main function to display the number eight on each calculation.
numberEight();
// Program: 02
// This function is used to Display the overall output. It takes the variables famous_person and message and then print the overall output.
function quotation(famous_person, message) {
    console.log(famous_person + " once said: " + "\"" + message + "\"");
}
var famous_person = "Sam Altman";
var message = "Don\'t let yourself make excuses for not doing the things you want to do.";
// Here we are calling the function quotation to display the output.
quotation(famous_person, message);
