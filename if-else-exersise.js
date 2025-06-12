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

//5. Check if a number is divisible by both 3 and 5
let num2 = 15;

if (num2 % 3 === 0 && num % 5 === 0) {
  console.log("Divisible by both 3 and 5");
} else {
  console.log("Not divisible by both");
}

//6. Check if a year is a leap year
let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Leap year");
} else {
  console.log("Not a leap year");
}

//7. Simple grade system
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

//8. Vowel or consonant check
let char = 'e';

if ("aeiouAEIOU".includes(char)) {
  console.log("Vowel");
} else {
  console.log("Consonant");
}

//9. Age category (child, teen, adult, senior)
let age2 = 65;

if (age2 < 13) {
  console.log("Child");
} else if (age2 >= 13 && age2 < 20) {
  console.log("Teenager");
} else if (age2 >= 20 && age2 < 60) {
  console.log("Adult");
} else {
  console.log("Senior");
}

//10. Check if a string is empty
let str = "";

if (str === "") {
  console.log("Empty string");
} else {
  console.log("Not empty");
}

