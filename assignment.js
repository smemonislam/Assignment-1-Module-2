// Exercise 1: 

// Write a function named destructureExample that takes in an object and an array as parameters. The function should use destructuring to extract the values 'name' and 'age' from the object and the values at index 0 and index 2 from the array. The function should then return an object with the extracted values as properties with name and age.

// function destructureExample({ name, age }, [index0, , index2]) {  
//     const extractedValues = {
//       name,
//       age,
//       index0,
//       index2
//     };
  
//     return extractedValues;
// }

function destructureExample(obj, arr) {  
    const { name, age } = obj
    const [index0, , index2] = arr;
    
    const extractedValues = {
      name,
      age,
    };
  
    return extractedValues;
}

const obj = { name: 'John', age: 30, city: 'New York' };
const arr = [10, 20, 30, 40];

const Example = destructureExample(obj, arr);
console.log(Example);

// Exercise 2:

// Write a function named sumNumbers that takes in multiple numbers as arguments using the rest operator. The function should return the sum of all the numbers.

function sumNumbers(...numbers) {
    const sum = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);
    // let sum = 0;
    // numbers.forEach( (element) => sum += element )
    // numbers.map(element => sum += element)
    return sum;
}

console.log(sumNumbers(1, 2, 3, 4, 5)); // Output: 15

// Exercise 3:


//  Write a function named createGreeting that takes in a name as a parameter and returns a greeting message using template literals. The message should be in the format: "Hello, [name]! Welcome to our website."

function createGreeting(name){
    const greeting = `Hello, ${name}! Welcome to our website.`;
    return greeting;
}

console.log(createGreeting('Alice'));


// Exercise 4: 

// Write a function named isEven that takes in a number as a parameter and returns the string "Even" if the number is even, and "Odd" if the number is odd. Use a ternary operator instead of an if/else statement.

function isEven(number) {
    const result = number % 2 === 0 ? "Even" : "Odd";
    return result;
}

console.log(isEven(7));

// Exercise 5: 

// Convert the following function to an arrow function:

// function multiply(a, b) {
//     return a * b; 
// }

const multiply = (a, b) => a * b;
console.log(multiply(2,2));

// Exercise 6: 

// Write a function named getLargestNumber that takes in two numbers as parameters. The function should return the larger number using short-circuiting and logical operators (&&, ||, ??).


function getLargestNumber(num1, num2) {
    const largestNumber = num1 && num1 > num2 ? num1 : num2;
    return largestNumber;
}

console.log(getLargestNumber(10, 5));


// Exercise 7: 


// Write a function named getAddressCity that takes in an object representing a person's address. The address object has properties 'street', 'city', and 'country'. The function should return the value of the 'city' property if it exists, or the string "Unknown" if it doesn't exist, using optional chaining.


// function getAddressCity(address) {
//     const  city = address.hasOwnProperty('city') ? address.city : "Unknown";
//     return city; 
// }
// const address = { street: '123 Main St', country: 'USA', city: "Khulna" };
// console.log( getAddressCity(address) );

function getAddressCity(address) {
    const city = address?.city || "Unknown";
    return city;
}

const address = { street: '123 Main St', country: 'USA' };
console.log( getAddressCity(address) );

// Exercise 8: 

// Write a function named doubleNumbers that takes in an array of numbers and returns a new array with each number doubled using the array map method.

function doubleNumbers(array) {
    const doubledArray = array.map((number) => number * 2);
    return doubledArray;
}

console.log(doubleNumbers([1, 2, 3, 4, 5]));

// Exercise 9: 

// Write a function named filterEvenNumbers that takes in an array of numbers and returns a new array with only the even numbers using the array filter method.

function filterEvenNumbers(array) {
    const evenNumbersArray  = array.filter((number) => number % 2 === 0 );
    return evenNumbersArray;
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5]));


// Exercise 10: 

// Write a function named sumArray that takes in an array of numbers and returns the sum of all the numbers using the array reduce method.

function sumArray(array) {
    const sum  = array.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0 );
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));

// Exercise 11: 

// Write a function named sortNumbers that takes in an array of numbers and returns a new array with the numbers sorted in ascending order using the array sort method.

// function sortNumbers([...array]){
//     const sortNumbersArray = array.sort()
//     const sortNumbersArray = array.filter((item, index) => array.indexOf(item) === index).sort()
//     return sortNumbersArray;
// }

function sortNumbers(array) {
    // const sortedArray = array.filter((item, index) => array.indexOf(item) === index).sort((a, b) => a - b);
    const sortedArray = array.sort((a, b) => a - b);
    return sortedArray;
}
console.log(sortNumbers([5, 2, 8, 1, 4]));
