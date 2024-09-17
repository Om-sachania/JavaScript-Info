// function check(str) {
//     let arr=[];
//     for (let i = 0; i < str.length; i++) {
//         if(str[i] == ")"){
//             if(arr[arr.length-1]=="("){
//                 arr.pop();
//             }
//             else{
//                 arr.push(str[i]);
//             }
//         }
//         else{
//             arr.push(str[i]);
//         }
//     }
//     if (arr.length == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(check("()"));

// const findSum = (myArr) => {

//     const minElements = (myArr) => {
//         myArr.sort((a, b) => a - b);
//         return myArr[0] + myArr[1];
//     }

//     const maxElements = (myArr) => {
//         myArr.sort((a, b) => b - a);
//         return myArr[0] + myArr[1];
//     }
    
//     let sumOfMinimum = minElements(myArr);
//     let sumOfMaximum = maxElements(myArr);

//     return {sumOfMinimum,sumOfMaximum}
// }

// const arr = [2, 5, 10, 15, 20, 30];
// console.log(findSum(arr));

// function validateParenthesis(str) {
//     let arr=[];
//     for (let i = 0; i < str.length; i++) {
//         if (str[i]==')') {
//             if(arr[arr.length-1]=='('){
//                 arr.pop();
//             }
//             else{
//                 arr.push(str[i]);
//             }
//         }
//         else if(str[i]==']'){
//             if(arr[arr.length-1]=='['){
//                 arr.pop();
//             }
//             else{
//                 arr.push(str[i]);
//             }
//         }
//         else if(str[i]=='}'){
//             if(arr[arr.length-1]=='{'){
//                 arr.pop();
//             }
//             else{
//                 arr.push(str[i]);
//             }
//         }
//         else{
//             arr.push(str[i]);
//         }
//     }

//     if(arr.length==0){
//         return true;
//     }
//     return false;
// }

// console.log(validateParenthesis('('));

//[00111101101000]

function findMaxLength(arr) {
    let oneArr=[];
    let countZero=0 , countOne=0,maxLength=0;
    let indexArr=[];

    for (let i = 0; i <= arr.length; i++) {
        if(arr[i]==0){
            countZero++;
            arr[i]=1;
            let newLength=Math.max(...arr.join('').split('0').map(v => v.length));
            if(newLength>maxLength){
                maxLength=newLength;
                indexArr.push(i);
            }
            arr[i]=0;
        }
        else{
            if (countZero != 0) {
                oneArr.push(countZero);
            }
            countZero=0;
        }
        if(arr[i]==1){
            countOne++
        }
        else{
            if (countOne != 0) {
                oneArr.push(countOne);
            }
            countOne=0;
        }
    }
    return [Math.max(...oneArr),indexArr] 
}

let numArr=[0,0,1,1,1,1,0,1,1,0,1,0,0,0];


//console.log(numArr.findIndex((item)=>item==0));
console.log(findMaxLength(numArr))
//console.log(Math.max(...numArr.join('').split('0').map(v => v.length)));

// function addDashes(str){
//     let newArr=[];
//     for (let i = 0; i < str.length; i++) {
//         if(str[i].charCodeAt(0)>=65 && str[i].charCodeAt(0)<=90){
//             newArr.push('-',str[i]);
//         }
//         else{
//             newArr.push(str[i]);
//         }
//     }
//     return newArr.join('');
// }

// console.log(addDashes('thisIsAFrom'));

// let a = 10;
// let b = 11;
// console.log(a,++b);  //10,12
// console.log(a++,b);   //10,12
// // a=11,12
// setTimeout(() => {
//     a = ++b;
//     //a = 13 , b=13
//     b = a++;
//     // b=13 , a=14
//     console.log(a,b) // 14,13
// },500);
// setTimeout(() => {
//     a = b++;  
//     // a=13 b=14
//     b = ++a;  
//     // a= 14 b=14 
//     console.log(a,b); //a=14 b=14
// },1000)

// a = 100;
// b = a++ + 200;
// console.log(a,b)   //101,300

// a = ++b; // a=13 b=13
// b = a++; // b=13 a=14
//console.log(a,b);
