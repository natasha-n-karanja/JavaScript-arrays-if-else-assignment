//1. Check if a number is positive or negative
let number = 5;

if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

//2. Check if a number is even or odd
let num = 8;

if (num % 2 === 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}

//3. Check voting eligibility (age ≥ 18)
let age = 17;

if (age >= 18) {
  console.log("Eligible to vote.");
} else {
  console.log("Not eligible to vote.");
}

//4. Compare two numbers
let a = 10;
let b = 20;

if (a > b) {
  console.log("a is greater");
} else if (a < b) {
  console.log("b is greater");
} else {
  console.log("Both are equal");
}
