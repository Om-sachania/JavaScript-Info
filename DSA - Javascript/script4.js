// ARRAYS : Collection of items 

// let arr = [];
// arr[1] = 20;
// console.log(arr)

// Another way of declaring a array :

// let arr = new Array(3);
// console.log(arr)

// IMPORTANT NOTE : there is no fix length array in JAVASCRIPT 
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// arr[3] = 4;

// console.log(arr)  // This works 

// THERE IS A CATCH IN THIS : 
// arr.push(5);
// console.log(arr); // [empty,empty,empty,5]

// TAKING INPUT FROM USER : 
// let arr = [];
// for(let i=0;i<5;i++){
//     let input = +prompt('Enter a number : ');
//     // arr.push(input);
//     arr[i]=input
// }

// console.log(arr);

// SUM OF ELEMENTS IN A ARRAY 

// let arr = [10,20,30,40,50];
// let sum = 0;
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i];
// }

// console.log(sum);

// FINDING MAXIMUM NUMBER IN A ARRAY : 

// let arr=[20,3,50,21,41];
// let max=arr[0];

// for(let i=1;i<arr.length;i++){
//     if(arr[i]>max) max=arr[i];
// }

// console.log(max);


// SECOND MAX ELEMENT : 

// let arr=[10,18,96,47,24];
// let max = arr[0];
// let second_max = arr[1];

// for(let i=2;i<arr.length;i++){
//     if(arr[i]>max){
//         second_max = max;
//         max = arr[i];
//     }
//     else if(arr[i]>second_max && max!=arr[i]){
//         second_max = arr[i];
//     }
// }

// console.log(second_max)


// REVERSE AN ARRAY :
// let arr = [10,20,40,50,60];
// let i = 0 ;
// let j = arr.length-1;

// while(i!==j){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
// }

// console.log(arr);

// 0's on left and 1's on right : 

let arr = [1,1,1,0,0,0,1,0,0,1,1];

let i = 0;
let j = 0;

for(let k=0;k<arr.length;k++){
    if(arr[i]==0){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] =temp;
        j++;
    }
    i++;
}

console.log(arr)