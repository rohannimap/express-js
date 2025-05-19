// var count = 0;
// (function () {
//     if (count === 0) {
//     var count = 1;
//     console.log("Inside:", count);
//   }
//   console.log("Outside:", count);
// })();

// async function test() {
//   console.log(1);
//   await Promise.resolve(console.log(2));
//   console.log(3);
// }
// test();
// console.log(4); 

// const obj = {
//   name: "John",
//   getName: function () {
//     return this.name;
//   },
// };
// const getName = obj.getName;
// console.log(getName());


// async function test() {
//   console.log(1);
//   await Promise.resolve(console.log(2));
//   console.log(3);
// }
// test();
// console.log(4); 


// function createCounter() {
//   let count = 0;
//   return {
//     increment: () => ++count,
//     decrement: () => --count,
//     value: () => count
//   };
// }
// const counter = createCounter();
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.value()); 
// console.log(createCounter().increment());
// console.log(createCounter().increment());
// console.log(createCounter().increment());

// console.log(typeof null);
// console.log(typeof NaN);


// console.log([] + {});   
// console.log({} + []);   

// async function sayHi() {
//   const result = await Promise.resolve("hii!");
//   console.log(result);
// }
// sayHi();
// console.log("After call");


// let user = { name: "A", details: { age: 20 } };
// let clone = { ...user };
// clone.details.age = 30;
// console.log(user.details.age);  



// function wait(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }
// async function loadData() {
//   console.log("Start");
//   await wait(1000);
//   console.log("After 1 second");
// }
// loadData();
// console.log("Main thread continues");


// async function getData() {
//   try {
//     await Promise.reject("Failed to load");
//   } catch (err) {
//     console.log("Caught error:", err);
//   }
// }
// getData();


// async function combo() {
//   const value = await Promise.resolve("A");
//   console.log(value);
//   Promise.resolve("B").then(console.log);
//   console.log("C");
// }
// combo();
// console.log("D");


// async function inner() {
//   return "Inner done";
// }
// async function outer() {
//   const result = await inner();
//   console.log(result);
// }
// outer();


// async function example() {
//   setTimeout(() => {
//     console.log("Timeout");
//   }, 0);
//   await Promise.resolve();
//   console.log("After await");
// }
// example();
// console.log("Main thread");


// async function sequence() {
//   await Promise.resolve("A");
//   console.log("Step 1");
//   await Promise.resolve("B");
//   console.log("Step 2");

//   console.log("End");
// }
// sequence();
// console.log("Outside");


// const ids = [1, 2, 3];
// ids.forEach(async (id) => {
//   await new Promise(res => setTimeout(res, 1000));
//   console.log("Processed", id);
// });

// async function test() {
//   console.log("1");
//   await Promise.reject("Oops");
//   console.log("2");
// }
// test().catch(err => console.log("Caught:", err));


// async function sequence() {
//   await Promise.resolve("A").then((data)=>console.log(data));
//   console.log("Step 1");
//   await Promise.resolve("B");
//   console.log("Step 2");
//   console.log("End");
// }
// sequence();
// console.log("Outside");


// async function nested() {
//   return "Inner";
// }
// async function outer() {
//   const result = await nested();
//   console.log("Result:", result);
// }
// outer();

// (async () => {
//   await Promise.reject("Oops!");
//   console.log("after reject");
// })().catch((err)=>{
// console.log(err);
// });


// Promise.resolve().then(() => console.log("Promise 1"));
// async function run() {
//   console.log("Start");
//   await null;
//   console.log("End");
// }
// run();
// console.log("Outside");


// async function getData() {
//   try {
//      await Promise.reject("Failed to load");
//   } catch (err) {
//     console.log("Caught error:", err);
//   }
// }
// getData()


// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }
// async function go() {
//   console.log("Wait...");
//   await sleep(2000);
//   console.log("2 seconds later");
// }
// go();


// function delayLog(msg, ms) {
//   return new Promise((resolve) => setTimeout(() => {
//     console.log(msg);
//     resolve();
//   }, ms));
// }
// async function main() {
//   await delayLog("A", 1000);
//   delayLog("B", 500);
//   await delayLog("C", 0);
//   console.log("Done");
// }
// main();











