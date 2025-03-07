const obj1 = {
    fname: 'Piyush',
    lname: 'Garg',
    getFullname: function(){
        if(this.lname !== undefined)
            return this.fname; 
    },
};

const obj2 = {
    fname: "Anirudh",
    lname: "Jwala",
};

// obj1.__proto__ = null;
obj2.__proto__ = obj1;

console.log(obj1.toString());
console.log(obj2.getFullname());



// Instead of modifying __proto__, you can create an object with no prototype using Object.create(null), which achieves the same effect:
const obj3 = Object.create(null);
obj1.fname = "Piyush";
obj1.lname = "Garg";

console.log(obj3.toString); // undefined
console.log(Object.getPrototypeOf(obj1)); // null


