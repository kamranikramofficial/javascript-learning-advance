//  Optional Chaining 
// Nullish Coalescing Operator


    //  Optional Chaining 
// Optional chaining is a lifesaver when working with data where properties may or may not exist — especially in API responses.   
    // Syntax:
// object?.property
// object?.method?.()
// object?.property?.[index]
    // Example
// let user = {
//   name: "Ali",
//   address: {
//     city: "Lahore"
//   }
// };
// console.log(user.address.city);         // Lahore 
// console.log(user.contact?.phone);       // undefined  (no error )


// Nullish Coalescing Operator
// The Nullish Coalescing Operator (??) allows you to provide a default value only when a variable is null or undefined.
    // Syntax:
// let result = value ?? defaultValue;
    // Example
//     let name = null;
// let finalName = name ?? "Guest";

// console.log(finalName); // "Guest"