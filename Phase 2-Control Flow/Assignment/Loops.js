/* Task 1: Sum of First N Natural Numbers

Write a function sumOfN(n) that returns the sum of the first n natural numbers */
function sumOfN(n) {
  let sum = 0;
  let i = 1;

  while (i <= n) {
    sum += i;
    i++;
  }
  return sum;
}

/* Task 2: Multiplication Table

Write a function printMultiplicationTable(n) that returns the multiplication table for n. Values return in the array must be of the format 2 * 2 = 4 */
function printMultiplicationTable(n) {
  const table = [];

  for (let i = 1; i <= 10; i++) {
    let answer = `${n} * ${i} = ${n * i}`;
    table.push(answer);
  }
  return table;
}

/* Task 3: Count Vowels in a String

Write a function countVowels(str) that returns the number of vowels (in both lower & uppercase) in the given string str. */
function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
