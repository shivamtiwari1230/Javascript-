function Person(fname, lname, contact) {
  this.fname = fname;
  this.lname = lname;
  this.contact = contact;

  this.getName = function () {
    console.log(this.fname, this.lname);
  };
}

const person1 = new Person('Piyush', 'Garg', '98989898')
console.log(person1);

person1.getName();