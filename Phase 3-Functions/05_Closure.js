/* 
Idea behind Closure: Outer function runs → finishes → its variables should die...
BUT the inner function was returned → it holds a reference → variables SURVIVE
*/

function outer() {
  let message = "I am from outer";

  return function inner() {
    console.log(message);
  };
}

let closure = outer();
closure();