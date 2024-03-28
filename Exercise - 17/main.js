var friends_names = [
    'Ali', 'Hafeez',
    'Zohaib', 'Ikram',
    'Haseeb', 'Shoib',
    'Saqib'
];
console.log("We are sorry to say that due to some bad circumstances, we are unable to serve all the guest on our Dinner table.\n");
console.log("Dear ".concat(friends_names.pop(), ", We are sorry to say that we can't invite you for Dinner."));
console.log("Dear ".concat(friends_names.pop(), ", We are sorry to say that we can't invite you for Dinner."));
console.log("Dear ".concat(friends_names.pop(), ", We are sorry to say that we can't invite you for Dinner."));
console.log("Dear ".concat(friends_names.pop(), ", We are sorry to say that we can't invite you for Dinner."));
console.log("Dear ".concat(friends_names.pop(), ", We are sorry to say that we can't invite you for Dinner.\n\n"));
for (var i = 0; i < friends_names.length; i++) {
    console.log("Dear ".concat(friends_names, ", You are still invited.\n\n"));
}
friends_names = [];
console.log(friends_names);
