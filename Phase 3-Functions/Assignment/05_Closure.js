function createTeaMaker(name) {
  let score = 100;
  return function (teaType) {
    return `Making ${teaType} for ${name} having price of ${score} INR`;
  };
}

let teaMaker = createTeaMaker("Parth");
let result = teaMaker("green tea");

console.log(result);
