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


const helloWorld = () => {
    return 'hello world';
}

console.log(helloWorld());


let someNumbers = [1,2,3,4,5,6,7,8,9,10];
someNumbers.forEach((element) => console.log(element*100));


