// Callback : It means when an fuction is passed as an argument to another function
// then that passed function is known as callback function.

// setTimeout(function (){
//     console.log('Timer');
// },10000)

// function x(){
//     console.log('x');
// }

// x(setTimeout(()=>{
//     console.log('New Timer')
// },1000));

// function printSum(arg){
//     console.log(arg);
// }

// function sum(a,b,printSum){
//     let sum = +a + +b;
//     printSum(sum);
//     //printSum(sum)
// }

// sum(5,4,printSum);  

// // Callback in Callback :

// let subject = ["eng","maths","sci"];

// exam(subjects, function (marks){

//     result(marks, function (totalMarks){

//         percentage(totalMarks, function (percentValue){

//             meritList(percentValue, function(){

//             })
//         })
//     })
// })

// The above code is called as callback hell/Pyramid of Doom it is difficult to
// manage the code.

// function countOfButtonClick(){
//     let count=0;
//     document.getElementById("clickBtn")
//     .addEventListener('click',function sayHello(){
//         console.log('Hello',++count);
//     })
// }
// countOfButtonClick()

// function delayhello(callback,om){
//     setTimeout(() => {
//         console.log(callback);
//         if(om){
//             om();
//         }
//     },1000);  
// }

// delayhello("Bhavik",() => {
//     delayhello("Aman",() => {
//         delayhello("Jay");
//     });
// });

// let value = 1;

// function doSomething(callback){
//     callback()
// }
// doSomething(() => {
//     setTimeout(()=>{
//         console.log("Set timeout")
//         value = 2;
//         console.log(value)
//     },1000);
//     value = 55
// });

// console.log(value)

// async function asyncOperation(i) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             //console.log(`Operation ${i} completed`);
//             resolve(i);
//         }, 1000);
//     });
// }

// async function runSequentialOperations() {
//     for (let i = 0; i < 5; i++) {
//         //console.log(asyncOperation(i))
//         let result = await asyncOperation(i).then((res)=> res)
//         console.log(result)
//         //await asyncOperation(i);
//     }
// }

// runSequentialOperations();


function asyncOperation(i) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Operation ${i} completed`);
            resolve(i);
        }, 1000);
    });
}

function runSequentialOperations() {
    // Start with a resolved promise to handle the first operation
    let promise = Promise.resolve();
    //console.log(promise);

    for (let i = 0; i < 5; i++) {
        promise = promise.then(() => asyncOperation(i));
    }
    // Handle completion after all operations are done
    // promise.then(() => {
    //   console.log('All operations completed');
    // }).catch((error) => {
    //   console.error('An error occurred:', error);
    // });
}

runSequentialOperations();
