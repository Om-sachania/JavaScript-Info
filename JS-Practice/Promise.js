// Promise : It is an Object that represnts the completion or failure of an 
// asynchronous opration.

// Asynchronous : if JavaScript has to wait for an operation to complete, it will execute the rest of
// the code while waiting. 

// let subjects = ["eng","maths","sci"];

/* In Callback Function : 

exam(subjects, function (marks){        

    result(marks, function (totalMarks){

        percentage(totalMarks, function (percentValue){

            meritList(percentValue, function(){

            })
        })
    })
})sum(5,4,printSum);

*/

// The above code in Promises : 

// let promise = exam(subjects)  

// promise.then(function(){
//     result();
// })

/* 
    The main difference between the CALLBACK Functions & PROMISE is that :-
    in Callback : we lose the control over code.
                Example :- From line 8 the result function depends on the exam
                            function as and we do not know that whether the result
                            func. would be called or not.
                            (ISSUE : INVERSION OF CONTROL)

    in Promise : In line 25 the result/value of the exam is stored inside the 
                the promise(Which is an empty object). This promise is in our 
                control now.

                Then the line 24 attaches a function/callback func. to the promise
                Promise.then GUARANTEES the execution of callback func. and executes
                it only ONCE.
*/

/* 
Working of a Promise :
    Line 25 when it is executed a empty object is created with the value inside it 
    as undefined . 

    Then after sometime(some seconds) value/result of the exam() gets stored inside
    that promise object.(NOTE : THIS ALL HAPPENS AUTOMATICALLY)

    Promise.then() will only work when there will be data inside the promise
*/

// Real-Life Example :
    // const GITHUB_API = "https://jsonplaceholder.typicode.com/posts/1";

    // let user = fetch(GITHUB_API); // FETCH func returns an promise
    // console.log(user)
// user.then((res)=>res.json()).then((data)=>console.log(data))

/* 
NOTE : THERE IS CATCH in state of user :-
    When you console.log it then it shows the promise pending but inside the 
    promise it shows fulfill. 

    This is because the JS Engine executes every thing very fast and in line 59
    it takes some time to fetch data.

    When the data is fetched it is stored inside that promise & that's why it shows
    FULFILLED inside the promise
*/

// Promise Chaining : 

// exam(subjects)
// .then(function(marks){
//     return result(marks);
// })
// .then(function(totalMarks){
//     return percentage(totalMarks);
// })
// .then(function(percentValue){
//     return meritList(percentValue);
// })


    //Another Way of Chaining a Promise : 
    
    // new Promise(function(resolve, reject) {
    //     setTimeout(() => resolve(1), 1000);

    // }).then(function(result) {
    //     console.log(result,"IN Then"); // 1
    //     return new Promise((resolve, reject) => { // (*)
    //         setTimeout(() => resolve(result * 2), 1000);
    //     });

    // })
    // .then(function(result) { // (**)

    //     console.log(result,"IN Then"); // 2 
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => resolve(result * 2), 1000);
    //     });

    // }).then(function(result) {
    //     console.log(result,"In Then"); // 4
    // });


// Creating a Promise : 

// let cart = [];

// const promise = createOrder(cart); // It returns an promise
// console.log(promise);

// promise
// .then(function(orderId){
//     console.log("Order ID : ",orderId)
//     return orderId;
// })
// .then(function(orderId) {
//     return proceedToPayment(orderId);
// })
// .then(function(paymentInfo) {
//     console.log(paymentInfo);
//     return paymentInfo;
// })
// .then(function(paymentInfo){
//     return showOrderDetails(paymentInfo);
// })
// .then(function(paymentInfo){
//     console.log(paymentInfo);
// })
// .catch(function(err){
//     console.log(err.message) // ERROR IS HANDLED USING CATCH (NO ERROR IN CONSOLE)
// })

// function createOrder(cart){
//     let pr = new Promise(function(resolve,reject){
//         // validateCart
//         if(!validateCart(cart)){
//             const err = new Error("Cart is not valid");
//             reject(err);
//         }

//         // logic for createOrder
//         let orderId = "123";
//         if(orderId){
//             setTimeout(function(){
//                 resolve(orderId);
//             },3000)
//         }
//     }); 
    
//     return pr;
// }

// // The below function runs for resloving a promise :-
// function validateCart(cart){
//     return true;
// }

// // The below functions runs for rejecting a promise :-
// /* 
//     NOTE : At line 102 CATCH() is used which handles the errors.
// */
// // function validateCart(cart){
// //     return false;
// // }

// function proceedToPayment(orderId){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve(`Payment Successful!! of orderId : ${orderId}`);
//         },3000)
//     })
// }

// function showOrderDetails(paymentInfo){
//     return new Promise(function(resolve,reject){
//         resolve(`Order Confirmed!!`);
//     })
// }

// // Task : 
// function delay(ms){
//     return new Promise(function(resolve,reject){
//         setTimeout(function () {
//             resolve();
//         },ms);
//     })
// }

// let newProm = delay(3000);
// newProm.then(()=> console.log("Runs after 3 secs"));

// let newAb= new Promise(function(resolve,reject){
//     resolve("Reds")
//     //reject('Rejected')
// })
// newAb.then(function(e){
//     console.log(e); 
// }).catch(function(err){
//     console.log(err)
// })

// function delayHello(){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log("Inside Prom")
//             resolve("Hello 0");
//             //reject("Reject 0");
//         },2000);
//     })
// }

// function delayHello1(){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             resolve("Hello 1");
//         },2000);
//     })
// }

// function delayHello2(){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             resolve("Hello 2");
//         },2000);
//     })
// }
// delayHello().then(res =>{
//     delayHello1().then(v=>{
//         console.log(v)
//     })
//     console.log(res)
// });

// delayHello().then((res)=>{
//     console.log(res);
//     //console.log('No func');
// })/*(err)=>console.log(err,"Then"))*/
// .catch((err)=>console.log(err))

// delayHello().then(()=>{throw new Error("Error occured!!!!")}).catch(()=>console.log('Caught in Catch block'))
//delayHello()

// let prom = new Promise(function(res,rej){
//     setTimeout(()=>res("Resolved"),2000)
//     console.log("Inside Promise")
// })

// new Promise(function(res,rej){
//     setTimeout(()=>res("Resolved"),2000)
//     console.log("Inside Promise")
// }).then((res)=>console.log(res))

// console.log(prom);

// function add(a,b){
//     let sum = a+b;
//     console.log(sum)
// }

// add(5,6)

// new Promise((res,rej)=>{
//     res("OK");
// })
// .then((res)=>{
//     //console.log(res);
//     throw new Error("Error!!!");
// })
// .catch((err)=>console.log(err)) 


// let prom = new Promise(()=>{
//     setTimeout(()=>{
//         console.log('ok');
//     },2000);
//     return 5;
// });

// console.log(prom)

// function doSomething(callback) {
//     // Simulate error
//     callback(0,"Success");
// }

// doSomething((err, result) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(result);
//     }
// });

// let promise = new Promise(() => {
//     setTimeout(()=>{
//         res(this);
//     },2000)
// });

// console.log(promise)
// promise.then((result)=>{
//     console.log(result)
// })

let prom = new Promise(function(resolve, reject) {
    setTimeout(() => {
        reject("Error")
        throw new Error("Whoops!");
    },2000);
});

prom.catch((err)=>console.log(`${err},caught`))