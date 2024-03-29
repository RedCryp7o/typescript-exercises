var usernames = ["ali", "admin", "zohaib", "haseeb", "shoib", "haseeb"];
function greeting(Array) {
    for (var i = 0; i < Array.length; i++) {
        if (Array[i] === "admin") {
            console.log("Hello ".concat(Array[i], ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(Array[i], ", thank you for logging in again."));
        }
    }
}
greeting(usernames);
