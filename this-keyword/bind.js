const obj = {
    name: "Akash",
    greet: function(){
        console.log(`Hello ${this.name}`);
    }
}
setTimeout(obj.greet, 5 * 1000); // Output Undefined


//--------------------------------------------------------------------------------


let obj2 = {
    name: "JS",
    getName: function () {
      return this.name;
    },
  };
  
  let getName = obj2.getName;
  getName() // Output Undefined


  //----------------------------------------------------------------------------------



let obj3 = {
    name: "JS",
    getName: function () {
      console.log(this.name);
      
    },
  };
  
  obj3.getName() // Output JS


  //-------------------------------------------------------------------------------


const obj1 = {
    name: "Akash",
    greet: function(){
        console.log(`Hello ${this.name}`);
    }
}
setTimeout(obj1.greet.bind(obj1), 5 * 1000); // Output Hello Akash