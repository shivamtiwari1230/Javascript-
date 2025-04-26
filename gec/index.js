

// console.log(`Value of X is ${x}`); // Output Undefined

// var x = 10;

x = 30

console.log(`Value of X is ${x}`); // Output 30

var x = 10;




console.log("Global Execution Context starts");

var globalVariable = "Inside global function"

function globalFunction(){
    console.log("Inside global function");
    
}
console.log(globalVariable);
globalFunction()

console.log("Global Execution Context ends");


