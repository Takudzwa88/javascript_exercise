/* Exercise 1: Declare a variable called firstName and assign your first name to it. */
let firstName = "Takudzwa";
console.log(firstName);

/* Exercise 2 Create variables for: 
● Your age (number) 
● Whether you like coding (boolean) 
● Your favorite color (string)*/

let age = 22;
let likesCoding = true;
let favoriteColor = "Blue";
console.log(age);
console.log(likesCoding);
console.log(favoriteColor);

/*Section 2: Operators and Expressions*/
/* Exercise 3*/
x = 10;
y = 3;
let sum = x + y;
let difference = x - y;
let product = x * y;
let quotient = x / y;
let remainder = x % y;  
console.log("Sum:", sum);
console.log("Difference:", difference); 
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);

/* Exercise 4*/
 let result = (5 + 3) * 2 - 4;   
console.log(result); 

/* Exercise 5*/

console.log(10 > 5); // true
console.log(7 == "7"); // true
console.log(7 === "7"); // false

/* Section 3: Conditional Statements*/
/* Exercise 6
Write a program that checks if a number is positive, negative, or zero using if...else if...else.*/

let number = 1;
if (number > 0) {
    console.log("The number is positive.");
}

else if (number < 0) {
    console.log("The number is negative.");
}

else {
    console.log("The number is zero.");
}

/* Exercise 7
Create an age checker: 
● If age is 18 or above, log “You’re an adult.” 
● If below 18, log “You’re a minor.” */

let ageChecker = 17;
if (ageChecker >= 18) {
    console.log("You're an adult.");
}

else {
    console.log("You're a minor.");
}

/* Exercise 8
Write a program to check if a number is even or odd using the % operator. */

let numberToCheck = 7;
if (numberToCheck % 2 === 0) {
    console.log("The number is even.");
}

else {
    console.log("The number is odd.");
}

/*Section 4: Functions
 Exercise 9 
 Create a function called sayHello that prints “Hello, world!” 
Call the function. */

function sayHello() {
    console.log("Hello, world!");
}
sayHello();

/*Exercise 10 
Write a function greetUser(name) that prints “Hello, [name]!”*/

function greetUser(name) {
    console.log("Hello, " + name + "!");
}
greetUser("Takudzwa");

/* Exercise 11 
Create a function addNumbers(a, b) that returns the sum of two numbers. */

function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(5, 7));

/* Exercise 12 
Write a function convertToFahrenheit(celsius) that converts Celsius to Fahrenheit using the 
formula: 
Fahrenheit = (Celsius × 9/5) + 32 */

function convertToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log(convertToFahrenheit(25)); // Example usage, converting 25°C to Fahrenheit

/* Exercise 13 
Convert this function to an arrow function: 
JavaScript
 function multiply(x, y) { 
return x * y; 
} */

let multiply = (x, y) => {
    return x * y;
}
console.log(multiply(5, 7)); // Example usage

/* Challenge Questions (Optional) 
1. Write a function isEligibleToVote(age) that returns true if age is 18 or older, otherwise 
returns false. */

function isEligibleToVote(age) {
    return age >= 18;
}
console.log(isEligibleToVote(17)); // Example usage, checking if 17 is eligible to vote 

/* 2. Write a function getGrade(score) that: 
● returns "A" if score >= 90 
● "B" if score >= 80 
● "C" if score >= 70 
● "F" if score < 70 */

function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else {
        return "F";
    }
}

console.log(getGrade(85)); // Example usage, checking the grade for a score of 85   






