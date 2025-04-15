// LECTURE - 2 : Conditional Statements

// QUESTOIN -1 : Discount Problem (Returning amount to pay)

// let amount = +prompt('What amount to pay ? ')
// let dist;
// if(amount>0 && amount<=5000){
//     dist =0
// }else if(amount>5000 && amount<=7000){
//     dist =5
// }else if(amount>7000 && amount<=9000){
//     dist =10
// }else if(amount>9000){
//     dist =20
// }else{
//     dist = NaN
// }

// console.log(isNaN(dist)?'Wrong Input' : amount-Math.floor((amount*dist)/100));

//QUESTION - 2 : ELECTRICITY BILL 

// let units = +prompt('Enter electrcity units : ');

// let amount = 0;

// if(units>400){
//     amount += (units-400) * 13 ;
//     units = 400;
// }
// if(units>200 && units<=400){
//     amount += (units-200) * 8 ;
//     units = 200;
// }
// if(units>100 && units<=200){
//     amount += (units-100) * 6 ;
//     units = 100;
// }
// amount += units*4;

// console.log(amount)


// VARIANT OF SWITCH CASE : 

// let num = 0.2 + 0.1;

// switch(num){
//     case 0.3 : console.log('Jaimin')
//     break;

//     case 0.5 : console.log('Five')
//     break;

//     default : console.log('Invalid');
// }