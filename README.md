# JavaScript-Core-Concepts

This repository contains daily learning notes, summaries, and practice related to the core fundamentals of JavaScript.  
It covers essential building blocks like execution context, call stack, scoping, hoisting, closures, function types, and the event loop — concepts every serious JavaScript developer must understand.

## 🎯 Purpose
- Daily revision and hands-on practice  
- In-depth explanations of how JavaScript actually works  
- A growing reference of my personal JavaScript understanding  

## ✅ Topics Covered

### 📘 Class 1
- **Code Execution**  
  JavaScript code runs in two phases — memory creation and execution.  
- **Call Stack**  
  Manages function calls in a Last-In-First-Out (LIFO) manner.  
- **`undefined` vs `is not defined`**  
  - `undefined`: declared but not assigned.  
  - `is not defined`: variable is never declared.  
- **Window Object**  
  In browsers, `window` is the global object that holds global variables and functions.  
- **Variable Scoping**  
  Scope determines where a variable can be accessed — function or block level.  

### 📘 Class 2
- **Lexical Environment**  
  The environment where variables and functions are physically written, which determines scope access.  
- **Scope Chaining**  
  If a variable is not found in the current scope, JavaScript looks up the outer scopes.  
- **Hoisting**  
  Variables and functions are moved to the top of their scope during the memory phase.  
- **Temporal Dead Zone (TDZ)**  
  The period between entering a block and variable initialization where `let`/`const` cannot be accessed.

### 📘 Class 3
- **Closure**  
  A closure gives you access to an outer function’s scope from an inner function. Closures are created every time a function is created, at function creation time. Useful in data encapsulation, function factories, and maintaining state in async code.

### 📘 Class 4
- **Function Statement / Declaration**  
  Declared with the `function` keyword and hoisted completely.  
- **Function Expression**  
  Assigned to a variable. Not hoisted like declarations.  
- **Anonymous Function**  
  A function without a name, often used in expressions or as arguments.  
- **Function Call & Invocation**  
  Executing the function using parentheses `()`.  
- **IIFE (Immediately Invoked Function Expression)**  
  Runs immediately after being defined: `(function() { console.log("IIFE runs!"); })();`  
- **First-Class Functions**  
  Functions in JavaScript can be passed as values, returned from other functions, and stored in variables.  
- **Arrow Functions**  
  Shorter syntax: `const add = (a, b) => a + b;`  
  Arrow functions do not have their own `this`, `arguments`, or `super`.  
- **Function with Arguments & Parameters**  
  Parameters are variables listed as function inputs. Arguments are the actual values passed.  
- **Default Parameters**  
  Allow initializing parameters with default values: `function greet(name = "Guest") { console.log("Hello, " + name); }`  
- **Named Function Expression**  
  Function expressions with a name, useful for recursion or debugging.  
- **Callback Function**  
  A function passed into another function as an argument, called later.

### 📘 Class 5
- **Event Loop (In-Depth)**  
  JavaScript is single-threaded but handles async tasks using the following components:  
  - **Call Stack**  
  - **Web APIs (Browser)**  
  - **Callback Queue / Task Queue**  
  - **Microtask Queue** (`Promises`, `MutationObserver`)  
  - **Event Loop** moves tasks from queues to the call stack when it's empty  

---

## 💻 Created by Kamran Ikram
