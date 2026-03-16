function Box(value) {
  this.value = value; // 'this' = the new object being created
}

// Add shared methods to the prototype ONCE
Box.prototype.methodName = function() {
    return this.value;
};

const b1 = new Box(42);
const b2 = new Box(99);

console.log(b1.methodName()); // 42
console.log(b2.methodName()); // 99

// Both share the SAME function in memory - not duplicated
console.log(b1.methodName === b2.methodName); // true

// Verify the prototype chain
let objResult = Object.getPrototypeOf(b1) === Box.prototype; 
console.log(objResult); // true 

// b1 -> Box.prototype -> Object.prototype -> null
