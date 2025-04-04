let p1 = {
    fname: "Hitesh",
    lname: "Choudhary"
};

let p2 = {
    ...p1,  // Spread Operator ...
}

p1.fname = "Shivam"

// console.log(p1);
// console.log(p2);




let person1 = {
    fname: "Hitesh",
    lname: "Choudhary",
    address: {
        house: 1,
        school: 1,
    },
};

let person2 = {
    ...person1,  // Spread Operator ...
};

person2.fname = "whyshivam"
person2.address.house = "Mohan baba nagar"

console.log(person1);
console.log(person2);

