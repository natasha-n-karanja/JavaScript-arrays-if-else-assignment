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
