let guest_names = ["Hafeez", "Zohaib", "Haseeb", "Shoib"];

for (let i=0; i<guest_names.length; i++){
    console.log(`Dear ${guest_names[i]}, You're cordially invited to join us for an iftar party filled with delicious food and joyful moments.`);
    
}
console.log(`Mr. ${guest_names[2]} is not able to join the party.\n\n`);

guest_names[2] = "Hassan";

for (let i=0; i<guest_names.length; i++){
    console.log(`Dear ${guest_names[i]}, You're cordially invited to join us for an iftar party filled with delicious food and joyful moments.`);
    
}