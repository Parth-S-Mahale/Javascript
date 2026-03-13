function slaveFunction(masterName) {
  return `I am slave and i am controlled by my: ${masterName}`;
}

function masterFunction(slaveFunction) {
  return slaveFunction("Master");
}

let HOF = masterFunction(slaveFunction);
console.log(HOF);