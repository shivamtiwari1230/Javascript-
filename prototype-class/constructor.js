class Person {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }

    getFullName(){
        return `${this.fname} ${this.lname}`
    }
}

const p1 = new Person('Piyush', 'Garg');
const p2 = new Person('Akash', 'Kadlag')

console.log(p1.getFullName());



// Agar assignment me old constructor function maanga hai, toh bas function keyword ka use karke likhna hai.
//  Agar ES6 class ka use karna hai toh class aur constructor method likhna hai.
function Car(model, year) {
    this.model = model;
    this.year = year;
}
let myCar = new Car("Toyota", 2022);
console.log(myCar.model); // "Toyota"


