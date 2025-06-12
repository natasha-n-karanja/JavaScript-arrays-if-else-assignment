//1. Create an object representing a car
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};
console.log(car);

//2. Add a new property color
car.color = "blue";
console.log(car);

//3. Change the year property
car.year = 2023;
console.log(car);

//4. Delete the model property
delete car.model;
console.log(car);

//5. Check if the brand property exists
console.log("brand" in car); // true

//6. Loop through all properties of the car
for (let key in car) {
  console.log(`${key}: ${car[key]}`);
}

//7. Create an array of 3 student objects
const students = [
  { name: "Alice", age: 21 },
  { name: "Bob", age: 24 },
  { name: "Charlie", age: 19 }
];
console.log(students);

//8. Find the student with the highest age
let oldest = students[0];
for (let student of students) {
  if (student.age > oldest.age) {
    oldest = student;
  }
}
console.log(oldest);

//9. Add a new student object
students.push({ name: "Dana", age: 22 });
console.log(students);

//10.Convert one of the student objects to a JSON string
const jsonString = JSON.stringify(students[0]);
console.log(jsonString);
