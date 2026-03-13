// 1. Sum of numbers
let sum = 0;
let index = 1;
let n = 5

while(index <= n) {
    sum += index;
    index++;
}

console.log(`sum of numbers 1 to ${n}:`, sum);

// 2. Counter
let countdown = [];
let counter = 5;

while(counter >= 1) {
    countdown.push(counter);
    counter--;
}

console.log(countdown);
