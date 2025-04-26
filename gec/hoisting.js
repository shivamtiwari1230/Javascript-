console.log(user); // var is hoisted with undefined

// let and const declarations are hoisted but 
// throws ReferenceError: Cannot access 'city' before initialization


var user = "aman";
let city = "jaipur";
function greet(){
    console.log("Welcome there!");
    
}
