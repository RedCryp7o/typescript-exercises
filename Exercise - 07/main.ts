function numberEight(){
    console.log(add(2, 6));
    console.log(subtract(12, 4));
    console.log(multiply(4, 2));
    console.log(divide(16, 2));
}

function add(num1: number, num2: number): number {
    return num1 + num2;
}

function subtract(num1: number, num2: number): number {
    return num1 - num2;
}

function multiply(num1: number, num2: number): number {
    return num1 * num2;
}

function divide(num1: number, num2: number): number {
    return num1 / num2;
}

numberEight()