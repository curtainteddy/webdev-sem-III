// Declaring variable
let value = "This is a variable";
console.log(value);

// Declaring constant
const anotherValue = "This is a constant";
console.log(anotherValue);

console.log();

// Playing with arrays
// -------------------

// Creating an array
// There is no restriction on which data types the elements of an array should be.
//  It can be combination of string, number, boolean or even another array or objects.

let myFriends = [];

console.log('Array of my friends:')
console.log(myFriends);
console.log('Array is empty above')
console.log('');


// Referring to arrays from the index number to access them
let firstElement = myFriends[0];
let secondElement = myFriends[1];
let thirdElement = myFriends[2];
let fourthElement = myFriends[3];

// Adding elements to the array directly from index number
myFriends[0] = 'Ram Bahadur';
console.log(myFriends);


// Using push method to add new elements to the end of the array
myFriends.push('Sita Kumari');
console.log(myFriends);

// Using the variable for the respective index number to assign values
myFriends[2] = 'Ming Narayan';
console.log(myFriends);

// Using the pop method to remove the last element of the array
myFriends.pop();
console.log(myFriends);

// Using the shift method to remove the first element of the array. This brings all the elements one index above
myFriends.shift();
console.log(myFriends);

console.log();

// Using the unshift method to add a new element at zero index
myFriends.unshift('Lyam Kumar')
console.log(myFriends);

// Modifying the value of an specific element through the index
myFriends[2] = 'Jhol Kumari'
myFriends[3] = 'Jhyam Putali'
console.log(myFriends);

// Using length property to find out the length of my array
let myFriendsLength = myFriends.length;
console.log(myFriendsLength); 
console.log();

// Using the splice method to splice the array at an index
// first argument is where to splice, second argument is how much to splice

myFriends.splice(1,2);
// This removes two total elements starting from 1 index.  

console.log(myFriends);

// Using splice again but with new elements to splice with
myFriends.splice(1,0,'Shyam Kumar','Chini Maya','Chiya Devi')
// This starts splicing from 1 index but removes 0 elements and continues to add new elements.

console.log(myFriends);
console.log();

// Using slice to slice a new array from an existing array giving starting and ending index
let myMaleFriends = myFriends.slice(0,2);
console.log('My Male Friends: '+ myMaleFriends); 

let myFemaleFriends = myFriends.slice(-3); 
// same as ...slice(2); second arg not passed, so it will take last index as second arg 
// same as ...slice(-3);  3 elements from the end of the array
// same as ...slice(2,99); from 2 index to an index in the back 
console.log('My Female Friends: ' + myFemaleFriends);
console.log();


// Creating functions
function getFullName(firstName, lastName){
    return firstName +  ' ' + lastName;
}

// Invoking functions
console.log(getFullName('Shyam','Bahadur'))


function introParagraph(firstName, lastName, age){
    // return 'My name is '+ firstName +  ' ' + lastName + '. I am ' + age + ' years old.';
    return `My name is ${firstName} ${lastName}. My age is ${age}.`;
}

console.log(introParagraph('Ram','Sharma','🤔'));
console.log();


// Using forEach method to use functions on each element
myMaleFriends.forEach((element,index) => console.log(element,index));
console.log();
myFemaleFriends.forEach((element,index) => console.log(element,index));

// Using arrow function
const helloWorld = () => {
    return 'hello world';
}
console.log(helloWorld());


// Using arrow functions with forEach on an array
let someNumbers = [1,2,3,4,5,6,7,8,9,10];
someNumbers.forEach((element) => console.log(element*100));
console.log();





// Using callback function
function puraaNaamPattaLagau(pahiloNaam, antimNaam, puraaNaamCb){
    return puraaNaamCb(`${pahiloNaam} ${antimNaam}`);
}


function naamLaiUpperBanau(name){
    return name.toUpperCase();
}

let puraNaam = puraaNaamPattaLagau('Peshal','Sedhai', naamLaiUpperBanau);
console.log(puraNaam);


let fruits = ['apple','banana','orange','mango','pineapple']; 
let fruitsShake =  fruits.map((value, index) => value + " shake");


console.log(fruitsShake);


// Operators 

