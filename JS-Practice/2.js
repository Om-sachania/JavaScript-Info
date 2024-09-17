// function a(b){
//     console.log("A function")
//     setTimeout(()=>{
//         b();
//     },2000);

// }

// function b(){
//     console.log('B function')
// }

// a(b);

// Define the asynchronous operation with a callback
// function fetchData(callback) {
//     console.log('Fetching data...');
//     setTimeout(() => {
//         const data = { id: 1, name: 'John Doe' };
//         console.log('Data fetched');
//         callback(data); // Call the callback function with the data
//     }, 2000); // Simulates a 2-second delay
// }

// // Define the callback function to handle the fetched data
// function handleData(data) {
//     console.log('Handling data:', data);
// }

// // Call the fetchData function and pass the handleData function as a callback
// fetchData(handleData);

function test(){
    this.name = 'Adam';
    this.age = 41;
    let student = {
        name : 'John',
        display : function(){
            console.log(this);
            console.log('Name : ',this.name);
            console.log('Age : ',this.age);
        },
        displayWithArrow : ()=>{
            console.log(this);
            console.log('Name : ',this.name);
            console.log('Age : ',this.age);
        }
    };
    student.display();
    console.log("\n----------Display With Arrow Function-----------\n");
    student.displayWithArrow();
};

console.log(this)
//test();

