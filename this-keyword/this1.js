
// "use strict"

function getThis() {
    console.log(this);
  }
    
  getThis.call(Symbol(5));




 //call() function greet ko execute karega, lekin this = person set karega.
  //Function ke andar this.name ab person.name ban jayega.
  function greet (age, city){
    console.log(`${this.name} is ${age} years old and lives in ${city}.`);
    
  }
  const person = {name: "Aman"};
  greet.call(person, 33, 'jaipur')


  // bind() returns a new funcion with the specified this context 
  function greet (age, city){
    console.log(`${this.name} is ${age} years old and lives in ${city}.`);
  }

  const person1 = { name: "Aman"};
  const greetMe = greet.bind(person, 21, "jaipur")

  greetMe()


  function sayHello(name = "rohit") {
    console.log(name);
  }
  
  sayHello(null);
  sayHello(undefined);
  sayHello("ram");
  sayHello();

 