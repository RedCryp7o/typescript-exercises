function displayNameCases(Name) {
    console.log("Original Name: ", Name);
    console.log("Uppercase: ", Name.toUpperCase()); // for displaying name in uppercase
    console.log("Lowercase: ", Name.toLowerCase()); // for displaying name in lowercase
    console.log("Titlecase: ", toTitleCase(Name)); // for displaying name in lowercase
}
function toTitleCase(str) {
    return str.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
}
var personName = "Muhammad afzal riaz";
displayNameCases(personName);
