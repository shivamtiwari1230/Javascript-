console.log("Starts of script 2");

setTimeout(() => {
    console.log("This is from the Task Queue (setTimeout)");
    
}, 0);

console.log("End of script");

console.log("Start of script 3");

setTimeout(() => {
    console.log("This is from the Task Queue (setTimeout)");
    
});

Promise.resolve().then(() => {
    console.log("This is from Microtask Queue (Promise)");
    
});

console.log("End of script");

