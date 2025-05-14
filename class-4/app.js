// FUNCTION STATEMENT & FUNCTION DECLARATION 
// FUNCTION EXPRESSION
// ANONYMOUS FUNCTION
// FUNCTION CALL & INVOKING
// IIFE (Immediately Invoked Function Expression):
// First Class Function
// ARROW FUNCTION

// Function Statement &  FUNCTION DECLARATION :
//  Ek complete function likhna jo named ho — yehi function declaration bhi hota hai.
// Example:
// function greet() {
//     console.log("Hello from a function statement!");
//   }
  
// Function Expression : 
// Jab function ko ek variable mein assign kiya jata hai.
// Example:
// const sayHi = function() {
//     console.log("Hello from a function expression!");
//   };
  

// Anonymous Function : 
// Ek function jiska koi naam nahi hota — aksar expressions mein use hota hai.
// Example:
// setTimeout(function() {
//     console.log("Hello from an anonymous function!");
//   }, 1000);
  

// Function Call & Invoking :
//  Jab hum function ka naam likh kar parentheses () ke saath usse chalaate hain.
// Example:
// function showMessage() {
//     console.log("Function is invoked!");
//   }
  
//   showMessage(); // <- yeh call/invoke hai
  



// IIFE (Immediately Invoked Function Expression) :
// Ek aisa function jo furan define hote hi execute ho jata hai — bina kisi alag se call ke.
// Example:
//  (function() {
//     console.log("IIFE chala diya turant!");
//   })();
  


// ARROW FUNCTION
// Arrow function JavaScript ka shorter syntax hai function likhne ka. Yeh ES6 (2015) mein introduce hui thi. Yeh normal function ki tarah hi kaam karti hai, lekin likhne ka tareeqa chhota aur clean hota hai.
// Normal Function:
//     function add(a, b) {
//   return a + b;
// }
//  Arrow Function:
//     const add = (a, b) => {
//   return a + b;
// };

// Ya agar ek hi line ka return hai to aur chhota likh sakte ho:
// const add = (a, b) => a + b;

// Ek hi parameter ho to parentheses hata sakte ho
// const greet = name => `Hi, ${name}!`;
// console.log(greet("Sara"));  // Output: Hi, Sara!

// parameters (kuch pass nahi karna ho) javascript
// const hello = () => "Hello World!";
// console.log(hello());  // Output: Hello World!

// Arrow function with map()
// const numbers = [1, 2, 3, 4];
// const squares = numbers.map(num => num * num);
// console.log(squares);  // Output: [1, 4, 9, 16]

//  Arrow Function aur Normal Function mein Farq
// this ka behavior different hota hai
// Arrow function apna this nahi banata, wo apne parent se inherit karta hai.
// Normal function ka this change ho sakta hai depending on context.
// Arrow function ko constructor ke taur pe use nahi kar sakte.


