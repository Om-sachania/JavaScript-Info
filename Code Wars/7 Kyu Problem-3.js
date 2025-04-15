// Question-1 : REVERSE THE WORDS 

// function reverseWords(str){
//     let wordsArray = str.split(' ');
//     let newArr = wordsArray.map((word)=>word.split('').reverse().join(''))
//     return newArr.join(' ')
// }
// console.log(reverseWords("This is an example!"))
// reverseWords("This is an example!")

// Question-2 : Triangular Teasure 

// function triangular( n ) {
//     return n>0 ? n*(n+1)/2 : 0
// }

// console.log(triangular(45))


// QUESTION-3 : Making Copies
// function copyList(l){
//     return l.map((item)=>item);
// }

// let t = [1, 2, 3, 4]

// let tCopy = copyList(t)
// t[1]+=5
// console.log('Original : ',t)
// console.log(tCopy)


// Whose Bicycle : 
// let ageTable = {
//     0: 14,
//     1: 9,
//     2: 8
// }

// function whoseBicycle(diary1, diary2, diary3) {
//     let sumArr = [{...diary1},{...diary2},{...diary3}];

//     let marksArr = sumArr.map((obj)=>{
//         let total=0;
//         for (const key in obj) {
//             total+=obj[key];
//         }
//         return total;
//     });

//     console.log(marksArr);
//     let highestMark = Math.max(...marksArr);
//     let first = marksArr.indexOf(highestMark);
//     let last = marksArr.lastIndexOf(highestMark);

//     if(first === last){
//         return ageTable[first];
//     }
//     else{
//         return last
//     }
// }

// console.log(whoseBicycle(
//     {
//         'algebra': 6,
//         'history': 7,
//         'physics': 8,
//         'geography': 9,
//         'chemistry': 10
//     },
//     {
//         'algebra': 8,
//         'history': 7,
//         'physics': 8,
//         'geography': 9,
//         'chemistry': 10
//     },
//     {
//         'algebra': 6,
//         'history': 12,
//         'physics': 5,
//         'geography': 9,
//         'chemistry':10,
//     }
// )
// )

// let obj = {
//     'algebra': 6,
//     'history': 7,
//     'physics': 8,
//     'geography': 9,
//     'chemistry': 10
// }

// console.table(obj);

// let num1 = '61632826';
// let num2 = '5688248';
// let oddIndex;
// for (let index = num1.length-1; index >= 0; index--) {
//     let digit = num1[index];
//     if(digit%2!==0) {
//         oddIndex = (index);
//         break;
//     }
// }

// console.log(num1.slice(0,oddIndex+1))


function abc(string){
    console.log(string.replaceAll("_"," ").split(" "))
}

abc("the_stealth_warrior")

