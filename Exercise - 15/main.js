var guest_names = ["Hafeez", "Zohaib", "Haseeb", "Shoib"];
for (var i = 0; i < guest_names.length; i++) {
    console.log("Dear ".concat(guest_names[i], ", You're cordially invited to join us for an iftar party filled with delicious food and joyful moments."));
}
console.log("Mr. ".concat(guest_names[2], " is not able to join the party.\nn"));
guest_names[2] = "Hassan";
for (var i = 0; i < guest_names.length; i++) {
    console.log("Dear ".concat(guest_names[i], ", You're cordially invited to join us for an iftar party filled with delicious food and joyful moments."));
}
