let current_users = ["john", "ali", "nadeem", "saad", "Hassan"];
let new_users = ["waseem", "ali", "saad", "mehran", "tehzeeb"];

for (let i=0; i<new_users.length; i++){
    if (current_users.includes(new_users[i].toLowerCase())){
        console.log("You have to enter a new username.");
        
    } else {
        console.log("Username is available.");
        
    }
}