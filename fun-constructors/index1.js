// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }
// Person.prototype.greet = function () {
//     return `Hello, My name is ${this.name}`
// };

// const user  = new Person("Aman", 21);
// console.log(user.greet());

function Person1(name, age) {
  this.name = name;
  this.age = age;

  return {
    city: "Jaipur",
  };
}

const user1 = new Person1("Armin", 21);
console.log(user1);
