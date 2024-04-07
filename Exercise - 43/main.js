var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function make_great(mag) {
    for (var i = 0; i < mag.length; i++) {
        mag[i] = "Great, ".concat(mag[i]);
    }
}
;
function show_magicians(Orig_magicians, Great_magicians) {
    console.log("Original Array: ");
    console.log(Orig_magicians);
    console.log("\nGreat Magicians Array: ");
    console.log(Great_magicians);
}
;
var Orig_magicians = ["Mag 1", "Mag 2", "Mag 3", "Mag 4", "Mag 5"];
var Great_magicians = __spreadArray([], Orig_magicians, true);
make_great(Great_magicians);
show_magicians(Orig_magicians, Great_magicians);
