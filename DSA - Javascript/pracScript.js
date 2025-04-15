// let num = 1010101;
// let original_num = num;
// let rev = 0;

// while(num>0){
//     let rem = num%10;
//     rev = rev*10 + rem;
//     num = Math.floor(num/10);
// }

// if(original_num === rev) console.log(original_num," is palindrome");
// else console.log(original_num," is NOT palindrome")
// console.log(rev)

// function countZeros(n) {
//     let count = 0;
//     for (let i = 1; i <=n ; i++) {
//         let num = i;
//         while(num>0){
//             if(i%10 ==0){
//                 count++;
//             }
//         }
//     }
//     return count
// }

// console.log(countZeros(100));

// console.log(1000/10)
// console.log(101/10)


// ..........................................................................................................................................................

// let a = 'abcaabbbedrwwaaaaiobbbbbad';

// let arr = a.split('');
// // console.log(arr);

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }


//....................................................................................................................................................

function hcf(a,b){
    let min_num = Math.min(a,b);
    let hcf_num;

    if(b%a == 0){
        hcf_num = a;
    }
    else{
        for(let i = 1; i<=Math.floor(min_num/2);i++){
            if(a%i==0 && b%i==0){
                hcf_num = i;
            }
        }
    }
    return [a/hcf_num,b/hcf_num];
}

console.log(hcf(49,63));


// ...................................................................................................................................................

// let arr = [5,4,8,1,2,9,9,1,7,7,6,4,5,5,3];
// let obj = {};

// for (let i = 0; i < arr.length; i++) {
//     if(obj[arr[i]]){
//         obj[arr[i]]+=1;
//     }
//     else{
//         obj[arr[i]] = 1;
//     }
// }

// // console.log(Object.values(obj).)
// let max = -1;
// let maxKey = 0;
// for (const key in obj) {
//     if(obj[key]>max){
//         max = obj[key];
//         maxKey = key;
//     }
// }

// for (let i = 0; i < max; i++) {
//     console.log(maxKey)
// }
// console.log((maxKey));


// LOTTERY MACHINE ........................................................................................................................................................

// function lottery(str){
//     let newStr = '';
//     for (let i = 0; i < str.length; i++) {
//         if(isFinite(str[i])){
//             if(!newStr.includes(str[i])){
//                 newStr+=str[i]
//             }
//         }
//     }
//     if(newStr.length>0) return newStr
//     else return 'One more run!'
// }

// console.log(lottery('hPrBKWDH8yc6Lt5NQZWQ'))

// NO IF's NO BUT's

// function noIfsNoButs(a, b) {
//     let result = a>b;

//     let falseResult = a<b;
//     console.log(falseResult)
    
//     let final
//     switch(result){
//         case true :
//             final = `${a} is greater than ${b}`;
//             break;
//         case false :
//             switch(falseResult){
//                 case true :
//                     final = `${a} is smaller than ${b}`;
//                     break;

//                 case false :
//                     final = `${a} is equal to ${b}`;
//                     break;
//             }
//     }
//     console.log(final);
// }

// noIfsNoButs(2,2)