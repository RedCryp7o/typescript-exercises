
function make_great(mag): void{
    for (let i=0; i<mag.length; i++){
        mag[i] = `Great, ${mag[i]}`;
        
    }
};



function show_magicians(magicians): void{
    for (let mag of magicians){
        console.log(mag);
        
    }
};

let magicians = ["Mag 1", "Mag 2", "Mag 3", "Mag 4", "Mag 5"];

make_great(magicians);
show_magicians(magicians);