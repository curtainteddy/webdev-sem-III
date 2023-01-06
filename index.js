let value = "Hello World";
console.log(value);

const anotherValue = "This is a constant";
console.log(anotherValue);

let myArray = [];

console.log("Empty Array:");
console.log(myArray);


myArray.push(1);
myArray.push(2);
myArray.push(3);
console.log("Array with elements:");
console.log(myArray);


myArray.splice(1, 1);

console.log(myArray);

myArray[0] = 0;

console.log(myArray);

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

myArray = [];

console.log(myArray);
