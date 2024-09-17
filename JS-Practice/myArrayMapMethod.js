// function myMapMethod(callback){
//     let array = [];
//     // console.log(this);
//     for (let i = 0; i < this.length; i++) {
//         let currentElement = this[i];
//         array.push(callback(currentElement,i,this))
//     }
//     return array;
// }

// function insideMap(element,index,arr){
//     return element*2;
// }
// let sum = 0;
// Array.prototype['myMapMethod'] = myMapMethod;
// // console.log(Array.prototype)
// let arr = [4,7];

// console.log(arr.myMapMethod(insideMap)); 


// let personName = "Ndi"
// let obj = {
//     // personName : "John",
//     age : 30,
//     sayHi(){
//         console.log(this.personName);
//     }
// }
// obj.__proto__.personName = "Perry"
// obj.sayHi();
// console.log(obj.__proto__);
// console.log(Object)

// Explain me step by step what happens in this code

// let outerObj = {
//     name: "Outer",
//     innerObj: {
//         //name: "Inner",
//         sayHi() {
//             console.log(name);
//         }
//     }
// };

// outerObj.innerObj.sayHi();  // Outputs: "Inner"

// let a = 'Global';

// function outerFunction() {
//     //a = 'Outer';

//     function innerFunction() {
//         //let a = 'Inner';
//         console.log(a);
//     }

//     innerFunction();
// }

// outerFunction();

// let parentObj = {
//     a : 54,
//     childObj : {
//         // a : 100,
//         printNumber : function(){
//             // this.a = 1
//             console.log(this.a);
//         }
//     }
// }

// parentObj.childObj.__proto__ = parentObj;
// parentObj.childObj.printNumber()
// why output is undefined
// Explain me local scope , parent scope & global scope of printNumber

// let myObj = {
//     name : "Sam"
// }

// function Person(name) {
//     this.name = name;
// }

//   // Adding a method to the prototype of Person
// Person.prototype.greet = function() {
//     console.log(`Hello, my name is ${this.name}`);
// };

// const john = new Person('John');
// //   john.greet(); // 'Hello, my name is John'

// console.log(john)
// console.log(john.__proto__);

// console.log(myObj)
// console.log(myObj.__proto__);

// let user = {
//     firstName: "Ilya",
//     sayHi : ()=>{
//         console.log("sayHi this : ",this)
//     },
//     sayHello(){
//         let arrow = () => {
//             console.log(this)
//             console.log(this.firstName);
//         }
//         arrow();
//     }
// };

// user.sayHi();
// user.sayHello()

// function a(){
//     console.log(this.name)
// }

// let obj = {
//     name : "abc",
// }

// let person = {
//     name : 'Mark',
// }

// person.a();

// let arr = [41,1,5,88];
// arr.age = 100;

// for (const key in arr) {
//     const element = arr[key];
//     console.log(element)
// }

// for (const iterator of arr) {
//     console.log(iterator,'for Of')
// }

// class Button {
//     constructor(name) {
//         this.name = name;
//     }
    
//     clickHandler() {
//         console.log(`${this.name} clicked`);
//     }
    
//     setup() {
//         // ()=>{
//         //     this.clickHandler()
//         // }
//         document.querySelector('button').addEventListener('click',this.clickHandler);
//     }
// }

// const button = new Button('Submit');
// button.setup(); // Ensures `this` in `clickHandler` refers to `button`

// const newButton = new Button('Second Button!');
// newButton.setup()
// what is the value of this inside bind

// class Test {
//     constructor(name) {
//         this.name = name
//     }
//     sayHi () {
//         function q(){
//             // console.log("SayHi : ",this)
//             console.log(this);
//         }
//         q()
//     }
//     sayHello () {
//         setTimeout( () =>   {
//             // console.log("SayHello : ",this)
//             console.log(this.name , this);
//         },1000)
//     }
// }
// const test1 = new Test('savan')
// test1.sayHi();
// test1.sayHello();

// let obj = {
//     x: 5,
//     y: 10,
//     showContext: function() {
//         console.log(this, this.x, this.y);
//     }
// };

// console.log(this)
// obj.showContext() 


// const newFunction = obj.showContext;
// newFunction();


// let a = {
//     name: 'savan',
//     b: {
//         a:1
//     }
// }
// let b = {
//     name: 'jay'
// }

// function test() {
//     console.log(this);
// }

// test.call(a)


// function showName(a) {
//     console.log(this.name , a);
// }


// class Display1 {

//     name = "React";
//     displayName() {
//         const a = showName.bind(this); 
//         a('a')
//     }
// }


// class Display2 {

//     name = "Angular";

//     displayName() {
//         showName.call(this)
//     }
// }

// const obj1 = new Display1();
// const obj2 = new Display2();
// obj1.displayName();
// obj2.displayName();

// let obj = {
//     a : function(){
//         function b(){
//             console.log(this);
//         }
//         b()
//     },
// }

// obj.a();

// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     greet() {
//         function delayedGreeting() {
//             console.log(`Hello, my name is ${this.name}`); // `this` does not refer to the instance
//         }
//         // setTimeout(delayedGreeting, 1000); // `this` inside `delayedGreeting` is not bound to the instance
//         delayedGreeting()
//     }
// }

// const charlie = new Person('Charlie');
// charlie.greet(); // Logs: Hello, my name is undefined (because `this` is not bound correctly)

// var a= 45;
// let obj = {
//     a : 15,
//     b : function(){
//         console.log(this.a)
//     }
// }

// function myFunc(callback){
//     callback()
// }
// myFunc(obj.b); 


// let a= 45;
// let obj = {
//     a : 15,
//     b : function(){
//         console.log(this.a)
//     }
// }

// function myFunc(callback){
//     callback()
// }
// myFunc(obj.b); 

// explain me the differnce between above 2 codes
// setTimeout(obj.b);

// let user = {
//     firstName: "John",
//     sayHi() {
//         console.log(`Hello, ${this.firstName}!`);
//     }
// };

// setTimeout(user.sayHi, 2000);

function mul(a,b){
    console.log(a*b)
}

function double(callback,c){
    console.log("The double of ",c);
    callback(2,c);
}

double(mul,7);
