let person1 = {
    fname: "Hitesh",
    lname: "choudhary",
    address: {
        house: 1,
        s: 1,
    },
};

const person1kaString = JSON.stringify(person1);
let person2 = JSON.parse(person1kaString);

person1.address.house = "badarpur"

console.log(person1);
console.log(person2);

