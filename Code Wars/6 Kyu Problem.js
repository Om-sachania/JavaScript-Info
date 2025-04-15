// Question - 1 : Good vs Evil 
// function goodVsEvil(good,evil) {
//     let goodArr = [1,2,3,3,4,10];
//     let evilArr = [1,2,2,2,3,5,10];

//     let goodStr=good.split(' ');
//     let evilStr=evil.split(' ');

//     let goodScore = goodArr.reduce((acc,curr,i)=>{
//         return acc+curr*goodStr[i];
//     },0);

//     let evilScore = evilArr.reduce((acc,curr,i)=>{
//         return acc+curr*evilStr[i];
//     },0);

//     if(goodScore>evilScore){
//         return `Battle Result: Good triumphs over Evil`;
//     }
//     else if(evilScore>goodScore){
//         return 'Battle Result: Evil eradicates all trace of Good';
//     }
//     else{
//         return 'Battle Result: No victor on this battle field';
//     }
// }

// goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1');

// let products=[
//     {
//         name : "Laptop",
//         price : 1000,
//         count : 6
//     },
//     {
//         name : "Desktop",
//         price : 1500,
//         count : 3
//     },
//     {
//         name : "Mobile",
//         price : 500,
//         count : 10
//     }
// ];

// let sum = products.reduce((acc,curr)=>{
//     return acc+(curr.price*curr.count);
// },0);

// console.log(sum);

// let arr = products.map((item)=>({
//         name : item.name,
//         totalCost : item.count*item.price
//     }
// ));

// let cost = products.map((item)=>item.count*item.price);
// console.log(cost);
// console.log(arr);

// function findMissingLetter(array) {
//     let charCode;
//     let charCodeArr = array.map((item)=>item.charCodeAt(0));
//     console.log(charCodeArr);
//     for (let i = 0; i < charCodeArr.length-1; i++) {
//         if(charCodeArr[i+1]-charCodeArr[i]!=1){
//             charCode=charCodeArr[i];
//         }
//     }
//     return String.fromCharCode(charCode+1)
// }

// let arr = ['a','b','c','d','f'];
// console.log(findMissingLetter(arr));

// let num = [1,2,1,1];
// function a(arr){
//     arr.sort((a,b)=>a-b);
//     return arr[0]==arr[1]?arr.pop():arr[0] // if arr[0]==arr[1] then it returns the last element of arr ( Using arr.pop())
// }

// console.log(a(num));

// let arr = [['ABC', 65], ['HGR', 74], ['BYHT', 74]];
// if(ticket.filter(a => a[0].split('').some(b => b.charCodeAt(0) == a[1])).length >= win)
//     {
//         return "Winner!";
//     }
//     return "Loser!";

// let num = [1,8,1,1,1,1];
// let a = num.map((i)=> num.filter((x)=> x==i ).length);
// let x = a.indexOf(Math.min(...a));
// console.log(num[x]);

//console.log(sum) 

// let newNum = str%10;
// sum+=newNum;
// str=Math.floor(str/10);

// console.log(sum);
// console.log(str);
// str=Math.floor(str/10);
// console.log(str);

// let arr = ['a','b','c'];
// let z = [...arr.keys()];
// for (const iterator of z) {
//     console.log(iterator);
// }
// console.log(z)
// let z = [...arr.keys()];
// for (const iterator of z) {
//     console.log(iterator);
// }
// console.log(z)

// Question : descending order a number 

// function descendingNum(n){
//     return +(n.toString().split('').sort().reverse().join(''));
// }

// console.log(descendingNum(15798));

// Question : 
// let str  = "3a Thi1s is2 T4est";
// let arr = str.split(' ');
// let sorted = [];

// console.log(arr)

// for (let i = 1; i <= arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if(arr[j].indexOf(i)>=0){
//             sorted.push(arr[j]);
//         }
//     }
// }

// console.log(sorted)

// Question : 
// let str = "String";
// let arr = str.split(' ');
// for (let i =0;i<arr.length;i++) {
//     let newArr = arr[i].split('');
//     for (let i = 0; i < newArr.length; i++) {
//         if(i%2==0){
//             newArr[i] = newArr[i].toUpperCase();
//         }
//         else{
//             newArr[i] = newArr[i].toLowerCase();
//         }
//     }
//     arr[i] = newArr.join('');
// }
// console.log(arr.join(' '));
// console.log(arr.join(''))

/*
    ALTERNATE SOLUTION : 
    function toWeirdCase(string){
        return string.split(' ').map(function(word){
            return word.split('').map(function(letter, index){
                return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
            }).join('');
        }).join(' ');
    }
*/

// Question : 
// let a = "I like turtles";
// let b = "I like turkeys";
// let count=0;

// for (let i = 0; i < a.length; i++) {
//     if(a[i] != b[i]){
//         count++;
//     }
// }
// console.log(count)

// EXTRA QUESTION : Give an array which contains elements greater than 2 and double those elements.

let arr = [1,2,3,4,5];
let newArr = arr.reduce((prev,curr)=>{
    if(curr>2){
        prev.push(curr*2);
    }
    return prev;
},[]);

console.log(newArr)