// function countOfChar(str) {
//     let obj={};
//     //let arr = str.split('');
//     // arr.forEach((x)=>{
//     //     if(obj[x]){
//     //         obj[x]++;
//     //     }
//     //     else{
//     //         obj[x]=1;
//     //     }
//     // })

//     for (let i = 0; i < str.length; i++) {
//         if(obj.str[i]){
//             obj[str[i]]++
//         }
//         else{
//             obj[str[i]]=1
//         }
//     }
//     console.log(obj);
// }

// countOfChar("abca")

// const book = {
//     title: "JavaScript: The Good Parts",
//     author: "Douglas Crockford",
//     year: 2008
// };

// function getProperty(obj, prop) {
//     return obj[prop]
// }

// console.log(getProperty(book, 'title')); // "JavaScript: The Good Parts"
// console.log(getProperty(book, 'publisher')); // undefined

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };

// function mergeObjects(o1, o2) {
//     return {...o1,...o2}
//     // Another method : 
//     //let entries1 = Object.entries(obj1);
//     //let entries2 = Object.entries(obj2);
//     //let combinedEntries = [...entries1,...entries2]
//     //let mergedObject = Object.fromEntries(combinedEntries);
// }

// console.log(mergeObjects(obj1, obj2)); // { a: 1, b: 3, c: 4 }

// // Question - 3 : 
// const original = {
//     name: "Alice",
//     details: {
//         age: 25,
//         address: {
//             city: "Wonderland",
//             zip: "12345"
//         }
//     }
// };

// function deepClone(obj) {
//     let cloneObject = {};

//     for (const key in obj) {
//         if(obj.hasOwnProperty(key)){
//             cloneObject[key]=obj[key];
//         }
//     }
//     return cloneObject;
// }

// const cloned = deepClone(original);
// console.log(cloned.details.address === original.details.address); // false


// const data = {
//     name: "Charlie",
//     age: 40,
//     occupation: "Engineer",
//     salary: 50000
// };

// function filterStringProperties(obj) {
//     let newObj ={}
//     for (const key in obj) {
//         if(typeof(obj[key])=='string'){
//             newObj[key]=obj[key];
//         }
//     }
//     return newObj;
// }

// console.log(filterStringProperties(data)); // { name: "Charlie", occupation: "Engineer" }

// const user = {
//     name: "David",
//     address: {
//         city: "Gotham",
//         postalCode: "10001"
//     }
// };

// function updateNestedProperty(obj, path, value) {
//     obj[path[0]][path[1]]=value;
// }

// updateNestedProperty(user, ['address', 'city'], 'Metropolis');
// console.log(user.address.city); // "Metropolis"

// // Question 8 : 
// const sym = Symbol('unique');
// const obj = {
//     [sym]: 'specialValue',
//     regularProp: 'regularValue'
// };

// function listSymbolProperties(obj) {
//     return Object.getOwnPropertySymbols(obj)
// }

// console.log(obj[sym]); // 'specialValue'
// console.log(listSymbolProperties(obj)); // [Symbol(unique)]

// let mexico = {
//     id : 24,
//     name : "Mexico",
//     capital : "Mexico City",
//     neighbours : ["USA","Guatemala","Belize"]
// }

// console.log(mexico);
// mexico.id=25;

// mexico.neighbours.push("Honduras");

// console.log(mexico)

// Question 10 : 
// let houseForSale = {
//     area : 940,
//     value : 320000,
//     streetName : "Fifth Street",
//     built : "2012",
//     owner : {name : "Blake",age : 29},
//     offers : [290000,295000,315000,312000],
// }
// console.log(houseForSale);

// delete houseForSale.built;
// houseForSale.owner.age=30;
// let ans = houseForSale.offers.reduce((acc,cur)=>{
//     if(acc < cur){
//         return cur;
//     }
//     return acc;
// },0)
// console.log(ans)

// let obj1={
//     name : "John",
//     age : 25,
// }

// let obj2={
//     name : "Aaron",
//     age : 18,
// }

// let obj3={
//     name : "Garry",
//     age : 47,
// }

// let arr = [obj1,obj2,obj3];
// arr.sort((a,b)=>{
//     if(a.name<b.name) return -1;
//     if(a.name>b.name) return 1;
// });
// console.log(arr);

// let sumOfAge = arr.reduce((acc,curr)=>{
//     return acc+=curr.age;
// },0);

// console.log(sumOfAge)

let obj1 = [
    {name : 'aman'},
    {name : 'perry'},
    {name : 'garry'},
    {name : 'john'},
    {name : 'alice'},
]

let obj2 =[
    {
        name : 'aman',
        age :10
    }, 
    {
        name : 'perry',
        age : 20
    }, 
    {
        name : 'hitesh',
        age : 30
    }
]

let sum =0 ;
// for (let i = 0; i < obj1.length; i++) {
//     for (let j = 0; j < obj2.length; j++) {
//         if(obj1[i].name == obj2[j].name){
//             sum+=obj2[j].age;
//         }
//     }
// }

// let nameArr = obj1.map((item)=>item.name);
// obj2.forEach((value)=>{
//     if(nameArr.includes(value.name)){
//         sum+=value.age;
//     }
// });

//console.log(sum);
