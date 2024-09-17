// Constructor Function : They are regular functions 
// It starts with Capital letter & It should be executed the 'new' operator

// function User(name){
//     this.name = name,
//     this.isAdmin = false
// }

// let user=new User("Fisher");
// console.log(user.name);
// console.log(user.isAdmin);

// You can create multiple users using constructors.

/* The new User looks like : 
    function User(name) {
    // this = {};  (internally)

    // add properties to this
    this.name = name;
    this.isAdmin = false;

    // return this;  (internally)
}
*/

// Return from Constructors : 
    // 1. If RETURN is called with a OBJECT then that OBJECT is returned
    // 2. If RETURN is called with a PRIMITIVE then it is IGNORED.
    // 3. IN SIMPLE WORDS : return called with object it returns object in other 
    //    cases it returns this.

// function BigUser(){
//     this.name="John";   
//     return { name : "Big Monster"};
// }

// console.log(new BigUser().name); // Big Monster

// function SmallUser(){
//     this.name="John"; 
//     return;
// }

// console.log(new SmallUser().name); // John

// Methods In Constructors : 

function Employee(name){
    this.name=name;

    function sayHi(){
        console.log(`Hiii , ${this.name}`);
    };
    sayHi();
}

let garry = new Employee("Garry");
// garry.sayHi();
// Employee.sayHi()
// Task 1 : 
// function Calculator(){
//     this.read=function() {
//         this.a=+prompt("Enter a : ");;
//         this.b=+prompt("Enter b : ");;
//     };
//     this.sum=function(){
//         return (this.a + this.b);
//     };
//     this.multiply=function(){
//         return (this.a*this.b);
//     };
// };

// let calc=new Calculator();
// calc.read();
// console.log(`The sum is : `,calc.sum());
// console.log(`The product is : `,calc.multiply());

// Task 2 :

// function Accumulator(startingValue){
//     this.value=startingValue;
//     this.read=function(){
//         this.num=+prompt("Enter the number : ");
//         this.value+=this.num;
//     };
// }
// let accumulator=new Accumulator(2);
// console.log(accumulator.value); 
// accumulator.read();
// accumulator.read();
// console.log(accumulator.value)

function User(name,age){
    this.name = name;
    this.age = age;
    //return this;
}

/* 
    let u1 = User("John",30);
    let u2 = User("Danny",21);

    console.log(u1.name) // OUTPUT : Danny 

    IMPORTANT : 
    As User points to the same reference so it updates the name property
*/
// let u1 = new User("John",30);
// let u2 = new User("Danny",21);

// u1.email = "john@mail.com";
// console.log(u1)
// console.log(u2.email)
// User.prototype.getName = function(){
//     return this.name
// }

// u1.__proto__.setName = function(name){
//     this.name = name;
// }

// u2.setName("Oreo");
// //console.log(u1.__proto__.prototype)
// // console.log(u1.__proto__)
// console.log(u1.__proto__ == User.prototype) // This is TRUE as both reference are same and both are equal
// console.log(User.prototype)

// console.log(u2.getName())

// let a = {
//     value : 5,
// };

// let b = Object.create(a);
// b.name = "Abc";

// a.value = 54;
// console.log(b)

// let vehicle = {
//     speed : 0,
//     accelerate : function(){
//         this.speed+=10;
//     }
// }

// let car = {
//     __proto__ : vehicle
// }

// let bicycle = {
//     __proto__ : vehicle
// }

// car.accelerate();
// bicycle.accelerate();

// console.log(car.speed);
// console.log(bicycle.speed);

// let myMap = new Map();

// myMap.set('1',"One")
// myMap.set(1,"Number")

// console.log(myMap);

// let mySet = new Set();

// let a = {}
// mySet.add(a,1);
// mySet.add(2);

// console.log(mySet);

// function createConfusion(){
//     function SecretFunction(){}

//     SecretFunction.prototype = Array.prototype;

//     let myObj = new SecretFunction();

//     myObj.push(5);
//     myObj.push(10);

//     console.log(myObj);
// }

// createConfusion();

// function test(){
//     let a =5;
//     let b = 10;

//     setTimeout(()=>{
//         console.log(b)
//     })

//     console.log(a)
// }

// test();

// let arr = [1,2,3,4];
// let arr1 = arr;
// arr.push(5);
// console.log(arr);

// let arr1 =[1,2,3];
// let arr1Copy = Array.from(arr1) ;
// //console.log(arr1Copy)

// //arr1Copy.push(4);

// arr1Copy[2] = 99;

// console.log(arr1)
// console.log(arr1Copy);

// let arr10 = [1 ,[22,33],99]
// let arr11 = Array.from(arr10);

// arr11[1] = [202,505];
// arr11[2] = 45
// console.log("ARRAY 10 : ",arr10)
// console.log(arr11)

// let arr = [4,11,8];
// let count=0;
// function isPrime(elem,index,arr){
//     for(let i = 2; i< elem;i++){
//         //console.log(elem)
//         if(elem%i==0){
//             console.log(elem)
//             return false;
//         }
//     }
//     return elem
// }
// count = 0;
// // console.log("Answer : ",arr.find(isPrime)
// //console.log(Math.sqrt(5))

// let names  = [{name : "John"},{name : "Perry"},{name : "Jerry"}]

// console.log(names.findIndex((elem)=>elem.name == "Jerry"))

// class Toy {
//     constructor(name) {
//         this.name = name; // Each toy has its own name
//     }

//     play() {
//         return `Playing with ${this.name}`; // This is a method for individual toys
//     }

//     static countToys(toys) {
//         return `You have ${toys.length} toys!`; // This is a general instruction for all toys
//     }
// }

// const toyCollection = [new Toy('Car'), new Toy('Doll')];
// console.log(Toy.countToys(toyCollection)); // Output: You have 2 toys!