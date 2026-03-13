function outerFunction() {
  function innerFunction() {
    return "I am a nested function";
  }
  return innerFunction();
}

let NF = outerFunction();
console.log(NF);