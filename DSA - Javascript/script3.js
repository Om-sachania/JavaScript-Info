// SUM OF N NATURAL NUMBERS : 

// let n = +prompt("Enter a number : ");
// console.log(typeof n)

// if(n === null){
//     console.log('Cancelled')
// }
// else{
//     if(isNaN(n)){
//         console.log("Invalid Input!!!");
//     }
//     else{
//         if(n>0){
//             let sum=0;
//             for(let i =1;i<=n;i++){
//                 sum+=i;
//             } 
//             console.log(sum)  
//         }
//         else{
//             console.log("enter value greater than 0");
//         }
//     }
// }

// FACTORIAL :

// let n = +prompt("Enter a number : ");

// if(n === null){
//     console.log('Cancelled')
// }
// else{
//     if(isNaN(n)){
//         console.log("Invalid Input!!!");
//     }
//     else{
//         if(n>0){
//             let fact=1;
//             for(let i =1;i<=n;i++){
//                 fact*=i;
//             } 
//             console.log(fact)  
//         }
//         else{
//             console.log("enter value greater than 0");
//         }
//     }
// }


// FACTORS OF A NUMBER 

// let n = +prompt("Enter a number : ");

// if(n === null){
//     console.log('Cancelled')
// }
// else{
//     if(isNaN(n)){
//         console.log("Invalid Input!!!");
//     }
//     else{
//         if(n>0){
//             for(let i =1;i<=n/2;i++){
//                 if(n%i===0){
//                     console.log(i)
//                 }
//             } 
//             console.log(n)  
//         }
//         else{
//             console.log("enter value greater than 0");
//         }
//     }
// }

// PRIME NUMBER : .............................................................................................................

// let n = +prompt("Enter a number : ");

// if(n === null){
//     console.log('Cancelled')
// }
// else{
//     if(isNaN(n)){
//         console.log("Invalid Input!!!");
//     }
//     else{
//         if(n>0){
//             let prime = true;
//             for(let i =2;i<=Math.floor(n/2);i++){
//                 if(n%i===0){
//                     prime = false;
//                 }
//             } 
//             console.log(prime)  
//         }
//         else{
//             console.log("enter value greater than 0");
//         }
//     }
// }

//  A Better approarch of PRIME NUMBER : ..........................................................................................

// function isPrime(n){
//     if(n === 1) return false;
//     if(n === 2) return true;
//     if(n%2 === 0) return false;
    
//     // IMPORTANT NOTE : If a number isn't divisible from 2 to square root it then it wouldn't be divisible after it also
//     for(let i = 3;i<=Math.floor(Math.sqrt(n));i+=2){
//         if(n%i===0) return false;
//     }
//     return true;
// }

// let n = +prompt("Enter a number : ");

// if(n === null){
//     console.log('Cancelled')
// }
// else{
//     if(isNaN(n)){
//         console.log("Invalid Input!!!");
//     }
//     else{
//         if(n>0){
//             console.log(isPrime(n));
//         }
//         else{
//             console.log("enter value greater than 0");
//         }
//     }
// }


// What is BREAK and CONTINUE :- ...................................................................................................................

// BREAK :- It means that it stops/exits the loop
// for(let i=1;i<=23;i++){
//     if(i==10) break;
//     console.log(i);
// }

// CONTINUE : It skips the current the iteration and goes to the next iteration 
// for(let i=1;i<23;i++){
//     if(i==10) continue;
//     console.log(i)
// }

// USE OF FOR LOOP AND WHILE LOOP :-..........................................................................................................

// For Loop :- When you know how many steps/iterations you need to go then use for loop
    //example :- Sum first 10 numbers 

// WHILE Loop :- When you donot know hpw many steps/iterations you need to go but know a condition where could go 
    // example :- Sum till the sum of numbers is 50


// SUM OF DIGITS ................................................................................................................

// let n = +prompt("Enter a number : ");

// if(n === null){
//     console.log('Cancelled')
// }
// else{
//     if(isNaN(n)){
//         console.log("Invalid Input!!!");
//     }
//     else{
//         if(n>0){
//             let sum=0;
//             while(n>0)
//             {
//                 let remainder = n%10;
//                 sum+=remainder;
//                 n = Math.floor(n/10);
//             }
//             console.log(sum)
//         }
//         else{
//             console.log("enter value greater than 0");
//         }
//     }
// }

// REVERSE THE NUMBER : .................................................................................................................................
// let n = +prompt("Enter a number : ");

// if(n === null){
//     console.log('Cancelled')
// }
// else{
//     if(isNaN(n)){
//         console.log("Invalid Input!!!");
//     }
//     else{
//         if(n>0){
//             let rev=0;
//             while(n>0)
//             {
//                 let remainder = n%10;
//                 rev = rev*10 + remainder;
//                 n = Math.floor(n/10);
//             }
//             console.log(rev);
//         }
//         else{
//             console.log("enter value greater than 0");
//         }
//     }
// }


// STRONG NUMBER : Example = 145 = 1! + 4! + 5! === 145 then it is STRONG number................................................................................

// let n = +prompt("Enter a number : ");
// let original = n;

// if(n === null){
//     console.log('Cancelled')
// }
// else{
//     if(isNaN(n)){
//         console.log("Invalid Input!!!");
//     }
//     else{
//         if(n>0){
//             let sum=0;
//             while(n>0)
//             {
//                 let remainder = n%10;
//                 let fact = 1;
//                 for(let i=1;i<=remainder;i++){
//                     fact*=i;
//                 }
//                 sum+=fact;
//                 n = Math.floor(n/10);
//             }
//             if(sum === original){
//                 console.log(true)
//             }
//             else{
//                 console.log(false)
//             }
//             // console.log(rev)
//         }
//         else{
//             console.log("enter value greater than 0");
//         }
//     }
// }

// GUESS THE NUMBER : .....................................................................................................................................
// let n = Math.floor((Math.random()*100)+1);
// // console.log(n)

// let guessedNumber = -1;
// let attemp = 5;

// while(guessedNumber!==n && attemp>0){
//     guessedNumber = +prompt(`Enter a number YOU HAVE ${attemp} attemps left` );
//     if(isNaN(guessedNumber) || guessedNumber<1 || guessedNumber>100){
//         console.log('Try again between 1 to 100');
//         attemp--;
//         continue;
//     }
//     if(guessedNumber<n){
//         console.log('Too Low')
//         attemp--;
//     }
//     else if(guessedNumber>n){
//         console.log('Too High');
//         attemp--;
//     }
//     else{
//         console.log('Congrats the number was : ',guessedNumber);
//     }
//     // console.log(attemp)
// }
// if(guessedNumber !== n ){
//     console.log('Sorry Your attempts are over',n);
// }   

// CALCULATOR : .............................................................................................................................................

// let typeOfOperation = +prompt('1 : Addition , 2:Subtraction, 3:Multiplication, 4:Division');
// // console.log(typeOfOperation)

// if(typeOfOperation===1 || typeOfOperation===2 || typeOfOperation===3 || typeOfOperation===4){
//     console.log(typeOfOperation)
// }
// else{
//     console.log("INvalid")
// }

