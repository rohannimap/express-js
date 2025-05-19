// // function outer() {
// //   let count = 0;
// //   return function inner() {
// //     console.log(count);
// //     count++;
// //   };
// // }

// // const counter = outer();
// // counter(); // 1
// // counter(); // 2

// function person(name){
//   // sayhello(){
//   //   console.log("hello");
    
//   // }
//   this.name = name
// }

// person.prototype.sayHii = function()  {
//   console.log(`this is the ${this.name}`);
  
// }

// const myName = new person("Rohan")
// // const student = Object.create(person)
// // student.name = "Rohan"

// // student.sayhello()
// // console.log(student.name);
// // student.name
// // console.log(prototype);

// myName.sayHii()

// // console.log(__proto__);

// console.log([] + []);
// console.log([] + {});
console.log({} + []);
console.log({} + {});


let a = [1, 2, 3];
a[10] = 100;
console.log(a.length);
console.log(a);

// console.log(typeof NaN)

// console.log(0.1 + 0.2 === 0.3);

// let x = (function() {
//   return typeof arguments;
// })();
// console.log(x);


// let obj = { a: 1 };
// let key = "a";
// obj[key] = 2;
// console.log(obj.a);
// console.log(obj["a"]);
// console.log(obj);

// console.log(typeof null);
// console.log(null instanceof Object);


// let a = 1;
// let b = a++;
// let c = ++a;
// console.log(a, b, c);


// console.log([] == []);
// console.log(Object == Object);


// const foo = () => {        // undefined
//   return
// {
//     message: "Hello"
//   };
// };
// console.log(foo());


// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);

// console.log(a[b.toString()]);

// console.log([] + 1 + 2);
// console.log(true + false);
const result = {} + [];
console.log(result);






