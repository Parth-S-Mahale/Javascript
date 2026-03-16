/* Using __proto__ here just for illustration */


const animal = {
    breathes: true,
};

const dog = {
    name: "Kutta",
    __proto__: animal,
}

console.log(`Name of dog: ${dog.name}`); // Kutta <- (own property)
console.log(`Breathing status of dog: ${dog.breathes}`); // true <- (inherited from animal)
console.log(`Size of dog: ${dog.size}`); // undefined <- (not found anywhere in chain)
