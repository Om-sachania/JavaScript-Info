// Async function : It always returns an promise

    // Note : If you donot return a promise then it WRAPS the return value inside 
    //        an PROMISE and then returns that PROMISE.

// async function getData(){
//     return "Hello";
// }

// console.log(getData()) // It is an promise.

// To get the "Hello" in console : 
// let dataPromise = getData();
// dataPromise.then((response)=>console.log(response)); // Output : Hello

// Returning a Promise : 

// let prom = new Promise((resolve,rej)=>{
//     setTimeout(()=>{
//         resolve("New Promise Resolved");
//         //rej("Error!!")
//     },2000)
// });

// async function getPromise(){
//     return prom;
// }

// let returnPromise = getPromise();    
// returnPromise.then((response)=>console.log(response));

// Using Await Keyword : 
    // Resolving a promise without async/await function :
    // function getData(){
    //     prom.then(res => console.log(res)); 
    //     console.log('OK')
    // }
    // getData() // Output : New Promise Resolved

//     // Using an async/await function : 
    // async function handlePromise(){
    //     const val = await prom;
    //     console.log("Ok")
    //     console.log(val);
    // }

    // handlePromise(); // Output : New Promise Resolved
// IMPORTANT : Difference between normal function & Async/Await Function 

// let prom = new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("New Promise Resolved");
//         },1000);
//     });

// let prom1 = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("Promise 2 Resolved!!!");
//     },3000);
// });

// function resolvePromise(){
//     prom.then(res => console.log(res));
//     console.log("Hello World!!");
// }

// resolvePromise(); 
/*  
    In above code :
        Here first "Hello World!!" will be printed & then "New Promise Resolved"
        will be printed.
*/ 

// async function getData(){
//     const val = await prom;
//     const val2 = await prom1;
//     console.log(val); 
//     console.log(val2);
//     console.log("Using async await");
// }

// getData();

/*
    Now in above code (getData) :
        It will wait at line 65 for 5secs(as specified in promise) & then it will
        print the "Using async await" followed by "New Promise Resolved" will be
        printed.

    THIS IS THE MAIN DIFF :  
        as in normal func the will won't wait for promise to settle 
        But, in the async function it will wait as AWAIT keyword is used.
*/

// Different Cases of Async-Await : 

    // CASE 1 : Calling same promise in 2 different values : (VAL , VAL2)

// let promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("P1 Resolved Successfully!!");
//     },5000)
// });

// async function handlePromise(){
//     let val = await promise1;
//     console.log("Hello");
//     console.log(val);

//     let val2 = await promise1;
//     console.log("Hii");
//     console.log(val2)
// }   

// handlePromise();

/*
    NOTE : 
        The output's 4 lines all will come/displayed together after 5 secs.
    
        As at LINE (let val = await promise1) it waits for 5secs for promise 
        to get RESOLVED & then it prints "Hello" followed by val (VALUE of Promsie)

        Up next at LINE (let va2 = await promise1) it checks whether the promise 
        is resolved or not (In above case it is resolved) so it prints "Hii" followed by
        val2 (SAME AS VAL).

        THEREFORE : ALL THE 4 lines of Output displays together.
*/

    // CASE 2 : Creating 2 different promises (P1 :Takes 5 Secs & P2 :Takes 10Sec)
    
    // let prom1 = new Promise((resolve,reject)=>{
    //     setTimeout(()=>{
    //         resolve("P1 Resolved Successfully!!");
    //     },5000)
    // });
    
    // let promise2 = new Promise((resolve,reject)=>{
    //     setTimeout(()=>{
    //         resolve("P2 Resolved Successfully !!");
    //     },10000);
    // });

    // async function handlePromise(){
    //     let val = await prom1;
    //     console.log("Hello");
    //     console.log(val);
    
    //     let val2 = await promise2;
    //     console.log("Hii");
    //     console.log(val2)
    // }
    
    // handlePromise();    
    
/*
    NOTE : 
        As the promise1 takes 5 secs to execute so at LINE (let val = await promise1)
        it waits for 5 secs & then print "Hello" & val

        Then it checks the LINE (let val2 = await promise2) is executed or not. 
        But the promise2 takes 10 secs. So it will wait for more 5 secs(As 5s are
        COMPLETED)

        At completion of 10 secs it prints "Hii" & val 2
*/

// Wrapping Promise inside an function : 

// let promise1 = ()=> new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("P1 Resolved Successfully!!");
//         },5000)
//     }); 

// let promise2 = () => new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("P2 Resolved Successfully !!");
//     },10000);
// });

// async function handlePromise(){
//     console.log("Start");
//     let val = await promise1();
//     console.log("Hello");
//     console.log(val);

//     let val2 = await promise2();
//     console.log("Hii");
//     console.log(val2)
// }

// handlePromise();

/* VERY VERY IMP : 
    When we wrap promise inside a function like 
    ( let promise1 = ()=> new Promise((resolve,reject)=>{} ) then when we call that 
    function then only it starts execution.

    So when promise1 is called then it takes 10Secs to execute
    And when promise2 is called then it takes 20Secs to execute

    NOTE : Both timer start when they are called (TOTAL TIME : 30Sec)
    
    Without function wrapping it takes 20Secs to execute both(TOTAL TIME : 20Sec)
*/

// Real-Life Example (Fetching API): 

//const GITHUB_API = "https://api.github.com/users/akshaymarch7";

// async function getApiData() {
//     let data = await fetch(GITHUB_API); // it gives a RESPONSE which is a PROMISE.
//     console.log(data);
//     let jsonValue = await data.json(); // it gives a RESULT which is again PROMISE.
//     console.log(jsonValue);

//     /* Another Method :     
//         fetch(GITHUB_API)
//         .then(response => response.json())
//         .then(result => console.log(result))
//     */
// }

// getApiData();

// Error Handling in Async-Await : 

const GITHUB_API = "https://invalidURL";

async function getApiData() {
    try {
        let data = await fetch(GITHUB_API); // it gives a RESPONSE which is a PROMISE.
        let jsonValue = await data.json(); // it gives a RESULT which is again PROMISE.
        console.log(jsonValue);
    } catch (error) {
        console.log(error);
        throw new Error("Error in the catch block!!!")
    }
}

getApiData().catch((err)=>console.log("Caught it"))

//Another way : 
// async function getApiData() {
//     let data = await fetch(GITHUB_API); // it gives a RESPONSE which is a PROMISE.
//     let jsonValue = await data.json(); // it gives a RESULT which is again PROMISE.
//     // console.log(jsonValue);
//     return jsonValue
// }

// getApiData().then((res)=>console.log(res))


// let arr = [{a:4},{b:5}];
// let num = [1,2,3,4];
// [num[0],num[1]] = [num[1],num[0]];

// console.log(num)

// let temp = arr[0].a;
// arr[0].a = arr[1].b;
// arr[1].b =temp;

// let [{a:a1},{b:b1}] = arr
// console.log(a1);
// console.log(b1);

// console.log(arr)

// for(var i=1;i<=5;i++){
//     setTimeout(()=>console.log(i));
// }

// for(let i=1;i<=5;i++){
//     setTimeout(()=>console.log(i));
// }

