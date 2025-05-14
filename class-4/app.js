// FUNCTION STATEMENT & FUNCTION DECLARATION 
// FUNCTION EXPRESSION
// ANONYMOUS FUNCTION
// FUNCTION CALL & INVOKING
// IIFE (Immediately Invoked Function Expression):
// First Class Function
// ARROW FUNCTION
// FUNCTION WTIH ARGUMENTS & PARAMETERS
// Default Parameters
// NAMED FUNCTION EXPRESSION
// CALLBACK FUNCTION

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


// FUNCTION WTIH ARGUMENTS & PARAMETERS
// Parameters → Function banate waqt jo variables define karte ho
// Arguments → Jab function ko call karte ho to jo actual values dete ho

// Function with One Parameter
// function sayHello(name) {
//   console.log("Hello, " + name);
// }
// sayHello("Sara");  // Output: Hello, Sara

// Default Parameters
// Agar function call karte waqt koi argument pass nahi kiya gaya, to function automatically default value use karega.
//   syntax
// function functionName(parameter = defaultValue) {
   // code
// }
// function greet(name = "kamran") { 
//   console.log("Welcome, " + name);
// }
// greet();        // Output: Welcome, Guest
// greet("Zara");  // Output: Welcome, Zara



// NAMED FUNCTION EXPRESSION
// JavaScript mein jab tum ek function expression ke through define karte ho aur us function ko koi naam bhi dete ho, usse Named Function Expression kehte hain.
// 📌 Iska use mostly debugging mein helpful hota hai (error stack trace mein naam dikhai deta hai).
        // Syntax:
// const variableName = function functionName(parameters) {
//   // function body
// };
        // Example
// const sayHi = function greet(name) {
//   console.log("Hi, " + name);
// };
// sayHi("Ali");   // Output: Hi, Ali
// greet("Ali"); // ❌ Error: greet is not defined


// First Class Function
// JavaScript mein functions ko first-class citizens maana jata hai.
// Functions ko treat kiya ja sakta hai jaise values/variables — store, pass, return, ya assign kar sakte ho.
// Key Features of First-Class Functions
// Function ko variable mein assign kar sakte ho
// Function ko argument ke tarha mein pass kar sakte ho
// Function ko return kar sakte ho kisi dusre function se
// Function ko array ya object mein store kar sakte ho


// CALLBACK FUNCTION
// Callback function ek aisi function hoti hai jo kisi doosri function ko argument ke roop mein pass ki jaati hai, taake wo baad mein call ho sake.
// "Ek function jo dusre function ke andar call kiya jata hai — as an argument."
// function greet(name) {
//   console.log("Hello, " + name);
// }
// function processUser(callback) {
//   const username = "Ali";
//   callback(username);
// }
// processUser(greet); 

