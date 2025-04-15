// Problem -1 : Sum in Binary

// function addBinary(a,b) {
//     return (a+b).toString(2);
// }

// console.log(addBinary(1,2));

// Problem - 2 : Find Divisors

// function divisors(num) {
//     let divisorNum = [];
//     for (let i = 2; i < num; i++) {
//         if(num%i==0){
//             divisorNum.push(i);
//         }
//     }
//     if (divisorNum.length==0) {
//         return `${num} is prime`;
//     } else {
//         return divisorNum;
//     }
// }

// console.log(divisors(21));

// Problem - 3 : Next Perfect Square

// function perfectSquare(num) {
//     let squareRoot = Math.sqrt(num);

//     if(Number.isInteger(squareRoot)){
//         return (squareRoot+1)*(squareRoot+1);
//     }
//     else{
//         return -1;
//     }
// }

// console.log(perfectSquare(144));

// Problem - 4 : Categorize a Member 

// function openOrSenior(data) {
//     let ansCategory = data.map((item)=>{
//         if (item[0]>=55 && item[1]>7) {
//             return "Senior";
//         }
//         else{
//             return "Open";
//         }
//     });
    
//     return ansCategory;
// }

// let arr = [[10,5],[48,9],[7,2]];
// console.log(openOrSenior(arr));

// Problem - 5 : Friend or Foe

// function friend(friends){
//     return friends.filter((item)=> item.length==4);
// }

// Problem - 6 : Sum of two lowest positive integer 
// function sumTwoSmallestNumbers(numbers) {  
//     numbers.sort((a,b)=>a-b);
//     return numbers[0]+numbers[1];
// }

// Problem - 7 : Playing Cards 
// const draw = (deck) => {
// 	const drawnCards = [];
//     while(deck.length > 1) {
//         drawnCards.push(deck.shift());
//         deck.push(deck.shift());
//     }
//     drawnCards.concat(deck.pop());
// 	return drawnCards;

    // Alternate Solution : 
    //let a = [],b = [];
    // let draw = ["KC", "KH", "QC", "KS", "KD", "QH", "QD", "QS","1","2",4,5,7,6]
    //     for(let i = 0; i<draw.length;i++){
    //         i%2 == 0 ? 
    //             a.push(draw[i]) :
    //             b.push(draw[i]);
    //     }
    // let c =  a.concat(b);
    // console.log(c);
//}

// Problem - 8 : Check 3 or 2
//function checkThreeAndTwo(arr) {
    // let countA = 0,countB = 0,countC = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] == 'a') {
    //         countA++;
    //     }
    //     else if(arr[i] == 'b'){
    //         countB++;
    //     }
    //     else{
    //         countC++;
    //     }
    // }
    // let countArr = [];
    // countArr.push(countA,countB,countC);

    // if(countArr.includes(3) && countArr.includes(2)){
    //     return true;
    // }
    // else {
    //     return false;
    // }

    //  Alternate Solution : 
//     let countA = arr.filter((item)=>item == 'a').length;
//     let countB = arr.filter((item)=>item == 'b').length;
//     let countC = arr.filter((item)=>item == 'c').length;

//     return (countA == 2 || countB == 2 || countC == 2) && (countA == 3 || countB == 3 || countC == 3)
// }

// Problem - 9 : isItLetter
// console.log('z'.charCodeAt(0));
// function isItLetter(char) {
//     if(char.charCodeAt(0)>=65 && char.charCodeAt(0)<=90 || char.charCodeAt(0)>=97 && char.charCodeAt(0)<=122){
//         return `'${char}' is a letter`;
//     }
//     else{
//         return `${char} is not a letter`;
//     }
// }

// console.log(isItLetter('a'))

// Problem - 10 : CelciusToRomer

// function celciusToRomer(temp){
//     return ((temp * (21/40)) + 7.5);
// }

// Problem - 11 : Reverse Letter 
// function reverseLetter(str){
//     let arr = [];
//     for (let i = 0; i < str.length; i++) {
//         console.log(str[i].charCodeAt(0))
//     }
//     //return arr.reverse().join('')
// }

// reverseLetter('ultr53o?n')
// console.log('a'.charCodeAt(0))

// Problem - 12 : FInding max & min num from arr
// function minMax(arr){
//     return [Math.min(...arr), Math.max(...arr)];
// }

// Problem - 13 : All star code 
// let date = new Date(2024,1,4);
// console.log(date,date.getDay());

// Problem - 14 : Rotate for a Max
// function maxRot(n) {
//     let arr = String(n).split('');
//     let ansArr=[n];

//     for (let i = 0; i < arr.length-1; i++) {
//         let num = arr.splice(i,1);
//         arr.push(num[0]);
//         ansArr.push(Number(arr.join('')));
//     }
//     ansArr.sort((a,b)=>a-b);
//     console.log(ansArr)
//     return(ansArr[ansArr.length-1])
// }

// console.log(maxRot(56789));

// let arr = [1,2,3,4,5];
// let b = arr.map((item)=>{
//     if(item%2==1){
//         return arr.pop();
//     }
// })  

//console.log(arr.pop())
// console.log(arr);   
// console.log(b);

// let a = {};
// let b = {key :'b'};
// let c = {key :'c'};
// console.log(a)
// a[b]=100;
// a[c]= 200;

// console.log(a[b]);

// Problem - 15 : 
// function findGlasses(arr) {
//     let ansArr = arr.filter((item,index)=>{
//         return item.includes('O') && item.includes('-');
//     });
//     console.log(ansArr);

//     console.log(Object.values(ansArr))
// }

// findGlasses(['OOOO----~OOO', '-------', 'OOOOOOO', 'OO-OO-OO-O']);

// Problem - 16 : Square up to 
// function squareUp(n) {
//     let squareNum = Math.pow(n,2);
//     let num=0;
//     let ansArr=[];
//     for (let i = 1; i <= squareNum; i++) {
        
//         ansArr.push(num);
//         num++;
//     }
// }

// let set = new Set();
// set.add(1)
// set.add(12)
// set.add(4)
// set.add(5)
// set.add(1)
// console.log(set)

// Question : Pair Zeros ..................................................................................................................................
