// Question 1 : Shift array to left by 1 element

// let arr = [1,2,3,4,5,6];

// Method -1 : Using array methods

// let firstElement = arr.shift();
// arr.push(firstElement)
// console.log(arr)

// Method -2 : Without array methods

// let firstElement = arr[0];
// for (let i = 0; i < arr.length-1; i++) {
//     arr[i] = arr[i+1];
// }

// arr[arr.length-1] = firstElement;
// console.log(arr)

// QUESTION 2 : Shift array to right by 1 element

// let arr = [1,2,3,4,5,6];

// let lastElement = arr[arr.length-1];
// // console.log(lastElement)
// for (let i = arr.length-2; i >= 0; i--) {
//     arr[i+1] = arr[i];
// }

// arr[0] = lastElement;
// console.log(arr)

// QUESTION -3 : Shift array to left and right by k element

// let arr = [1, 2, 3, 4, 5, 6];
// let numberOfRotations = +prompt("Enter number of rotation");
// numberOfRotations%=arr.length;
// console.log(numberOfRotations)

// for (let j = 0; j < numberOfRotations; j++) {
//   let firstElement = arr[0];
//   for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }

//   arr[arr.length - 1] = firstElement;
// }

// console.log(arr)


// EFFICIENT SOLUTION : 

// let temp = [];
// for (let i = 0; i < arr.length - 1; i++) {
//     temp[i] = arr[(i + numberOfRotations)%arr.length];
//   }

//   console.log(temp);


// RIGHT ROTATION
// for (let i = arr.length - 1; i >0; i--) {
//     temp[(i + numberOfRotations)%arr.length] = arr[i];
//   }

//   console.log(temp);


// REMOVE DUPLICATES FROM A SORTED ARRAY :

// let arr=[0,0,1,1,1,2,2,3];

// let j=1;

// for (let i = 0; i < arr.length-1; i++) {
//   if(arr[i]!==arr[i+1]){
//     arr[j]= arr[i+1];
//     j++;
//   }
// }

// console.log(j);
// console.log('Array : ',arr);

// MERGE SORT : 

// let arr1=[1,3,4,8];
// let arr2=[2,5,6];

// let mergeArr = new Array(arr1.length+arr2.length);

// let i=j=k=0;

// while(i<arr1.length && j<arr2.length){
//   if(arr1[i]<arr2[j]){
//     mergeArr[k]=arr1[i];
//     i++;
//     k++;
//   }
//   else{
//     mergeArr[k]=arr2[j];
//     j++;
//     k++;
//   }
// }

// while(i<arr1.length){
//   mergeArr[k] = arr1[i];
//   i++;
//   k++;
// }

// while(j<arr2.length){
//   mergeArr[k] = arr2[j];
//   j++;
//   k++;
// }

// console.log(mergeArr)


// MERGE SORT WITHOUT USING EXTRA ARRAY : 
// let arr1=[1,2,4,0,0,0];
// let arr2=[2,5,6];

// function countArara(n) {
//     let numberOfAnane = n%2;
//     let numberOfAdak = Math.floor(n/2);

//     let string = '';

//     for (let i = 0; i <numberOfAdak; i++) {
//       string+='adak ';
//     }

//     if(numberOfAnane>0){
//       string+='anane';
//     }
//     return string;
//   }

//   console.log(countArara(1));

//   1='b'
//   2='a'
//   3='a b'
//   4='a a';
//   5='a a b'
//   6='a a a'

