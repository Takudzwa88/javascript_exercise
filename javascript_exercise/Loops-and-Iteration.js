/* Module 6: Loops and Iteration - Exercises*/

/* EXERCISE 1: Print Numbers 1 to 10
 Use a for loop to print numbers from 1 to 10.*/

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

/* EXERCISE 2: Print Even Numbers from 1 to 20
 Use a for loop and if statement to print only even numbers between 1 and 20. */

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

/* EXERCISE 3: Print Each Character in a Word
 Use a for...of loop to print each letter in the word "bootcamp". */

let word = "bootcamp";
for (let char of word) {
    console.log(char);
}

/*  EXERCISE 4: Countdown from 10 to 1
 Use a while loop to print numbers from 10 down to 1. */

let countdown = 10;
while (countdown >= 1) {
    console.log(countdown);
    countdown--;
}

/*  EXERCISE 5: Sum All Numbers in an Array
 Use a loop to add all the numbers in this array:
 let numbers = [3, 7, 2, 9, 5];
 Print the total sum.*/

let numbers = [3, 7, 2, 9, 5];
let totalSum = 0;   
for (let number of numbers) {
    totalSum += number;
}
console.log("Total Sum:", totalSum);

/*  EXERCISE 6: Count Vowels in a Word
 Use a loop and if statement to count how many vowels (a, e, i, o, u) are in the word "developer". */

let wordToCheck = "developer";
let vowelCount = 0;
for (let char of wordToCheck) {
    if ("aeiou".includes(char)) {
        vowelCount++;
    }
}
console.log("Number of vowels:", vowelCount);

/*  EXERCISE 7: Multiply Each Number by 2
 Use a loop to multiply each number in this array by 2 and print the result:
 let nums = [1, 4, 6, 8]; */

let nums = [1, 4, 6, 8];
for (let num of nums) {
    console.log(num * 2);
}

/* EXERCISE 8: FizzBuzz Challenge (Bonus)
 Print numbers from 1 to 30, but:- If a number is divisible by 3, print "Fizz"- If divisible by 5, print "Buzz"- If divisible by both 3 and 5, print "FizzBuzz"
 Otherwise, just print the number.*/

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}