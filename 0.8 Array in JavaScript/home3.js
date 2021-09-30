console.log('Hello');

// alert("Hello this is Kashyap");

// How to write a comment inline

// Variables
var b = 'Kashyap';
console.log(b);

var someNumber = 23;
// console.log(someNumber);

// Manipulate DOM with JavaScript
/**...It's just an fancy way of saying change HTML with JavaScript */

// var age = prompt('What is your age?') // It will popup msg to type your age.
// document.getElementById('someText').innerHTML = "Your age is " + age; // This will display age as HTML.

// NUmbers in JavaScript
var num1 = 23;

// Incrementing by one
num1++;
console.log(num1);

// Decrementing by one
num1--;
console.log(num1);

// Divide /, multiply *, remainder %
console.log(num1 % 6);

// Increment/Decrement by any number
num1 += 10;
console.log(num1);

/** Functions
 * 1. Create a function
 * 2. Call a function
 */

// Create
function fun() {
    console.log('This is a function')
}

// Call
fun();

/**Lets make a function that take in a name
 * and say hello followed by your name
 * 
 * For Example
 * 
 * Name = Kashyap
 * Returns + Hello Kashyap
 */

function greeting() {
    var name = prompt('What is your name?');
    var result = 'Hello' + ' ' + name; // String Concatination
    console.log(result)
}

// greeting();

// How do arguments work in functions?
// How do we add 2 numbers in function?

function sumNumbers(num1, num2) {
    var result = num1 + num2
    console.log(result)
}

sumNumbers(23, 56)

function name(yourName) {
    var result = 'Hello' + ' ' + yourName; // String Concatination
    console.log(result)
}

// var Name = prompt("What's Your name?")
// name(Name)

/**
 * While loop

var num = 0;

while (num<100) {
    num += 1
    console.log(num)
}
*/

// For Loop

for (let x=0; x<100; x++)
{
    console.log(x)
}

//Data types
let yourAge = 18; // number
let yourName = "Kashyap"; // string
let myName = {first: "Kashyap", last: "Shahare"}; // Object
let truth = false; // Boolean
let grocaries = ['apple', 'banana', 'oranges']; // array
let random; // UNdefined
let nothing = null; // value null


// String in JavaScript (common methods)
let fruit = 'Banana,Apple,Orange,Mango';
let moreFruit = 'Banana\nApple'; // New line

console.log(moreFruit);
console.log(fruit);
console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2, 6));
console.log(fruit.replace('Ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(4));
console.log(fruit[3]);
console.log(fruit.split(',')); // Split by comma
console.log(fruit.split('')); // Split by Character by default

// Array

let Fruits = ['Banana', 'Apple', 'Pineapple', 'Oranges']

// let Fruits = new Array('Banana', 'Apple', 'Pineapple', 'Oranges')  // You can also create array like this

console.log(Fruits[2]) // You can also write here alert insted of console.log

Fruits[0] = 'Pear'
console.log(Fruits);

for (let i = 0; i<Fruits.length; i++)
{
    console.log(Fruits[i]);
}

// Array Common Method

console.log('To string', Fruits.toString()); // It will print what's inside Fruits into string
console.log(Fruits.join('-')); // This will seperate every element of array by '-'. 
console.log(Fruits.pop(), Fruits); // Remove Last element in array
console.log(Fruits.push('Blackberry'), Fruits); // append(add) Last element in array
console.log(Fruits[4]);
Fruits[Fruits.length] = 'New Fruit'; // Same as push
console.log(Fruits);
Fruits.shift(); // Removes 1st element
console.log(Fruits);
Fruits.unshift('Kiwi'); // Add 1st element
console.log(Fruits);


let Vegetables = ['Asparagus', 'Tomato', "Broccoli"];
let allGroceries = Fruits.concat(Vegetables); // This will combine array
console.log(allGroceries);
console.log(allGroceries.slice(2,5));
console.log(allGroceries.reverse());
console.log(allGroceries.sort()); // It will sort it by alphabetical order


let someNumbers = [5, 10, 23, 56, 356, 3, 45, 47, 24, 4]
console.log(someNumbers.sort(function(a, b) {return a-b})) // Ascending order
console.log(someNumbers.sort(function(a, b) {return b-a})) // Decending order
