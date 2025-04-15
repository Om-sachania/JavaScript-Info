// QUESTION-1 : Scheduling (Shortest Job First or SJF)

// function SJF(jobs, index){
//     let interstedJob = jobs[index];
//     let cycle = 0;
//     jobs.sort((a,b)=>a-b);
//     console.log(jobs)
//     for (const i of jobs) {
//         // console.log(cycle+=i)
//         if(i == interstedJob) return cycle+=i
//         cycle+=i
//     }
    
// }

// console.log(SJF([18,5,8,3,2,5,2], 5));

// QUESTION - 2 : Circle area inside square

// function squareAreaToCircle(size){
//     return (3.14*(size/2)*(size/2));
// }

// QUESTION - 3 : Sort an array by value and index

// function sortByValueAndIndex(array)
// {
//     let temp = array.map((elem,i)=> {
//         return [elem,elem*(i+1)]
//     });
//     return temp.sort((a,b)=>a[1]-b[1]).flatMap((x)=>x).filter((item,i)=>i%2==0)
// }

// sortByValueAndIndex([23,2,3,4,5])

// QUESTION - 4 : Unique Sum

// function uniqueSum(lst){
//     if(lst.length>0){
//         let set = new Set(lst);
//         let arr = Array.from(set)
//         return arr.reduce((acc,curr)=>acc+curr,0);
//     }
//     return null
// }

// uniqueSum([1,3,8,1,8])

// QUESTION - 5 : Complete The Pattern #5 - Even Ladder

// function pattern(n){
//     let output="";
//     for(let i=1;i<=Math.floor(n/2);i++){
//         for(let j=1;j<=i;j++){
//             if(i%2==0){
//                 output+=`${i}`
//             }
//             else{
//                 output+='o'
//             }
//         }
//         output+=`\n`
//     }
//     return output;
// }

// console.log(pattern(13))

// QUESTION - 6 : Leaderboard climbers // INCOMPLETE 

// function leaderboardSort(leaderboard, changes) {
//     console.log(leaderboard);
//     changes = changes.map(element => {
//         return element.split(' ')
//     });
//     console.log(changes)
// }

// leaderboardSort(['John', 'Brian', 'Jim', 'Dave', 'Fred'], ['Dave +1', 'Fred +4', 'Brian -1'])

// QUESTION - 7 : Basics 06: Reversing and Combining Text
// function reverse_and_combine_text(str){
//     let arr = str.split(' ')
//     if(arr.length>1){
//         arr = arr.map((curr)=>curr.split('').reverse().join(''))
//         return arr.join('');
//     }
//     return str.split('').reverse().join('')
// }

// console.log(reverse_and_combine_text("abc"))

// Question : HAPPY NUMBER 

function isHappy(n) {
    let sum;

    if(n<10){
        n = n*n;
    }
    else{
        
    }
}