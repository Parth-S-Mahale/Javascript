/* 1 . OBJECT LITERAL (IMPLICIT OBJECT.PROTOTYPE) */
const obj = { a: 1 };
// obj -> Object.prototype -> null (automatic)



/* 2 · OBJECT LITERAL WITH __PROTO__ KEY (STANDARD, NOT DEPRECATED) */
const parent1 = {
  greet() {
    return "hi";
  },
};

const child1 = {
  __proto__: parent,
  name: "Alice",
};
// child -> parent -> Object.prototype -> null;
// NOTE: { __proto__: x} in a literal is standard + fast
// obj.__proto__ = x (accessor form) is deprecated - avoid it



/* 3 · OBJECT.CREATE() */
const parent2 = {
  greet() {
    return "hi";
  },
};

const child2 = Object.create(parent);
child1.name = "Alice";

// Bonus: create an object with NO prototype at all
const dict = Object.create(null);
// dict has no toString, no hasOwnProperty - pure key/value store



/* 4 · CONSTRUCTOR FUNCTION + NEW */
function Person(name) {
  this.name = name;
}
const alice = new Person("Alice");
// alice -> Person.prototype -> Object.prototype -> null



/* 5 . CLASS / EXTENDS (RECOMMENDED) */
class Person {
  constructor(n) {
    this.name = n;
  }
}

class Employee extends Person {
  constructor(n, role) {
    super(n);
    this.role = role;
  }
}

const e = new Employee("Alice", "Engineer");
// e -> Employee.prototype -> Person.prototype -> Object.prototype -> null



/* 6 . OBJECT.SETPROTOTYPEOF() (MUTATE AFTER CREATION - AVOID WHEN POSSIBLE) */
const a = {};
const b = {
    greet() {
        return "hi";
    }
}
Object.setPrototypeOf(a,b);
// Works, but mutating the prototype chain at runtime
// disables JS engine optimizations. Use only if you must.