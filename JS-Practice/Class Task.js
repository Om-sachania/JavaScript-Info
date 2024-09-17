// class CRUD{
//     constructor(obj){
//         this.obj=obj
//     }

//     printObject(){
//         console.log(this.obj);
//     }

//     addElement(key,index,objKey,objValue){
//         if(typeof(key) === 'string' && typeof(index) ==='number' && typeof(objKey) === 'string' && typeof(objValue) === 'number'){
//             if(this.obj[key]){
//                 if(index>=0 && index<this.obj[key].length){
//                     let curr = this.obj[key];
//                     curr.splice(index,0,{[objKey]:objValue});
//                 }
//                 else{
//                     console.log(`${index} index is out of bounds`)
//                 }
//             }
//             else{
//                 console.log(`${key} Key is not VALID!!`);
//             }
//         }
//         else{
//             console.log(`Type of arguments is not proper!!!`)
//         }
//     }

//     deleteElement(key,index){
//         if(typeof(key) === 'string' && typeof(index) ==='number'){
//             if(this.obj[key]){
//                 if(index>=0 && index<this.obj[key].length){
//                     let curr = this.obj[key];
//                     curr.splice(index,1);
//                 }
//                 else{
//                     console.log(`${index} index is out of bounds`)
//                 }
//             }
//             else{
//                 console.log(`${key} Key is not VALID!!`);
//             }
//         }
//         else{
//             console.log(`Type of arguments is not proper!!!`)
//         }
//     }

//     swapElement(key1,key2,index1,index2){
//         if(typeof(key1) === 'string' && typeof(index1) ==='number' && typeof(key2) === 'string' && typeof(index2) === 'number'){
//             if(this.obj[key1] && this.obj[key2]){
//                 if(index1>=0 && index1<this.obj[key1].length && index2>=0 && index2<this.obj[key2].length){
//                     let temp = this.obj[key1][index1];
//                     this.obj[key1][index1] = this.obj[key2][index2];
//                     this.obj[key2][index2] = temp;
//                 }
//                 else{
//                     console.log(`Index is out of bounds`)
//                 }
//             }
//             else{
//                 console.log(`Key is not VALID!!`);
//             }
//         }
//         else{
//             console.log(`Type of arguments is not proper!!!`)
//         }
//     }
// }

// let obj = {
//     a: [{ x: 10 }, { x: 20 }],
//     b: [{ x: 30 }, { x: 40 }],
//     c: [{ x: 50 }, { x: 60 }],
//     d: [{ x: 70 }, { x: 80 }],
//     e: [{ x: 90 }, { x: 100 }],
//     f: [{ x: 110 }, { x: 120 }],
// }
// let myObject = new CRUD(obj);
// myObject.addElement('g',1,'z',25)
// myObject.printObject()
// myObject.deleteElement('c',1)
// myObject.printObject();
// myObject.addElement('a',2,'xyz',50)
// myObject.printObject();
// myObject.swapElement('a','b',1,1)
// myObject.printObject();

//....................................................................................................

// class Permission{
//     _canAdd = true;
//     _canDelete = false;
//     _canDisplay = true;

//     get canAdd(){
//         return this._canAdd;
//     }

//     set canAdd(value){
//         this._canAdd = value;
//     }

//     get canDelete(){
//         return this._canDelete;
//     }

//     set canDelete(value){
//         this._canDelete = value;
//     }

//     get canDisplay(){
//         return this._canDisplay;
//     }

//     set canDisplay(value){
//         this._canDisplay = value;
//     }
// }

// class User extends Permission{
//     products = [];

//     addProduct(name,price){
//         if(!this.canAdd){
//             console.log("You donot have permission to add product!!");
//             return;
//         }
//         this.products.push({
//             name,
//             price,
//         });
//     }

//     deleteProduct(name){
//         if(!this.canDelete){
//             console.log("You donot have permission to delete product!!");
//             return;
//         }
//         let index = this.products.findIndex((item)=>item.name == name);
//         if(index>-1){
//             this.products.splice(index,1);
//         }
//         else{
//             console.log(`${name}, not found in cart`)
//         }
//     }

//     displayProducts(){
//         if(!this.canDisplay){
//             console.log("You donot have permission to display product!!");
//             return;
//         }
//         console.log(this.products)
//     }

//     getProducts(){
//         return this.products;
//     }

//     static generateBill(products){
//         let bill = products.reduce((acc,product)=>acc+product.price,0);
//         console.log(bill);
//     }
// }

// let myUser = new User();
// myUser.addProduct('Apple',50);
// myUser.addProduct('Orange',75);
// myUser.displayProducts();
// myUser.deleteProduct('Orange');
// myUser.displayProducts();
// myUser.addProduct('Banana',30);
// myUser.displayProducts();
// myUser.deleteProduct('Strawberry');

// User.generateBill(myUser.getProducts())

// class Employee{
//     constructor(name){
//         console.log(this)
//     }
// }
// // let myEmployee = new Employee();

// class Person extends Employee{
//     constructor(){
//         console.log(this)
//     }
// }

// let myEmployee = new Employee();
// let myPerson = new Person();
// console.log(myEmployee)

//....................................................................................................

// New Task : 

class Car{
    static speed(){
        console.log('Car Speed!!');
    }
}

class Bike{
    static speed(){
        console.log('Bike Speed!!!');
    }
}
let button = document.getElementById('button');
console.log(button)

let inputField = document.getElementById('inputBox');
console.log(inputField);

let classes = {
    'Car':Car,
    'Bike':Bike,
}
// button.addEventListener('click',function(){
//     console.log(inputField.value);  
//     let inputValue = inputField.value
//     classes[inputValue].speed()
// })

// inputField.addEventListener('onchange',function(){
//     console.log(inputField.value); 
//     let inputValue = inputField.value
//     classes[inputValue].speed()
// })

// inputField.onchange = function(){
//     console.log(inputField.value); 
//     let inputValue = inputField.value
//     classes[inputValue].speed()
// }

// let firstButton = document.getElementById('button1')
// let secondButton = document.getElementById('button2')

// firstButton.addEventListener('click',function(){
//     Car.speed()
// })

// secondButton.addEventListener('click',function(){
//     Bike.speed()
// })
