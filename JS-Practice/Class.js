// Class : It is code-template for creating objects & providing initial value to the
// state(member variable) & implementing the behavior(member function/methods).

// class User {
//     constructor(name){
//         this.name=name;
//     }
//     sayHi(){
//         console.log(this.name);
//     }
// }

// let user=new User("Walter");
// user.sayHi();
// console.log(User.prototype);

// function Hello(name){
//     this.name = name;
// }

// let myHello = new Hello('Jack');
// console.log(Hello.prototype)
// /*
//     The above class is a Function in JS. The function code is taken from the
//     constructor method.

//     Class methods such as sayHi() are stored in User.prototype
// */
// console.log(User.prototype.sayHi); // Code of the sayHi method.
// console.log(Object.getOwnPropertyNames(User.prototype)) // constructor,sayHi

// /*
//     Same above code without CLASS : 
//     function User(name) {
//         this.name = name;
//     }
// // a function prototype has "constructor" property by default,
// // so we don't need to create it

// // 2. Add the method to prototype
//     User.prototype.sayHi = function() {
//         alert(this.name);
//     };

// // Usage:
//     let user = new User("John");
//     user.sayHi();
// */

// /* 
//     So the difference between above 2 Codes are : 

//     1. First, a function created by class is labelled by a special internal 
//     property [[IsClassConstructor]]: true. So it’s not entirely the same as 
//     creating it manually

//     2.Class methods are non-enumerable. A class definition sets enumerable flag 
//     to false for all methods in the "prototype".
// */

// // Class Expression : 
// let Myuser = class{
//     constructor(num){
//         this.num=num;
//     }
//     sayHello(){
//         console.log("Hello",this.num);
//     }
// };

// new Myuser(25).sayHello();

// Named Class Expression :
// let newUser = class Myclass {
//     talk(){
//         console.log(Myclass); // IMPORTANT : Myclass name is visible only inside this CLASS
//     }
// };

// new newUser().talk(); // This works
// console.log(Myclass); //Error :  This does not work.(AS IT CALLED FROM OUTSIDE CLASS).

// // Making Class Dynamically : 
// function makeClass(pharse) {
//     return class{
//         sayGM(){
//             console.log(pharse);
//         }
//     }
// }

// let Emp=makeClass("Good Morning!!");
// new Emp().sayGM();

// // Getters & Setters in Class : 

// class Car {
//     constructor(name){
//         // invokes the setter 
//         this.name=name;
//     }

//     get name(){
//         return this._name;
//     }

//     set name(value){
//         if(value.length<4){
//             console.error("Too short name for a Car!")
//             return;
//         }
//         this._name=value
//     }
// }

// let car= new Car("BMW"); // OUTPUT : Too short name for a Car!
// car= new Car("Audi");
// console.log(car.name); // Audi

// Class Fields : 
// class Fruit {
//     name = "Mango";

//     printName(){
//         console.log(`This is a ${this.name} fruit`);
//     }
// }

// new Fruit().printName();

// // The main difference in class field is that it is stored in object not in
// class.prototype
// let fruit = new Fruit();
// console.log(Fruit.prototype.name); // OUTPUT : undefined
// console.log(fruit.name); // Mango

// // Task : Creating a clock 

// class Clock{
//     constructor({template}){
//         this.template= template;
//     }
    
//     timer;

//     render(){
//         let date = new Date();

//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;

//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;

//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;

//         let output = this.template
//             .replace('h',hours)
//             .replace('m',mins)
//             .replace('s',secs);

//         console.log(output);
//     };

//     stop(){
//         clearInterval(this.timer);
//     };

//     start(){
//         this.render();
//         this.timer = setInterval(()=> this.render() , 1000);
//     };
// }

// let clock = new Clock({template : 'h:m:s'});
// clock.start();
// clock.stop()

// class User{
//     constructor(name){
//         this.name = name;
//     }
//     sayHi(){
//         console.log(this.name);
//     }
// }

// // console.log(typeof User)
// // console.log(User.prototype)
// let mark = new User('Mark');
// console.log(mark)

// class Employee extends User{
//     constructor(name) {
//         super(name); // Call the parent class constructor 
//     }

//     describe() {
//         console.log(`${this.name}`);
//     }
// }

// let myEmp = new Employee('Harry');
// myEmp.sayHi();
// console.log(myEmp)

// Without classes (Using constructor functions): 
// function User(age){
//     this.age = age
// }
// function Employee(age,jobTitle){
//     User.call(this,age);
//     this.jobTitle = jobTitle
// }

// Employee.prototype = Object.create(User.prototype); 
// Employee.prototype.constructor = Employee;

// Employee.prototype.describe = function(){
//     console.log(`At age of ${this.age}, he is an ${this.jobTitle}`);
// }

// let myUser = new Employee(45,"Agent");
// myUser.describe();

class MyClass{
    static staticMethod(){
        console.log('This is an static method!!')
    }

    printName(){
        console.log('It prints name!');
    }
}

let testClass = new MyClass();
MyClass.staticMethod()
testClass.staticMethod()

console.log(MyClass)