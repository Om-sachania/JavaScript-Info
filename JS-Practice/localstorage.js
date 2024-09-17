// Creating a key in local Storage : 
// localStorage.setItem('item',1);

// // Getting a value from localStorage : 
// console.log(localStorage.getItem('item'));

// // Set a key : 
// localStorage.item=2;

// // Deleting an key from localStorage : 
// delete localStorage.item;

// If the key is user-generated then is not possible to access like an Object : 
// let b = 'length';
// localStorage[b]=4;
// NOTE : In the upper case setItem & getItem works better.

// Delete everything : 
// localStorage.clear();

// localStorage.setItem('John','Collins');
// localStorage.removeItem('');

// Iterating the localStorage items : 
// for (let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i);
//     console.log(`${key} : ${localStorage.getItem(key)}`);
// }

// Using for-in loop : let textArea= document.querySelector('textarea');
// textArea.oninput = function(){
//     localStorage.setItem('area',textArea.value);
// }
// for (const key in localStorage) {
//     console.log(key)
// }

// NOTE : Using for-in loop is an bad idea as it gives me some of the unwanted keys like (length,clear).

//console.log(localStorage)

// Using for-of loop : 
// let keys = Object.keys(localStorage);   
// for (const key of keys) {
//     console.log(key); // OUTPUT : John , item
// }

// localStorage.apple = "Red Apple";

// localStorage.employee = {empID : 1};
// localStorage.setItem('student',{name : 'gsD'});

// console.log(localStorage.getItem('employee'))

// localStorage.cars=['bmw','audi'];

/*
    IMPORTANT NOTE : 
        Both key and value in localStorage must be STRINGS.
        If it not in STRING format then it gets converted into STRING .

        Example : The above employee value is an OBJECT then it gets converted into [object Object]
*/

// We can use JSON to store objects : 
// localStorage.user = JSON.stringify({age:29});

// let user=JSON.parse(localStorage.user);
// console.log(user.age);

// Another way to access it : 
// console.log(JSON.stringify(localStorage.user,null,2));

// SESSION STORAGE : 
// console.log(sessionStorage);

// sessionStorage.setItem('fruit','pear');

// setTimeout(()=>{
//     sessionStorage.clear()
// },5000);

// localStorage.clear();

// Task : 
// let textArea= document.querySelector('textarea');
// textArea.oninput = function(){
//     localStorage.setItem('area',textArea.value);
// }
