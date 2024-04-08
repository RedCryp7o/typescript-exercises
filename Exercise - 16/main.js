var guest_names = ["Hafeez", "Zohaib", "Haseeb", "Shoib"];
for (var i = 0; i < guest_names.length; i++) {
    console.log("Dear ".concat(guest_names[i], ", You're cordially invited to join us for an iftar party filled with delicious food and joyful moments."));
}
console.log("Hey Friends, we want to inform you that we are decided to invite more guests to make our Dinner table bigger.\n\n");
guest_names.unshift("Ali");
guest_names.splice(3, 0, "Ikram");
guest_names.push("Saqib");
for (var i = 0; i < guest_names.length; i++) {
    console.log("Dear ".concat(guest_names[i], ", You're cordially invited to join us for an iftar party filled with delicious food and joyful moments."));
}
console.log(guest_names);
