//..............................................................................................
// 1. Fetching Data with Promise : 

// function fetchData(){
//     return fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then((res)=>res.json())
//     .then((data)=>console.log(data))
// }

// console.log(fetchData())
// let response = fetchData();
// response
// .then((res)=>res.json())
// .then((data)=>console.log(data))

//..............................................................................................
// 2. Creating a Promise-based Timer : 

// function promiseTimer(ms){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("Resolve")
//         },ms)
//     })
// }

// console.log(promiseTimer(4000))

//..............................................................................................
// 3. Sequential Execution with Promises

// function promise1(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("Promise 1 Resolved!!!")
//         },1000)
//     })
// }

// function promise2(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("Promise 2 Resolved!!!")
//         },1000)
//     })
// }

// function promise3(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("Promise 3 Resolved!!!")
//         },1000)
//     })
// }

// promise1()
// .then((result)=>{
//     console.log(result);
//     return promise2()
// })
// .then((result)=>{
//     console.log(result);
//     return promise3();
// })
// .then((result)=>{
//     console.log(result);
// })

//..............................................................................................
// 4. Promise.allSettled : 

// let prom1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise 1 Resolved!!!")
//     },1000)
// })

// let prom2= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise 2 Resolved!!!")
//     },2000)
// })

// let prom3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("Promise 3 Rejected!!!")
//     },3000)
// })

// let prom4 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("Promise 4 Rejected!!!")
//     },5000)
// })

// let arr = [prom1,prom2,prom3,prom4];

// function promiseAllSettled(arrayOfPromises){
//     let resultOfAllPromises = Promise.allSettled(arrayOfPromises)
//     resultOfAllPromises
//     .then((result)=>console.log(result))
// }

// promiseAllSettled(arr)

//..............................................................................................
// 5. Promise.finally : 

// function performingCleanups(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log('Inside Promise')
//             res('Resolved');
//             rej('Rejected');
//         },2000)
//         console.log('OK')
//     })
// }

// let myPromise = performingCleanups();
// myPromise
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))
// .finally(()=>console.log('All cleanUps Done !!!'))