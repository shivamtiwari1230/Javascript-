// You need to implement the Animal constructor function and its prototype method

function Animal(name) {
  // Initialize name property
  this.name = name;
}

// Define makeSound method on Animal's prototype
Animal.prototype.makeSound = function () {
  return "Some generic sound";
};

const dog = new Animal("leo");
// console.log(dog.name);
// console.log(dog.makeSound());






// You need to implement the Robot constructor function and its prototype method

function Robot(name, batteryLevel) {
  // Initialize name and batteryLevel properties
  this.name = name;
  this.batteryLevel = batteryLevel;
}
// Define charge method on Robot's prototype
Robot.prototype.charge = function () {
  this.batteryLevel = Math.min(this.batteryLevel + 20, 100);
};

const battery = new Robot("Alpha", 60)
// console.log(battery.name);
// console.log(battery.batteryLevel);
battery.charge()
console.log(battery.batteryLevel);






// You need to implement the Counter constructor function and its prototype methods
function Counter() {
    // Initialize count property
    this.count = 0
}

// Define increment method on Counter's prototype
Counter.prototype.increment = function(){
  this.count += 1
}

// Define decrement method on Counter's prototype
Counter.prototype.decrement = function(){
  this.count -= 1
}

const countNum = new Counter()
countNum.increment()
console.log(countNum.count);
countNum.decrement()
console.log(countNum.count);






// You need to implement the Employee constructor function and its prototype method

function Employee(name, position, salary) {
    // Initialize name, position, and salary properties
    this.name = name
    this.position = position
    this.salary = salary
}

// Define applyBonus method on Employee's prototype
Employee.prototype.applyBonus = function (percent){
this.salary += (this.salary * percent) / 100
}

const emp = new Employee('Alice', 'Manager', 5000)
const emp1 = new Employee('Alice', 'Manager', 5000)

emp.applyBonus(10)
emp1.applyBonus(20)

console.log(emp.salary);
console.log(emp1.salary);



