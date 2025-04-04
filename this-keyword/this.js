// this in global space
console.log(this); // browser = window

// node {}
console.log(this); // {}
console.log(this === module.exports); // true
console.log(this === global); // false

function getthis() {
  console.log(this === global); // true
}
// getthis()

// -------------------------------------------------------------------

function greet() {
  console.log(this);
}

function sayHello() {
  console.log(this);
}

// module.exports = {
//     greet,
//     sayHello
// };

// false, because we reassign module.experts to an
// entirely new object { greet, sayHello } and this is still

console.log(this === module.exports);

// module.exports.greet = function greet() {
// console.log(this);
// };

// module.exports.sayHello = function sayHello() {
// console.log(this);
// };

// true, because this time we did't reassigned
// module.exports a completely new object

console.log(this === module.exports);

// Inside an object, this refers to the object itself.
const obj = {
  name: "shivam",
  greet() {
    console.log(`Welcome ${this.name}`);
  },
};
// obj.greet()

// Constructor Function
function Car(brand, color) {
  this.brand = brand;
  this.color = color;
}

const myCar = new Car("Toyota", "Red");
// console.log(myCar);

function Name(surname, name) {
  this.surname = surname;
  this.name = name;
}

const person = new Name("Shukla", "Shivam");
// console.log(person.surname);

// Arrow Function context
const obj1 = {
  name: "Aman",
  greet: () => {
    console.log(`Welcome ${this.name}`); // undefined
  },
};
// obj1.greet()


// -------------------------------------------------------------------

// function getThis() {
//   console.log(this);
// }

// getThis.call(undefined);  // Output: globalThis
// getThis.call(null);  // Output: globalThis



function getThis() {
  console.log(this);
}

getThis.call(42);   // Output: [Number: 42]
getThis.call("Hello");   // Output: [String: 'Hello']
getThis.call(true);   // Output: [Boolean: true]