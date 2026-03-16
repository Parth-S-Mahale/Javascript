class Animal {
  constructor(name) {
    this.name = name;
  }
  breathe() {
    return `${this.name} breathes`;
  }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // calls Animal's constructor
        this.breed = breed;
    }
    bark() {
        return `${this.name} says woof!`
    }
}

const rex = new Dog("Rex", "Labrodor");

// rex -> Dog.prototype -> Animal.prototype -> Object.prototype -> null
console.log(Object.getPrototypeOf(Dog.prototype) === Animal.prototype); // true