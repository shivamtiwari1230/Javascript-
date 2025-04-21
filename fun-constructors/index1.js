class Person1 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
Person1.prototype.greet = function () {
    return `Hello, My name is ${this.name}`
};

const user  = new Person1("Aman", 21);
console.log(user.greet());