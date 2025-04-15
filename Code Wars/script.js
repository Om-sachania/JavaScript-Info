// function modifyNum(num){
//     /*
//     if(typeof(num)!= 'number'){
//         return "Error!!";
//     }
//     else{
//         return ((num*50)+6)
//     }
//     */
    
//     // Alternate solution : 
//     return typeof num === "number" ? num*50+6 : "Error";
// }

// let result = modifyNum(3);
// console.log(result)

// Problem - 2 : Double Char 

// let newStr = "";
// function doubleChar(str) {
//     for (const letter of str) {
//         newStr+=(letter+letter);
//     }
//     return newStr
// }

// console.log(doubleChar("hel"))

// Problem - 3 : DNA to RNA 

// function dnaToRna(str) {
//     if (str.includes('GCAT')) {
//         return str.replaceAll('T','U')
//     } else {
//         return str;
//     }

//     // Alternate Solution : 
//     /*
//     function DNAtoRNA(dna) {
//         return dna.split("T").join("U");
//     }
//     */
// }

// console.log(dnaToRna('GCAT'));

// Problem-4 : Traffic Lights 

// function trafficLight(light){
//     if(light =='green'){
//         return 'yellow';
//     }
//     else if(light == 'yellow'){
//         return 'red';
//     }
//     else if(light == 'red'){
//         return 'green';
//     }
//     else{
//         return "Not a valid color"
//     }

//     // ShortHand : 
//     //return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
// }

// console.log(trafficLight('green'));

// Problem - 5 : Short-Long 

// function shortLong(str1,str2) {
//     let length1 = str1.length;
//     let length2 = str2.length;

//     if (length1<length2) {
//         return str1+str2+str1;
//     }
//     else{
//         return str2+str1+str2;
//     }
// }

// console.log(shortLong('22','1'));

// Problem - 6 : Girl's Age 

// function getAge(str) {
//     return parseInt(str);
// }

// let num = getAge("5 years old");
// console.log(+num);

// Problem - 7 : Exclusive XOR

// function xor(a,b) {
//     return a === b ? false : true;

//     // Alternate solution : 
//     // return a!=b
// }

// console.log(xor(false,false));

// Problem 8 : Checking the date is Today's date :

// function isToday(date){
//     return new Date().toDateString() === date.toDateString();
// }
// let date = new Date();

// console.log(isToday(date));

// Problem 9 : Combat Health :

// function combat(health,damage) {
//     return damage>health ? 0 : health-damage;
// }

// Problem 10 : Count the occurence of a letter 

// function strCount(str,letter) {
//     // let count = 0;
//     // for (let i = 0; i < str.length; i++) {
//     //     if(str[i] == letter) count++ ;
//     // }
//     //return count;

//     //Alternate Solution : 
//     return str.split(letter).length-1;
// }

//console.log(strCount('Hello','o'));