// You need to implement the ShoppingCart constructor function and its prototype methods

function ShoppingCart() {
    // Initialize items property
    this.items = []
}

// Define addItem method on ShoppingCart's prototype
ShoppingCart.prototype.addItem = function(price){
  this.items.push(price)
}

// Define getTotalPrice method on ShoppingCart's prototype
ShoppingCart.prototype.getTotalPrice = function(){
 return this.items.reduce((acc, price) => acc + price , 0)
}







// You need to implement the Library constructor function and its prototype methods

function Library() {
    // Initialize books property
    this.books = []
}

// Define addBook method on Library's prototype
Library.prototype.addBook = function(book){
  this.books.push(book)
}

// Define findBook method on Library's prototype
Library.prototype.findBook = function (title){
return this.books.includes(title) ? "Book found":"Book not found"
}
