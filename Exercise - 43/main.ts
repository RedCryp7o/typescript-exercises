
function make_great(mag): void{
    for (let i=0; i<mag.length; i++){
        mag[i] = `Great, ${mag[i]}`;
    }
};



function show_magicians(Orig_magicians, Great_magicians): void{
    console.log("Original Array: ");
    console.log(Orig_magicians);
    console.log("\nGreat Magicians Array: ");
    console.log(Great_magicians);
};

let Orig_magicians = ["Mag 1", "Mag 2", "Mag 3", "Mag 4", "Mag 5"];
let Great_magicians = [...Orig_magicians];

make_great(Great_magicians);
show_magicians(Orig_magicians, Great_magicians);