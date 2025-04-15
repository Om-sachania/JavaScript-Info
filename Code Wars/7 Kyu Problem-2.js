// Problem - 1 : Remove BMW 
// function removeBMW(str) {
//     let removeArr=[];
//     for (let i = 0; i < str.length; i++) {
//         if(str[i]!='B' && str[i]!='M' && str[i]!='W' && str[i]!='b' && str[i]!='m' &&str[i]!='w'){
//             removeArr.push(str[i]);
//         }
//     }
//     return removeArr.join('');
// }

// console.log(removeBMW('bmwvolvoBMW'));

// Problem-2 : Highest & Lowest 
// function highAndLow(numbers) {
//     let numberArray = numbers.split(' ');
    
//     return `${Math.max(...numberArray)} ${Math.min(...numberArray)}`;
// }

// console.log(highAndLow('1 2 3 4 5'));

// Problem-3 : Fly as fast as you can
// function flyTime (dist, train, fly) {
//     return train == 0 ? null : dist/(2*train) * fly;
// }

// console.log(flyTime(100,50,30))

// let obj = {"Java": 10, "Ruby": 80, "Python": 65} 
// let arr=[]


// for (const key in obj) {
//     if(obj[key]>60){
//         if(obj[key]>arr[arr.length-1])
//         arr.push(key)
//     }
// }
// console.log(arr);

// function matrixSquareUp(b) {
//     const mat = [];
//     for (let i = 1; i <= b; i++) {
//         const row = [];
//         for (let j = b; j > 0; j--) row.push(i < j ? "x" : `${j}`);
//         mat.push(row);
//     }
//     return mat;
// }


// ISOGRAMS PROBLEM : 4 
// let str = 'Dermatoglyphics';

// function isIsogram(str) {
//     str= str.toLowerCase();
//     let obj = {};
//     for (const letter of str) {
//         obj[letter] ? obj[letter]+=1 : obj[letter]=1
//     }
//     return !Object.values(obj).includes(2)
// }

// console.log(isIsogram(str))

// GET THE MIDDLE CHARACTER :-......................................................................................................

// let str = 'testing';

// function getMiddleChar(str){
//     return str.length%2==0 ? str[Math.floor((str.length/2)-1)]+str[Math.floor(str.length/2)] : str[Math.floor(str.length/2)]
// }

// console.log(getMiddleChar(str))
// // console.log(Math.floor(str.length/2))


// CHECK PERFECT SQUARE :-..........................................................................................................
// let num =0;

// function checkSquare(num){
//     let sqrt = Math.sqrt(num);
//     if(num<0) return false;
//     return sqrt.toString().split('.').length>1 ? false : true

//     //ALERTNATE Solution :-
//     //  Math.sqrt(n) % 1 === 0;
// }
// console.log(checkSquare(num))

// FIND LENGTH OF SHORTEST WORD:-.....................................................................................................
// let str= `21inc 21inc Steem Bitcoin Lisk ProofOfStake Factom Steem Factom Lisk Factom Lisk BTC BTC BTC Lisk`;

// function findShort(s){
//     let newArr = s.split(' ').map((item)=>item.length)
//     newArr.sort((a,b)=>a-b)
//     return newArr[0];
// }

// console.log(findShort(str))

//................................................................................................................................
// let str='abcd';

// function accum(s){
//     return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-')
// }

// console.log(accum(str))

//.................................................................................................................................

// function maskify(str) {
//     if(str.length>4){
//         let spilitedArray = str.split('')
//         spilitedArray.splice(0,(str.length-4),'#');
//         return spilitedArray
//     }
// }

// let str = 'Nananananananananananananananana Batman!'
// console.log(maskify(str))


//...................................................................................................................................
// function solution(str,ending){
//     return str.endsWith(ending)
//     // Alternate Solution :
//     // let endOfString = str.slice(-(ending.length));
//     // return ending.length == 0 ? true : endOfString === ending;
// }

// console.log(solution('ab',''))

// SQUARING THE DIGITS...............................................................................................................
// function squareDigits(num){
//     return +(num.toString().split('').map((num)=> +num*+num).join(''));
// }

// console.log(squareDigits(125))

//...................................................................................................................................
function getSum(a,b){ 
    if(b<a){
        a = a+b;
        b = a-b;
        a = a-b;
    }
    let sum = 0;
    for (let index = a; index <=b; index++) {
        console.log(index);
        sum+=index;
    }
    return sum
}

console.log(getSum(0,-2))