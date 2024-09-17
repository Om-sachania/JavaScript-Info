// It is combination of map() & flat() with depth 1 : 

let arr = [1,2,3,4,5,6];

// let mapArr = arr.map((x)=>[x*2]);

// let flatMapArr = arr.flatMap((x)=>[x*2]);

// console.log(mapArr); // [[2],[4],[6],[8]]
// console.log(flatMapArr); // [2,4,6,8];

// const arr1 = ["it's Sunny in","", "California"];

// let mapArr = arr1.map((x)=>x.split(' '));   

// let flatMapArr = arr1.flatMap((x)=>x.split(' '));

// console.log(mapArr);
// console.log(flatMapArr); 

// Using all 3 arguments of flatMap function : 
let newArr = arr.filter((num)=>num%2==0).flatMap((num,index,arr)=>{
    if(index == arr.length-1) return [];
    return [`${num}-${arr[index+1]}`];
})

console.log(newArr)

// const arrayLike = {
//     length: 3,
//     //unrelated: "foo",
//     0: 5,
//     1: 4,
//     3: 3, // ignored by toSorted() since length is 3
// };
// console.log(Array.prototype.toSorted.call(arrayLike));
//    // [4, 5, undefined]

console.log([1, 2, 3, 4, 5].copyWithin(-2, -4, -1));