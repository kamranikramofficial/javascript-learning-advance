// Lexical Environment
// Scope Chaining
// 

// Lexical Environment
// JavaScript mein, Lexical Scoping ka matlab hai ke function kis jagah par likha gaya hai, usi jagah ke variables ko access kar sakta hai. Matlab agar ek function dusre function ke andar hai, to inner function (jo andar likha hai) ko bahar wale function ke variables mil sakte hain.

//Example
// function outer() {
//     let a = 10; // Ye variable outer function ke andar hai
//     function inner() {
//         let b=10
//         console.log(a); // inner function ko a mil jayega
//         function nested() {
//             console.log(a); // inner function ko a mil jayega
//         }
//         nested()
//     }
//     function inner() {
//         console.log(b); //not  accessa
//         function nested() {
//             console.log(a);  //access
//         }
//         nested()
//     }
//     inner(); // Outputs: 10
// }
// console.log(a); //not  access
// outer();

//point
// Lexical Environment ya hota ha ka jab callstack hota ha to yoh function ka undar memory phase ka refrence la kar jata ha
// Lexical Environment siref  function ka under function matlab nested fuction ma yo ap na parante ka virable lata ha bas na ka apna sibling our child ka


// Scope chaining
// Scope chaining is the process where JavaScript checks different layers of scopes to find a variable, starting from the local scope and moving outward to the global scope. It ensures that functions have access to variables in their scope and in outer scopes.
// point
// When you access a variable inside a function or block, JavaScript checks the current scope first.
// If it doesn't find the variable there, it moves to the outer scope.
// This continues until it reaches the global scope.
// example
// let globalVar = "I am global";
// function outerFunction() {
//     let outerVar = "I am outer";
    
//     function innerFunction() {
//         let innerVar = "I am inner";
//         console.log(innerVar);    // Accesses innerVar
//         console.log(outerVar);    // Accesses outerVar from outer scope
//         console.log(globalVar);   // Accesses globalVar from global scope
//     }
//     innerFunction();
// }
// outerFunction();
