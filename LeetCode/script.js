// Question 1 : Write a function createHelloWorld. It should return a new function that always returns "Hello World".

// var createHelloWorld = function() {
//     return function(...args) {
//         return "Hello World";
//     }
// };

// let a = createHelloWorld();
// console.log(a());

// Question 2 : Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more 
// than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

// let createCounter = function(n) {
//     return function() {
//         return n++;
//     };
// };
// let a = createCounter(10);
// console.log(a())

// Question 3 : To Be Or Not To Be
// var expect = function(val) {
//     return {
//         toBe(anotherVal){
//             if(val === anotherVal){
//                 return true;
//             }
//             else{
//                 throw new Error("Not Equal");
//             }
//         },

//         notToBe(anotherVal){
//             if(val !== anotherVal){
//                 return true;
//             }
//             else{
//                 throw new Error("Equal");
//             }
//         }
//     }
// };

// let a = expect(5).toBe(null);
// console.log(a);

// Question 4 : 
var createCounter = function(count) {
    let originalCount = count;
    return {
        increment(){
            count++;
            return count;
        },

        decrement(){
            count--;
            return count;
        },

        reset(){
            count = originalCount;
            return count;
        }
    }
};

let a = createCounter(5);
console.log(a.increment());
console.log(a.increment());
console.log(a.decrement());
console.log(a.increment());
console.log(a.increment());
console.log(a.reset()); 
