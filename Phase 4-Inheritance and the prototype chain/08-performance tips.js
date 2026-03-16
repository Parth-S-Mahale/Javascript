/* Gotcha 1 · Monkey-patching built-ins */

// Don't do this 
Array.prototype.sum = function () {
  return this.reduce((a, b) => a + b, 0);
};

// Do this instead - a standalone utility function
function sumArray(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

/* Gotcha 2 · for...in iterates the whole chain */
const parent = { x: 1};
const child = { __proto__: parent, y: 2};

for (const key in child) {
    console.log(key); // "y" then "x" - x comes from parent!
}

// Guard with hasOwn to only get own properties
for (const key in child) {
    if (Object.hasOwn(child, key)) {
        console.log(key); // only "y"
    }
}

// or use Object.keys() - only returns own enumerable properties
console.log(Object.keys(child)); // ["y"]

/* Gotcha 3 · Long chains hurt performance */

/* NOTE: Chain length matters 
Each step up the prototype chain is an extra lookup. For hot code paths (called thousands of times), a 10-level chain is measurably slower than a 2-level one. Keep chains short — rarely deeper than 3–4 levels. Accessing a non-existent property is worst: it always traverses the entire chain before returning undefined. */

/* Gotcha 4 · Mutating a shared prototype affects all instances */
function Cat() {}
Cat.prototype.speak = () => 'meow';

const c1 = new Cat();
const c2 = new Cat();

// Mutate the prototype AFTER instances exist
Cat.prototype.speak = () => "ROAR";

console.log(c1.speak()); // "ROAR" - c1 is affected!
console.log(c2.speak()); // "ROAR" - c2 is affected too!
// All instances share the same prototype object - changes are global.
