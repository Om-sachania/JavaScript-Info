// 1. Basic Creation and execution of it : 

// function hello(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Promise Resolved!!!");
//             reject('Rejected Case!!')
//         },1000);
//     })
// }

// hello()
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));

//.......................................................................................
// 2. Multiple Chain of Promise

// function fetchData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Data Fetched");
//         },1000);
//     })
// }

// function processData(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Data processed");
//         },1000);
//     })
// }

// function saveData(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Data Saved");
//         },1000);
//     })
// }

// fetchData()
// .then((res)=>{
//     console.log(res);
//     return processData(res)
// })
// .then((res)=>{
//     console.log(res);
//     return saveData(res)
// })
// .then((res)=>console.log(res))

//.................................................................................................
// 3. Using Promise.all() :

// function task1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Task 1 completed !!!")
//             // reject("Rejected")
//         },1000)
//     })
// }

// function task2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Task 2 completed !!!")
//             // reject("Rejected")
//         },2000)
//     })
// }

// function task3(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Task 3 completed !!!")
//             //reject("Rejected")
//         },3000)
//     })
// }

// Promise.all([task1(),task2(),task3()])
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))

//.................................................................................................
// 4. Implement task 2 using async await :

// async function fetchData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Data Fetched");
//         },1000);
//     })
// }

// async function processData(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             // resolve(data+" and Data processed");
//             reject(data + " Something went wrong!!")
//         },1000);
//     })
// }

// async function saveData(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(data+" and Data Saved");
//         },1000);
//     })
// }

// async function solve(){
//     try{
//         let firstFunc = await fetchData();
//         let secondFunc = await processData(firstFunc);
//         let thirdFunc = await saveData(secondFunc);
//         console.log(thirdFunc)
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// solve()

//.................................................................................................
// 5. Implement task 3 using async await :

// function task1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Task 1 completed !!!")
//             // reject("Rejected")
//         },1000)
//     })
// }

// function task2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Task 2 completed !!!")
//             // reject("Rejected")
//         },2000)
//     })
// }

// function task3(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Task 3 completed !!!")
//             //reject("Rejected")
//         },3000)
//     })
// }

// let resultOfProm = Promise.all([task1(),task2(),task3()])

// async function showResults(){
//     try {
//         let values = await resultOfProm;
//         console.log(values)
//     } catch (error) {
//         console.log(error);
//     }
// }
// showResults()

//.................................................................................................
// 6. Promise.allSettled :

let prom1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Result 1')
    },1000)
})
let prom2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //resolve('Result 1')
        reject('Error 2 !!')
    },2000)
})
let prom3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Result 3')
    },3000)
})
let prom4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //resolve('Result 1')
        reject('Error 4')
    },1000);
});

Promise.allSettled([prom1,prom2,prom3,prom4])
.then((result)=>console.log(result))
.catch((error)=>console.log(error));