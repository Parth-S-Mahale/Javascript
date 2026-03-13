// 1. (This program works in browser 'console' only!!!)
let valArray = []
let val;

do {
    input = prompt(`Enter a input (type "stop" to end the program!):`);

    if (val != "stop") {
        valArray.push(val);
    }
} while (val != "stop");

console.log(valArray);

// 2. Sum of numbers
let sum = 0;
let index = 1;

do {
    sum += index;
    index++;

} while (index <= 3);

console.log(sum);