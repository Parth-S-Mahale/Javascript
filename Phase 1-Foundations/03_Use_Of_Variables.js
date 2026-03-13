let mutable_variable = 1;
console.log("This is a mutable variable having value:", mutable_variable);

mutable_variable = 2;
console.log("This is a mutable variable having value:", mutable_variable);

const immutable_variable = 1;
console.log("This is a immutable variable having value:", immutable_variable);

immutable_variable = 2;
console.log("This is a immutable variable having value:", immutable_variable); // TypeError: Assignment to constant variable.
