// Pass By Value : 
let a = 5;
b=a;
b+=4;

console.log(a);
console.log(b);

// Pass by reference : 
let arr = [1,2,3,4];
let newArr = arr;
newArr.push(10);

console.log(arr);
console.log(newArr);

// let animal = {
//     eats : true,
//     walk(){
//         console.log(`Animal walk`)
//     }
// };

// let rabbit = {
//     jumps : true
// };

// animal.__proto__=rabbit;
// console.log(Object.getPrototypeOf(rabbit));

// let obj = {
//     a : 5
// }

// console.log(obj.__proto__);

// function say(){
//     let z= 10;
// }

// console.log(say.prototype);

// function Person(name,age){
//     this.name=name;
//     this.age=age;
// }

// let mark = new Person('mark',26);
// console.log(mark.name);
// console.log(mark.age);
// console.log(Person.prototype);

// let abc ={
//     num : 15,
// }

// let xyz = new Object(abc);
// console.log(xyz);
// xyz.a=51;
// console.log("xyz : ",xyz)
// console.log("abc",abc)
// delete xyz.a;
// console.log("xyz : ",xyz)
// console.log("abc",abc)  

// function User(){
//     return {name : "Mark"}
// }

// function Shape(height,width){
//     this.height=height;
//     this.width=width
// }
// let shape = {};
// let circle = new Shape(10,5);
// console.log(circle)
// console.log(circle.__proto__);
// console.log(Shape.prototype)

function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};
let obj = {
    name : 'Alice'
}
const alice = new Person('Alice');
//alice.greet(); // Output: Hello, my name is Alice
console.log(alice);
console.log(obj)
