/* Task 1:

Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number". */
function stringToNumber(input) {
  const result = Number(input);

  if (isNaN(result)) {
    return "Not a number";
  }
  return result;
}

/* Task 2:

Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc. */
function flipBoolean(input) {
  const result = Boolean(input);
  return !result;
}

/* Task 3:

Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!" */
function whatAmI(input) {
  const result = typeof input;

  if (result === "number") {
    return "I'm a number!";
  } else if (result == "string") {
    return "I'm a string!";
  } else {
    return result;
  }
}

/* Task 4:

Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey. */
function isItTruthy(input) {
  if (input) {
    return "It's truthy!";
  } else {
    return "It's falsey!";
  }
}
