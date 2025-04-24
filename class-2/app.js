// Lexical Environment


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
 