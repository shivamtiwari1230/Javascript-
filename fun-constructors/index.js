// function Person(fname, lname, contact) {
//   this.fname = fname;
//   this.lname = lname;
//   this.contact = contact;

//   this.getName = function () {
//     console.log(this.fname, this.lname);
//   };
// }

// const person1 = new Person('Piyush', 'Garg', '98989898')
// console.log(person1);

// person1.getName();



class Person {
    constructor(fname, lname, contact) {
        this.fname = fname
        this.lname = lname
        this.contact = contact
    }
    getName(){
        console.log(this.fname, this.lname);
        
    }
}

const p1 = new Person ('Aman', 'Gupta', '989898')
p1.getName()




const p2 = {
    fname: "Piyush",
    lname: "Garg",
    getFullname(){
        return`${this.fname} ${this.lname}`
    },
};

const p3 = Object.create(p1);

console.log(p2);
console.log(p3.fname);





