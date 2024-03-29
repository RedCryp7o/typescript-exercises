let usernames = ["ali", "admin", "zohaib", "haseeb", "shoib", "haseeb"];

function greeting(Array: string[]){
    for (let i=0; i<Array.length; i++){
        if (Array[i]==="admin"){
            console.log(`Hello ${Array[i]}, would you like to see a status report?`);
            
        } else {
            console.log(`Hello ${Array[i]}, thank you for logging in again.`);
            
        }
    }
}

greeting(usernames);