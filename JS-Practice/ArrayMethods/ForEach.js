// Iterate : forEach()
    // Syntax : arr.forEach(item,index,array)
    // fruits.forEach((item,index,array)=>{
    //     console.log(`${item} is at index ${index} in an ${array} array`);
    // });

    const myPromise = Promise.resolve(Promise.resolve('Promise!'));

    function funcOne() {
        myPromise.then(res => res).then(res => console.log(res));
        setTimeout(() => console.log('Timeout!', 1),0);
        console.log('Last line!');
    }

    async function funcTwo() {
        const res = await myPromise;
        console.log(res);
        setTimeout(() => console.log('Timeout!', 2),0);
        console.log('Last line!');
    }

// funcOne();
// funcTwo();

let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("P1 Resolved Successfully!!");
    },5000)
});

async function handlePromise(){
    let val = await promise1;
    console.log("Hello");
    console.log(val);

    let val2 = await promise1;
    console.log("Hii");
    console.log(val2)
}

handlePromise();