/* Exercise 1: 
Write a function named destructureExample that takes in an object and an array as parameters. 
The function should use destructuring to extract the values ​​'name' and 'age' from the object and 
the values ​​at index 0 and index 2 from the array. The function should then return an object with
the extracted values ​​as properties with name and age.*/

// Ans: 
function destructureExample(obj, arr) {
    const { name, age } = obj;
    const [val1, , val2] = arr;
  
    return {name,age};
}
  
const obj = { name: "John", age: 30, city: "New York" };
const arr = [10, 20, 30, 40];
destructureExample(obj, arr);




/* Exercise 2:
Write a function named sumNumbers that takes in multiple numbers as arguments using the rest operator.
The function should return the sum of all the numbers.*/

// Ans:
function sumNumbers(...numbers) {
    let sum = 0;
    for (const num of numbers) {
      sum += num;
    }
    return sum;
}
  
sumNumbers(1, 2, 3, 4, 5);


/* Exercise 3:
Write a function named createGreeting that takes in a name as a 
parameter and returns a greeting message using template literals. 
The message should be in the format: "Hello, [name]! Welcome to our website.*/

// Ans:
function createGreeting(name) {
    return `Hello, ${name}! Welcome to our website.`;
}
createGreeting('Alice');



/* Exercise 4: 
Write a function named isEven that takes in a number as a parameter and returns the string 
"Even" if the number is even, and "Odd" if the number is odd.
Use a ternary operator instead of an if/else statement.*/

// Ans:
function isEven(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}
  
isEven(7);

/* Exercise 5: 
Convert the following function to an arrow function:
function multiply(a, b) {
  return a * b;
}*/

// Ans:
const multiply = (a, b) => a * b;

multiply(7,2);

/* Exercise 6: 
Write a function named getLargestNumber that takes in two numbers as parameters. 
The function should return the larger number using 
short-circuiting and logical operators (&&, ||, ??).*/

// Ans:
function getLargestNumber(num1, num2) {
    return num1 && num2 ? (num1 > num2 ? num1 : num2) : (num1 || num2);
}
  
getLargestNumber(10, 5);

/* Exercise 7: 
Write a function named getAddressCity that takes in an object representing a person's address. 
The address object has properties 'street', 'city', and 'country'. 
The function should return the value of the 'city' 
property if it exists, or the string "Unknown" if it doesn't exist, using optional chaining.*/

// Ans:
function getAddressCity(address) {
    return address?.city ?? "Unknown";
}
  
const address = { street: '123 Main St', country: 'USA' };
  
getAddressCity(address);

/* Exercise 8: 
Write a function named doubleNumbers that takes in an array of numbers and returns a 
new array with each number doubled using the array map method.*/

// Ans:
function doubleNumbers(numbers) {
    return numbers.map(number => number * 2);
}
const numbers = [1, 2, 3, 4, 5];
doubleNumbers(numbers);


/* Exercise 9: 
Write a function named filterEvenNumbers that takes in an array of numbers and returns a 
new array with only the even numbers using the array filter method.*/

// Ans:
function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}
  
  
const inputArray = [1, 2, 3, 4, 5];
const outputArray = filterEvenNumbers(inputArray);

/* Exercise 10: 
Write a function named sumArray that takes in an array of numbers and returns
the sum of all the numbers using the array reduce method.*/

// Ans:
function sumArray(array) {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
  
const numbers2 = [1, 2, 3, 4, 5];
sumArray(numbers2);


/* Exercise 11: 
Write a function named sortNumbers that takes in an array of numbers and returns a 
new array with the numbers sorted in ascending order using the array sort method.*/

// Ans:
function sortNumbers(numbers) {
    return numbers.sort(function(a, b) {
      return a - b;
    });
}
  
const input = [5, 2, 8, 1, 4];
sortNumbers(input);