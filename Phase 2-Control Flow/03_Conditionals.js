// Checking if a variable is a number or not

let score = "44";

if (typeof Number(score) === "number") {
    console.log("Yes, this is a number");
} else {
    console.log("No, this is not a number");
}

score = 44;

if (typeof String(score) === "string") {
    console.log("Yes, this is a string");
} else {
    console.log("No, this is not a string");
}