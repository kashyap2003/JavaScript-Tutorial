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