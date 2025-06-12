//1.Create an array of 5 fruits and print the second one
const fruits = ["apple", "banana", "cherry", "mango", "orange"];
console.log(fruits[1]); // 'banana' — because arrays are 0-indexed

//2.Add a new fruit to the end of the array
fruits.push("grape");
console.log(fruits);

//3.Remove the first element of the array
fruits.shift(); // removes "apple"
console.log(fruits);

//4. Sort the array in alphabetical order
fruits.sort();
console.log(fruits);

//5. Reverse the order of the array
fruits.reverse();
console.log(fruits);

//6. Check if a certain fruit exists in the array
console.log(fruits.includes("banana")); // true or false

//7. Find the length of the array
console.log(fruits.length);
