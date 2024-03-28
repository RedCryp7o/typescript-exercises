let friends_names = [
    'Ali',    'Hafeez',
    'Zohaib', 'Ikram',
    'Haseeb', 'Shoib',
    'Saqib'
  ]

console.log("We are sorry to say that due to some bad circumstances, we are unable to serve all the guest on our Dinner table.\n");
console.log(`Dear ${friends_names.pop()}, We are sorry to say that we can't invite you for Dinner.`);
console.log(`Dear ${friends_names.pop()}, We are sorry to say that we can't invite you for Dinner.`);
console.log(`Dear ${friends_names.pop()}, We are sorry to say that we can't invite you for Dinner.`);
console.log(`Dear ${friends_names.pop()}, We are sorry to say that we can't invite you for Dinner.`);
console.log(`Dear ${friends_names.pop()}, We are sorry to say that we can't invite you for Dinner.\n\n`);

for (let i=0; i<friends_names.length; i++){
    console.log(`Dear ${friends_names[i]}, You are still invited.`);
}

friends_names.pop()
friends_names.pop()

console.log(friends_names);