let testvalue = 'hello';
if(!testvalue)
{
    console.log('heilo');
}


if (true){
    console.log("This is true")
} else {
    console.log();
}
console.log();


// Creating objects
let myIntroduction = {
    name: 'peshal',
    age: 20,
    address: 'kathmandu',
    email:'peshalsedhai@gmail.com',
    phoneNumber: '984-123-4567',
    isCute: true,
}



console.log(`My name is ${myIntroduction.name}. 
I am ${myIntroduction.age} years old. 
I live in ${myIntroduction.address}.
My email is ${myIntroduction.email}. 
My phone number is ${myIntroduction.phoneNumber}. 
Am I chad? ${myIntroduction.isCute}.`);

// delte am i chad property

delete myIntroduction.isCute;

// add new property

myIntroduction.isLearningJs = true;


console.log(`He's learning JS, ${myIntroduction.isLearningJs}.`)


// make an object and a nested object inside of it. use const and variable be birdNest

const birdNest = {
    bird: {
        name: 'Lil Birdy',
        feathers: 'white',
        color: 'black',
        isCute: true,
    },

    breed: {
        name: 'Parrot',
        canSpeak: true,
        canFly: true,
        kingdom:{
            name: 'Animalia',
            phylum: 'Chordata',
            class: 'Aves',
            order: 'Psittaciformes',
            family: 'Psittacidae',
        }
    }
}


// console log all the properties in a table format

console.log(`Bird Name: ${birdNest.bird.name}
Bird Feathers: ${birdNest.bird.feathers}
Bird Color: ${birdNest.bird.color}
Bird is Cute: ${birdNest.bird.isCute}
Breed Name: ${birdNest.breed.name}
Breed can Speak: ${birdNest.breed.canSpeak}
Breed can Fly: ${birdNest.breed.canFly}
Kingdom Name: ${birdNest.breed.kingdom.name}
Phylum Name: ${birdNest.breed.kingdom.phylum}
Class Name: ${birdNest.breed.kingdom.class}
Order Name: ${birdNest.breed.kingdom.order}
Family Name: ${birdNest.breed.kingdom.family}`);



console.log(birdNest['bird']['name']);
console.log(birdNest['breed']['kingdom']['family']);


// Using the object.keys and object.values methods
// To get Object keys as an array:
const birdNestKeys = Object.keys(birdNest);

// To get values as an array
const birdNestValues = Object.values(birdNest);

console.log();
console.log(birdNestKeys);
console.log(birdNestValues);
console.log();


// Using the for in loop to iterate through an object

for (let birdNestKeys in birdNest){
    console.log(birdNestKeys);
}
console.log();

for (let birdNestKeys in birdNest){
    // console.log(birdNest[birdNestKeys]);
    console.log(`${birdNestKeys}: ${birdNest[birdNestKeys]}`);
}


// Self timeout function
// console.log(`oneSecTimeout initiating`);
// let oneSecTimeout =  setTimeout(function example() {
// 	console.log('One second has passed');
// },1000);





// let timeout = setTimeout
// (function(argument){console.log(`${argument}`);}, 1000, "IIMS");

// Self interval function
// let i = 0;
// const timeCounter = setInterval(() => {
//     i++;
//     console.log(`${i} seconds have passed`);
//     if (i === 5){
//         clearInterval(timeCounter);
//     }
// },1000);


// Making a second counter that keeps on checking if the first counter has reached 5 seconds
// let j =0;
// const timeCounter2 = setInterval(() => {
//     j++;
//     if (i === 5){
//         clearInterval(timeCounter);
//     }
// },1000);



const hihello = ['hello','hi'];
hihello.push('hey');
console.log(hihello);

hihello.shift();
console.log(hihello);


// write a examplePromise function 

// function examplePromise(){
//     return new Promise((resolve, reject) => {
//         resolve ('Promise resolved');
//     });
// }


// examplePromise().then((result) => console.log(result));



// write example promise then result console log result, catch error as error and finally as this will always run
const examplePromise1 = () => {
    return new Promise((resolve, reject) => {
        resolve('Promise resolved');
    });
};

examplePromise1()
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
    .finally(() => console.log('This will always run'));

