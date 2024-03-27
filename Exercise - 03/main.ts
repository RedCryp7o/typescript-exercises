function displayNameCases(Name: string): void {
    console.log("Original Name: ", Name);
    console.log("Uppercase: ", Name.toUpperCase()); // for displaying name in uppercase
    console.log("Lowercase: ", Name.toLowerCase()); // for displaying name in lowercase
    console.log("Titlecase: ", toTitleCase(Name)); // for displaying name in lowercase
}

function toTitleCase(str: string): string {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
}


let personName : string = "Muhammad afzal riaz";
displayNameCases(personName)