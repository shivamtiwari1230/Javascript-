const teas = {
    name: "Lemon tea",
    type: "Green",
    caffine: "low",
    blackTea: {
        name: "Black tea"
    }
};

// Access and print the name and type properties of the tea object.

// console.log(teas.name);
// console.log(teas["type"]);

// Add a new property origin to the tea object.
teas.origin = "Assam"
console.log(teas);

// Remove the type property from the tea object.
delete teas.type


// Check if the tea object has a property origin.

// Using the in operator
if("origin" in teas){
    console.log("origin found");
    
}else{
    console.log("not found");
    
}

// Using hasOwnProperty()
if(teas.hasOwnProperty("origin")){
    console.log("origin found");
    
}else{
    console.log("not found");  
}

 
// Use a for in loop to print all properties og the tea object.
for (const key in teas) {
        console.log(`${key}: ${teas[key]}`);
    }


// Create a copy of the tea object.
const teaCopy  = {
    ...teas // shallow copy
}

