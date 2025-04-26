function createCounter() {
  let count = 0;

  return function increment() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter());

// -------------------------------------------------------------------------------------

// Inheritance

class vehicle {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  displayInfo() {
    console.log(`${this.year} ${this.brand}`);
  }
}

const newVehicle = new vehicle("Hero", 2020, 2021);
// 
// Child class (Car)

let obj = {
  name: "JS",
  getName: function () {
    return this.name;
  },
};

console.log(obj.getName());


