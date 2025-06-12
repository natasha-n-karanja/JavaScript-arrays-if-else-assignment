//Create an array of 5 fruits and print the second one
const fruits = ["apple", "banana", "cherry", "mango", "orange"];
console.log(fruits[1]); // 'banana' — because arrays are 0-indexed

//Add a new fruit to the end of the array
fruits.push("grape");
console.log(fruits);

//Remove the first element of the array
fruits.shift(); // removes "apple"
console.log(fruits);
