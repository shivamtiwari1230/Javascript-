const obj = {
    name: "Akash",
    greet: function(){
        console.log(`Hello ${this.name}`);
    }
}
setTimeout(obj.greet, 5 * 1000); // Output Undefined


const obj1 = {
    name: "Akash",
    greet: function(){
        console.log(`Hello ${this.name}`);
    }
}
setTimeout(obj1.greet.bind(obj1), 5 * 1000); // Output Hello Akash