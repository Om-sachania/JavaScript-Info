class Parent{
    constructor(){
        this.parentProp = 'Parent Property';
        // console.log('Parent class',this);
    }
    
}


// console.log(Parent.prototype == obj1.__proto__)
class Child extends Parent{
    constructor(){
        super();
        // console.log('Child class',this)
        // this.childProp = 'Child Property';
    }
}

let parentObj = new Parent();
let childObj = new Child();
// console.log(childObj)
// console.log(childObj.__proto__== Child.prototype)
/*
    What does new keyword do : 
    let childObj = {};
    childObj.__proto__ = Child.prototype;
    this == new Objects created (example childObj);

*/
// console.log(childObj)