Function.prototype.describe = function(){
    console.log(`Function name is ${this.name}`);
    
}

function greet(name){
    return `Hello ${name}`
}
// greet()
greet.describe();



//  Hoisting hoti hai – Is function ko declare hone se pehle bhi call kar sakte hain.
// Function ka naam (add) fix hota hai.
// Global scope ya block scope me rahta hai.
function add (a,b){
    return a+b 
}


console.log(add(5, 3)); //  Works fine
function add(a, b) {
    return a + b;
}
// Function declaration hoist hoti hai, isliye isko pehle call karna possible hai.





const substract = function(a,b){
    return a-b
}
//Hoisting nahi hoti – Isko define hone ke baad hi use kar sakte hain.
// Anonymous function bhi ho sakta hai – Function ka naam nahi diya to .name empty hoga.
// Variable ke andar store hota hai, isliye iska behaviour ek variable ki tarah hota hai.



function createCounter (){

    let count  = 0;
    return function(){  // Tiffin concept
        count++;
        return count
    }
}
const counter = createCounter()
console.log(counter());



// let arr = [1,2,3,4,5,6,7];
// for (let i = 0; i < arr.length; i++){

// if(arr[i] % 2 !== 0){
//     console.log(arr[i]);
    
// }
// }
