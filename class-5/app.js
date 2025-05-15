// Call Stack
// Web APIs (Browser)
// Callback Queue / Task Queue
// Microtask Queue 
// Event Loop moves



// Call Stack:
// The Call Stack is where the JavaScript engine keeps track of all function calls. It’s a stack data structure, meaning the most recent function call is added to the top, and when the function finishes executing, it’s removed (popped) from the stack.
// Synchronous code is executed in the call stack one by one.
// When a function is called, it gets pushed onto the stack.
// Once the function finishes, it is popped from the stack.
    //     Example:
    // function greet() {
    //   console.log('Hello');
    // }
    // greet();  // 'Hello' gets printed.
// The flow here is simple:
// greet() gets added to the call stack, runs, and then is removed from the stack after execution.


// Web APIs (Browser):
// Web APIs are provided by the browser (or the environment where the code runs, like Node.js). They handle things that are asynchronous, such as:
// Timers (setTimeout, setInterval)
// AJAX requests (fetch, XMLHttpRequest)
// DOM Events (like clicks, mouse movements, etc.)
// When asynchronous code is executed (e.g., setTimeout()), it's not handled directly by JavaScript itself, but instead, it’s passed off to the Web API, which handles it in the background while JavaScript continues executing other synchronous code.
        // Example:
    //     console.log('Start');
    // setTimeout(() => {
    //   console.log('This is a delayed message');
    // }, 2000);
     // console.log('End');
// In the above example:
// The setTimeout function doesn’t block the rest of the code. Instead, it’s handed off to the Web API to execute in the background.
// JavaScript continues executing console.log('End') immediately, without waiting for setTimeout.



// Callback Queue (Task Queue):
// Once an asynchronous task (like setTimeout or an event listener) is completed, its callback function (the code that was passed into the asynchronous function) is placed in the Callback Queue (also known as the Task Queue).
// This queue stores tasks that are ready to be executed, but only when the call stack is empty.


//  Microtask Queue:
// The Microtask Queue is similar to the callback queue, but it has higher priority. It stores tasks like:
// Promise callbacks (.then(), .catch(), .finally())
 // MutationObserver callbacks
// Whenever a promise is resolved, its .then() or .catch() handler is pushed into the Microtask Queue. These tasks are executed before any tasks in the Callback Queue, even if the Callback Queue has tasks that are ready to execute.


// Event Loop:
// The Event Loop is the mechanism that keeps JavaScript running asynchronously. It constantly checks the Call Stack, Microtask Queue, and Callback Queue to determine which function should be executed next.
// Here’s how it works:
// The Event Loop first checks if the call stack is empty. If the stack is not empty, it waits until the stack is clear before proceeding.
// If the stack is empty, the Event Loop will:
// First, execute any tasks in the Microtask Queue (which has higher priority).
// Once the Microtask Queue is empty, it will start processing tasks in the Callback Queue.
// Once the Event Loop finishes executing all tasks in the microtask queue and the callback queue, it can re-check the call stack for new tasks.


        // How It All Works Together:
// Let’s use a practical example with both a setTimeout() (which goes to the Callback Queue) and a Promise (which goes to the Microtask Queue).
// console.log('Start');
// setTimeout(() => {
//   console.log('This is from setTimeout');
// }, 0);
// Promise.resolve().then(() => {
//   console.log('This is from Promise');
// });
// console.log('End');
        // Execution Flow:
// Step 1: console.log('Start') gets executed, prints "Start".
// Step 2: setTimeout() is called, but instead of running its callback right away, it’s handed off to the Web API.
// Step 3: Promise.resolve().then() is called. The .then() callback is pushed to the Microtask Queue because it’s a promise.
// Step 4: console.log('End') runs, printing "End".
// Step 5: The call stack is empty, so the Event Loop checks the Microtask Queue. It finds the promise callback and executes it, printing "This is from Promise".
// Step 6: Finally, the Event Loop checks the Callback Queue. It finds the setTimeout callback and executes it, printing "This is from setTimeout".
    // output
// Start
// End
// This is from Promise
// This is from setTimeout


        // Summary of the Event Loop Process:
// Call Stack: Executes synchronous code
// Web APIs: Handles asynchronous tasks like timers, AJAX, etc.
// Microtask Queue: Stores promises and other tasks with high priority.
// Callback Queue: Stores other tasks like setTimeout callbacks.
// Event Loop: Keeps checking the call stack, and processes tasks from the Microtask Queue and Callback Queue in a specific order.
