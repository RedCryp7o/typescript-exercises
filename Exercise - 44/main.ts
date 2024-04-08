function makeSandwich(sandwich): void{
    let sandwichSummary = "Sandwich with ";
    for (let i = 0; i < sandwich.length; i++) {
        sandwichSummary += sandwich[i];
        if (i < sandwich.length - 1) {
            sandwichSummary += ", ";
        }
    }
    console.log(sandwichSummary);
};

let sandwich_1 = ["ham", "cheese", "lettuce"]
let sandwich_2 = ["turkey", "tomato"]
let sandwich_3 = ["peanut butter", "jelly", "bread"]

makeSandwich(sandwich_1);
makeSandwich(sandwich_2);
makeSandwich(sandwich_3);