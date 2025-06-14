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

//11. Compare two strings
let str1 = "hello";
let str2 = "hello";

if (str1 === str2) {
  console.log("Strings are equal");
} else {
  console.log("Strings are not equal");
}

//12. Check if a number is between 10 and 50
let num3 = 30;

if (num3 >= 10 && num3 <= 50) {
  console.log("Number is between 10 and 50");
} else {
  console.log("Number is outside the range");
}

//13. Find the largest of three numbers
let x = 10, y = 25, z = 15;

if (x >= y && x >= z) {
  console.log("x is the largest");
} else if (y >= x && y >= z) {
  console.log("y is the largest");
} else {
  console.log("z is the largest");
}

//15. Weekend or weekday
let day = "Sunday";

if (day === "Saturday" || day === "Sunday") {
  console.log("Weekend");
} else {
  console.log("Weekday");
}

//16. Check if a number is a multiple of another
let num4 = 20;
let divisor = 5;

if (num4 % divisor === 0) {
  console.log(`${num4} is a multiple of ${divisor}`);
} else {
  console.log(`${num4} is not a multiple of ${divisor}`);
}

//17. Check if temperature is hot, warm, or cold
let temp = 15;

if (temp >= 30) {
  console.log("Hot");
} else if (temp >= 20) {
  console.log("Warm");
} else {
  console.log("Cold");
}

//18. Login validation (username & password)
let username = "admin";
let password = "pass123";

if (username === "admin" && password === "pass123") {
  console.log("Login successful");
} else {
  console.log("Invalid credentials");
}

//19. Prime number check (basic logic)
let num5 = 7;
let isPrime = true;

if (num5 <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < num5; i++) {
    if (num5 % i === 0) {
      isPrime = false;
      break;
    }
  }
}

console.log(isPrime ? "Prime number" : "Not a prime number");

//20. Pass/fail based on score (pass mark is 40)
let score2 = 35;

if (score2 >= 40) {
  console.log("Pass");
} else {
  console.log("Fail");
}