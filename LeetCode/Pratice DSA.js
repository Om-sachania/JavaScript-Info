// let arr = [9,-2,3,-1,6,-5];
// let length = []

// let sum = (val) => val.reduce((p,c) => p + c,0)

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i+1; j <= arr.length; j++) {
//         let subarray = arr.slice(i,j)
//         //console.log(subarray);
//         if(sum(subarray) == 0){
//             length.push(subarray.length);
//         }
//     }
// }

    
// console.log(Math.max(...length));

// let array = [1,2,-3,0,-4,-5];

// let maxProduct = 0;

// for (let i = 0; i < array.length; i++) {
//     for (let j = i+1; j <= array.length; j++) {
//         let subArray = array.slice(i,j);
//         // console.log(subArray)
//         let product = subArray.reduce((p,c) => p * c); 

//         if(product  >= maxProduct){
//             maxProduct = product        
//         }
//     }
// }

// console.log(maxProduct)

// let a = [3,1,2,5,3];

// a.sort();
// let count = 0;
// let ans=[];
// let value = a.map((x) => a.filter((y) => x == y).length);
// console.log(value);
// let filter = Math.max(...value);
// let index = value[filter];
// console.log(index);
// for(let i = 0; i < a.length;i++){
//     count++;
//     if(count != a[i]){
//         ans.push(count,a[index]);
//     }
// }
// console.log(ans);


// Question - 4 :
// let arr = [5,1,4,7];
// let arr2 = [3,2,6];

// let mergedArr = [...arr,...arr2];
// console.log(mergedArr.sort());

// arr = mergedArr.slice(0,arr.length);
// console.log(arr);

// arr2 = mergedArr.slice(arr.length,arr.length+arr2.length);
// console.log(arr2)

// Question 5 : 
// let arr = [3,6,4,9,11];
// // [3,5,6,9,11]
// let target = 14;

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; j < arr.length; j++) {
//         if(arr[i] + arr[j] == target){
//             console.log(i);
//             console.log(j);
//         }
//     }
// }

// Question - 6 : 
// let arr = [[1,3],[2,6],[8,10],[10,100]];
// let flated = arr.flat();
// let newArr = [];
// // console.log(flated)
// //  [1,3,2,6,8,10,10,100]
// //  [0,1,2,3,4, 5, 6, 7] 
// for (let i = 1; i < flated.length; i+=2) {
//     for (let j = i+1; j <= flated.length; j+=2) {
//         if(flated[i] * flated[j] == flated[j+1]){
//             // console.log(i);
//             // console.log(j);
//             flated.splice(i,2);
//         }   
//         }
//         }


// const n = arr.length;
// arr.sort((a, b) => a[0] - b[0]);

// const ans = [arr[0]];
// //   console.log(arr);
//     //console.log(ans)

// for (let i = 1; i < n; i++) {
//     const last = ans[ans.length - 1];
//     const curr = arr[i];
//     console.log(last)
//     console.log(curr)
//     if (curr[0] <= last[1]) {
//         last[1] = Math.max(last[1], curr[1]);
//     }
//     else {
//         ans.push(curr);
//     }
// }

// console.log(ans)

// 3 Sum Problem : 
// let arr = [-1,0,1,2,-1,-1];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i+1; j < arr.length; j++) {
//         for (let k = j+1; k < arr.length; k++) {
//             if(arr[i]+arr[j]+arr[k] == 0){
//                 if(!newArr.includes([arr[i],arr[j],arr[k]])){
//                     newArr.push([arr[i],arr[j],arr[k]]);
//                 }
//             }
//         }
//     }
// }

// console.log(newArr)

// Question : 

// let str = 'abcabcbb';
// let arr = [];

// for (let i = 0; i < str.length; i++) {
//     if(!arr.includes(str[i])){
//         arr.push(str[i]);
//     }
//     else{
//         arr.push(' ',str[i])
//     }
// }
// console.log(arr);
// let newArr = arr.join('').split(' ');
// console.log(newArr)
// let z = newArr.map((item)=>item.length)
// let max = Math.max(...z)
// console.log(max);
//Optimize it

// Question : 
// let str = 'babad';

// let arr = str.split('');
// let reverseArr = [...arr].reverse();
// let newArr =[];

// console.log(arr);
// console.log(reverseArr)

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]==reverseArr[i]){
//         newArr.push(arr[i]);
//     }
// }

// console.log(newArr.join(''));

// Question : 

// let num = 120
// let str = String(num).split('').reverse();
// if(str[str.length-1]=='-'){
//     let minus = str.pop();
//     str.unshift(minus)
// }
// return str.join('')

// Question : 
//let num = 'words and '

// function test(num){
//     let arr = num.trim().split('');
//     let notNum;
//     if(!Number.isInteger(+arr[0]) && arr[0]!='-'){
//         return 0;
//     }
//     for (let i = 1; i < arr.length; i++) {
//         if(!Number.isInteger(+arr[i])){
//             notNum = (arr[i]);
//             break;
//         }
//     }
//     let index = arr.indexOf(notNum);
//     console.log(index)
//     if(index==-1){
//         return +arr.join('')
//     }
//     return +arr.slice(0,index).join('');
// }

// console.log(test(num))

// Question : 

// let obj= {
//     2 : 'abc',
//     3 : 'def',
//     4 : 'ghi',
//     5 : 'jkl',
//     6 : 'mno',
//     7 : 'pqrs',
//     8 : 'tuv',
//     9 : 'wxyz',
// }
// let num = '23';
// let arr = num.split('');

// for (let i = 0; i < arr.length; i++) {
//     let currNum = obj[arr[i]];
//     console.log(currNum);
//     console.log(currNum.split('')); 
// }

// Question : 
let arr = [1];
let n = 1;
arr.splice(-n,1);
console.log(arr)