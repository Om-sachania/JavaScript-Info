// Task 1 :
var num = 1;
console.log(num);

// Task 2 :
let str = "Hello";
console.log(str);

// Task 3 : 
const bool = true;
console.log(bool);

// TAsk 4 : 
let obj = {
    name : "John",
    age : 12
};
let arr = ["arr 1","arr 2"];
console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof obj);
console.log(typeof arr);

// Task 5 :
let a = "string value";
console.log(a);

a=15;
console.log(a);

// Task 6 :
// bool = 44;
// console.log(bool); // Error 

// Feature Request :
    // 1.
    console.log(num ,typeof num);
    console.log(str , typeof str);
    console.log(bool , typeof bool);
    console.log(obj , typeof obj);
    console.log(arr , typeof arr);

    // 2. Difference in reassignment of let & const
    let empId = 55;
    const rollNo = 10;
    empId = 54;
    rollNo = 9; // This will give error