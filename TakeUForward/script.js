// function findLargestNumber(arr) {
//     // let maxNumber=arr[0];
//     // for (let i = 1; i < arr.length; i++) {
//     //     if(arr[i]>maxNumber){
//     //         maxNumber=arr[i];
//     //     }
//     // }
//     // return maxNumber;

//     // Approach 2 : 
//     //return Math.max(...arr);

//     // Approach 3 : 
//     arr.sort((a,b)=>a-b);
//     return arr[arr.length - 1];
// }

// console.log(findLargestNumber([2,7,11,3,1]));

// function secondLargest(arr) {
//     //Approach 1 : 
//     // arr.sort((a,b)=>a-b);
//     // let largest = arr[arr.length-1];

//     // for (let i = arr.length - 2; i >0 ; i--) {
//     //     if(arr[i]!=largest){
//     //         return arr[i];
//     //     }
//     // }

//     // Apporach 2 : 
//     let largest = arr[0];
//     let secondLargest = -1;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]>largest && arr[i]!=largest) {
//             secondLargest=largest;
//             largest=arr[i];
//         }
//         else if(arr[i]<largest && arr[i]!=largest){
//             secondLargest=arr[i];
//         }
//     }

//     return {largest,secondLargest};
// }

// console.log(secondLargest([11,2,1,3,7,7,1,5]));

// function secondSmallest(arr) {
//     // Approach 1 : 
//     // arr.sort((a,b)=>a-b);
//     // return arr[1];

//     // Approach 2 :
//     let smallest = arr[0];
//     let secondSmallest = Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]<smallest){
//             secondSmallest=smallest;
//             smallest=arr[i];
//         }
//         else if(arr[i]<secondSmallest && arr[i]!=smallest){
//             secondSmallest=arr[i];
//         }
//     }
//     return secondSmallest;
// }

// console.log(secondSmallest([11,1,3,7,7,1,5]));

// function checkSorted(arr) {
//     // let checkArr = [...arr];
//     // checkArr.sort((a,b)=>a-b);

//     // for (let i = 0; i < checkArr.length; i++) {
//     //     if (arr[i] != checkArr[i]) return false;
//     // }
//     // return true;

//     // Approach 2 : 
//     for (let i = 1; i < arr.length; i++) {  
//         if (arr[i]<arr[i-1]) {
//             return false;
//         }
//         return true;
//     }
// }

// console.log(checkSorted([1,2,3,4]));

function removeDuplicate(arr) {
    // let newArr=[]
    // let count=0;
    // for (let i = 0; i < arr.length; i++) {
    //     if (!newArr.includes(arr[i])) {
    //         newArr.push(arr[i]);
    //         count++;
    //     }
    //     else{
    //         newArr.push('_')
    //     }
    // }
    
    // console.log(newArr)

    let set = new Set(arr);
    let uniqueArr = Array.from(set);
    console.log(uniqueArr)
    console.log(set)
}

removeDuplicate([1,1,2,2,3,2,3,4]);

[1,2,2]