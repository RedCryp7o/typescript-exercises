function make_great(mag) {
    for (var i = 0; i < mag.length; i++) {
        mag[i] = "Great, ".concat(mag[i]);
    }
}
;
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var mag = magicians_1[_i];
        console.log(mag);
    }
}
;
var magicians = ["Mag 1", "Mag 2", "Mag 3", "Mag 4", "Mag 5"];
make_great(magicians);
show_magicians(magicians);
