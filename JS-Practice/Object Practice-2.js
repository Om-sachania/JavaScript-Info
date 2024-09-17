// let obj1 = { a:1, b:2 };
// let obj2 = { b:3, c:4 };
// let obj3 = { d:5 };

// let mergedObject = {...obj1,...obj2,...obj3};
// console.log(mergedObject);

// let mergedObject =Object.assign({},obj1,obj2,obj3)
// console.log(mergedObject);

// let entries1 = Object.entries(obj1);
// let entries2 = Object.entries(obj2);
// let entries3 = Object.entries(obj3);
// let arr =[...entries1,...entries2,...entries3];
// console.log(arr);
// let mergedObject = Object.fromEntries(arr);
// console.log(mergedObject);


// Question - 2 : 
// const arr1 = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
// const arr2 = [{ id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }];

// let newArr = Object.entries(arr1);

// let combinedArr = [...arr1,...arr2];
// let uniqueMap = new Map();

// combinedArr.forEach((item)=>{
//     uniqueMap.set(item.id,item);
// });

// const result = Array.from(uniqueMap.values());
// console.log(result);

// Question 3 : 
// const obj1 = { a: 1, b: 2, c: 3 };
// const obj2 = { a: 1, b: 3, d: 4 };

// let o1={};

// const allKeys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
// allKeys.forEach((item)=>{
//     let val1=obj1[item];
//     let val2=obj2[item];

//     if(val1 != val2){
//         o1[item] ={
//             obj1  : val1,
//             obj2 : val2
//         };
//     }
// });

// console.log(o1);

let arr=[{name : 'Uruga',age :14},{fruit : "mango",color : 'yellow'},{car:"bmw",type : 'sedan'}];
let map = new Map();

for (const obj of arr) {
    for (const key in obj) {
        map.set(key,obj[key]);
    }
}

console.log(map)