function Animal(name) {
  this.name = name;
}

Animal.prototype.breathe = function () {
  return `${this.name} breathes`;
};

function Dog(name, breed) {
  Animal.call(this, name); // call parent constructor
  this.breed = breed;
}

// Link Dog's prototype to Animal's prototype
Object.setPrototypeOf(Dog.prototype, Animal.prototype);
Dog.prototype.bark = function () {
  return `${this.name} says woof!`;
};

const rex = new Dog("Rex", "Labrodor");
console.log(rex.bark()); // "Rex says woof!" <- Dog.prototype
console.log(rex.breathe()); // "Rex breathes" <- Animal.prototype
console.log(rex.toString()); // "[object Object]" <- Object.prototype

