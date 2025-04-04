const person = {
    name: "Aman",
    greet: function () {
      console.log(`Hello, ${this.name}!`);
    }
  };
  
  const greetFn = person.greet.bind({ name: "Shivam" });
  
  greetFn();




  const person1 = {
    name: "Aman",
    greet: () => {
      console.log(`Hello, ${this.name}!`);
    }
  };
  
  const greetFn1 = person1.greet.bind({ name: "Shivam" });
  
  greetFn1(); // undefined
  
  
