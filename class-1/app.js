// code Execution
// callstack
// different between undifine or is not defined
// window
// variable scoping


// what is javascript
// javascript is a single thread and synchronous language which meane he run the code line by line of code.

// javascript code Execution
// The execution context in JavaScript is an abstract concept that defines the environment in which code is executed. It is a crucial part of understanding how JavaScript works behind the scenes. Whenever JavaScript code runs, it does so within an execution context.
// javascript code execute in two phace memory and code and run first memory phase
//Memory
// The memory phase of the JavaScript execution context is the initial stage where the JavaScript engine sets up the environment for code execution. It is also called the "variable environment".
// memory stage ma variable init phase ma save hota ha our us ke value undifine save hote ha our pher code phase jab chalta ha to us line of code ka chlna ka bade value update ho kar jo apna  value rhakhe ha yo ho gate ha
// memory stage ma funtion key and value ka pere ma pura fuction mathord ke tarha store hotha hota ha like fuction name : pura fuction ka under ka line of code
//code
// The code execution phase in which the variables are assigned their value and the code is run line by line .
// The code execution phase update the value to undifine sa actual value .
// The code execution phase function create your own code execution context in which same process . use callstack.


// call stack
// The call stack in JavaScript is a mechanism that tracks the execution of function calls in a Last-In-First-Out (LIFO) manner. It's essentially a stack data structure that keeps track of the order in which functions are called.
// When a function is called, it's added to the top of the call stack. When that function finishes executing, it's removed from the stack, and control returns to the function below it. This process continues until the stack is empty, indicating that all function calls have completed.
// The call stack plays a vital role in managing the flow of execution in JavaScript programs. It ensures that functions are executed in the correct order and that control is returned to the appropriate location after each function call.

// undifine or not define
// undifine
// undifine jab ata ha jab memory phase excute hona per value defult undefine save hogate ha our code phase ma us ko updated value nahi milte
// is not defined
// is not defined jab ata ha memory phase execute hogata ha our us ko variable nahi milta our code phase ma hum us variable ka istaml karta ha to ya error ata ha

// window
// The window object is the global object of JavaScript when run within a browser and represents the browser window. All browsers support it. It contains as members all global JavaScript objects, functions, and variables. Such variables become properties of the window object, such functions become methods of the window object.
// Below shows the use of a window method, .alert(), to display a message to the user:
// window.alert('Hello World!');
// Because the window object is global, the “window.” portion can also be omitted:
// alert('Hello World!');


// variable scoping
// Scope determines the accessibility (visibility) of variables.
// JavaScript variables have 3 types of scope:
// Block scope
// Function scope
// Global scope

// Block scope
// Before ES6 (2015), JavaScript variables had only Global Scope and Function Scope.
// ES6 introduced two important new JavaScript keywords: let and const.
// These two keywords provide Block Scope in JavaScript.
// Variables declared inside a { } block cannot be accessed from outside the block:

// {
//     let x = 2;
// }
// x can NOT be used here

// Variables declared with the var keyword can NOT have block scope.
// Variables declared inside a { } block can be accessed from outside the block.
// {
//     var x = 2;
//   }
//   // x CAN be used here


// Function scope
// Variables declared within a JavaScript function, are LOCAL to the function:

// code here can NOT use carName
// function myFunction() {
//     let carName = "Volvo";
// code here CAN use carName
//   }
// code here can NOT use carName
  
// Local variables have Function Scope:
// They can only be accessed from within the function.
// JavaScript has function scope: Each function creates a new scope.
// Variables defined inside a function are not accessible (visible) from outside the function.
// Variables declared with var, let and const are quite similar when declared inside a function.


// Global scope
// A variable declared outside a function, becomes GLOBAL.
// A global variable has Global Scope:
// // All scripts and functions on a web page can access it. 
// Variables declared Globally (outside any function) have Global Scope.
// Global variables can be accessed from anywhere in a JavaScript program.
// Variables declared with var, let and const are quite similar when declared outside a block.
// They all have Global Scope

