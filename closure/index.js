function outer() {
  let username = "hitesh";

  function inner() {
    console.log("inner", username);
  }

  function innerTwo() {
    console.log("innerTwo", username);
  }

  inner();
  innerTwo();
}
outer();

// -----------------------------------------------------
// closure

function makeFunc() {
  const name = "Aman";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

// ----------------------------------------------------

function createCounter() {
  let count = 0; // This variable is "private"

  return {
    increment: function () {
      count++;
      return count;
    },

    decrement: function () {
      count--;
      return count;
    },

    getCount: function(){
        return count
    }
  };
}

const myCounter = createCounter();
console.log(myCounter.increment());
console.log(myCounter.decrement());
console.log(myCounter.count);




