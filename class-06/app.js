// constructor function
// new Keyword
// this Keyword



// In JavaScript, a constructor function is a special type of function used to create and initialize objects. It acts as a blueprint for creating multiple instances of the same type of object.
    // Syntax
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// } 
    // How to Use It:
    // You use the new keyword to create an object from a constructor function:
// const person1 = new Person("Alice", 30);
// const person2 = new Person("Bob", 25);

// console.log(person1.name); // "Alice"
// console.log(person2.age);  // 25

// Key Points:
// nside the function, this refers to the new object being created.
// You must use the new keyword when calling a constructor function, or this will not refer to the new object.


// new Keyword
// JavaScript mein jab aap constructor function ya class ka object banana chahte hain, to new keyword use karte hain.
// Ek naya khaali object {} banata hai.
// Us naye object ko constructor function ya class ke andar this bana deta hai.
// Constructor ya class ka code chalaata hai, aur this ke zariye properties set karta hai.
// Last mein wo object return kar deta hai.


// class Car {
//   constructor(brand, model) {
//     this.brand = brand;
//     this.model = model;
//   }
//   drive() {
//     console.log(`${this.brand} ${this.model} chal rahi hai...`);
//   }
// }
    //  `new` ka use karke object banate hain
// const car1 = new Car("Toyota", "Corolla");
// const car2 = new Car("Honda", "Civic");
// car1.drive(); // Output: Toyota Corolla chal rahi hai...
// car2.drive(); // Output: Honda Civic chal rahi hai...


// this Keyword
// this ek special keyword hai jo current context (yaani kis cheez ke andar ho) ko refer karta hai.
// this ka matlab hota hai "yeh object jiske andar hum hain."