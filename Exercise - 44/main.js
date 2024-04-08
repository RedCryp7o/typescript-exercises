function makeSandwich(sandwich) {
    var sandwichSummary = "Sandwich with ";
    for (var i = 0; i < sandwich.length; i++) {
        sandwichSummary += sandwich[i];
        if (i < sandwich.length - 1) {
            sandwichSummary += ", ";
        }
    }
    console.log(sandwichSummary);
}
;
var sandwich_1 = ["ham", "cheese", "lettuce"];
var sandwich_2 = ["turkey", "tomato"];
var sandwich_3 = ["peanut butter", "jelly", "bread"];
makeSandwich(sandwich_1);
makeSandwich(sandwich_2);
makeSandwich(sandwich_3);
