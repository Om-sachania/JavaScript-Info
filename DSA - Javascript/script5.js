// STRING : Collection of CHARACTERS

// SLICE METHOD : It returns the sub-string using the indexes (NOTE : last index is not included)

// let string = "Micheal";
// console.log(string.slice(1,4));
// console.log(string.slice(-4,-1));

// SUB-STRING : Same as SLICE but it does not take -ve indexes 

// let string = "Micheal";
// console.log(string.substring(1,4));
// console.log(string.substring(-4,-1)); // THIS WILL NOT WORK 

// TASK - 1 : Print each character in new line :

// let string = "Micheal";

// for (let i = 0; i < string.length; i++) {
//     console.log(string[i]);
// }

// TASK - 2 : Print string in reverse order : 
// let string = "Micheal";
// let rev = '';

// for (let i = string.length-1; i >=0 ; i--) {
//     rev += string[i]
// }
// console.log(rev);

// TASK - 3 : Pallindrome 

// let string = prompt('Enter a string')
// let rev = '';

// for (let i = string.length-1; i >=0 ; i--) {
//     rev += string[i]
// }

// if(string === rev) console.log('Pallindrome');
// else console.log('Not Pallindrome')

    // EFFECTIVE SOLUTION : 

    // let string = prompt('Enter a string')
    // let i = 0;
    // let j = string.length-1;
    // let isPallindrome = true;
    
    // while(i<j){
    //     if(string[i] !== string[j]){
    //         isPallindrome = false;
    //     }
    //     i++;
    //     j--;
    // }

    // if(isPallindrome) console.log('Pallindrome');
    // else console.log('Not Pallindrome');


// TASK - 4 : Toggle the string 
// EXAMPLE : 'AbcDeF' --> 'ABCdEf'

// let string = prompt('Enter a string');
// let toggleString = "";

// for(let i=0;i<string.length;i++){

//     let charCode = string.charCodeAt(i);

//     if(charCode>=65 && charCode<=90){
//         toggleString+= String.fromCharCode(charCode+32);  
//     }
//     else{
//         toggleString+= String.fromCharCode(charCode-32);  
//     }
// }

// console.log(toggleString);


// TASK - 5 : Number of occurance of letters in an word 

// let string = prompt('Enter a string');
// let arr = [];

// console.log(string)
// for (let i = 0; i < string.length; i++) {
//     if(arr[string.charCodeAt(i)]) arr[string.charCodeAt(i)] += 1;
//     else arr[string.charCodeAt(i)] = 1;
// }
// for (let index = 0; index < arr.length; index++) {
//     if(arr[index]>0) console.log(String.fromCharCode(index) + " : "+arr[index])
// }
// console.log(arr)


