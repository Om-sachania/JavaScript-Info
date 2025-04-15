// Task 1 :
let num1 = 14;
let num2 = 10;
console.log("Sum of 2 numbers : ",num1 + num2);

// Task 2 :
console.log("Diff of 2 numbers : ",num1 - num2);

// Task 3 : 
console.log("Multiplication of 2 numbers : ",num1 * num2);

// Task 4 : 
console.log("Division of 2 numbers : ",num1 / num2);

// Task 5 :
console.log("Remainder of 2 numbers : ",num1 % num2);

// Task 6 : 
num1 += 6;
console.log("Adding a number to num1 : ",num1);

// Task 7 :
num1 -= 6;
console.log("Subtracting a number to num1 : ",num1);

// Task 8 :
console.log(`${num1} > ${num2} : `,num1 > num2);
console.log(`${num1} < ${num2} : `,num1 < num2);

// Task 9 : 
let val1 = 15;
let val2 = 15;
console.log(`${val1} > ${val2} : `,val1 > val2);
console.log(`${val1} >= ${val2} : `,val1 >= val2);
console.log(`${val1} < ${val2} : `,val1 < val2);
console.log(`${val1} <= ${val2} : `,val1 <= val2);

// TAsk 10 : 
val2 ='15';
console.log(`${val1} == ${val2} : `,val1 == val2); // == it only checks value
console.log(`${val1} === ${val2} : `,val1 === val2); // === it checks value & dataconsole.log(`${val1} > ${val2} : `,val1 > val2);
console.log(`${val1} >= ${val2} : `,val1 >= val2);

// Task 11 :
console.log(`${num1} > ${num2} && ${num2} < ${num1} : `,(num1 > num2) &&(num2<num1));
console.log(`${num1} > ${num2} && ${num2} > ${num1} : `,(num1 > num2) &&(num2>num1));
/* For && : 
    condition 1   condition 2   result(cond1 && cond2)
    true            true         true
    true            false        false
    false           true         false
    false           false        false
*/

// Task 12 :
console.log(`${num1} > ${num2} || ${num2} < ${num1} : `,(num1 > num2) ||(num2<num1));
console.log(`${num1} > ${num2} || ${num2} > ${num1} : `,(num1 > num2) ||(num2>num1));
/* For || : 
    condition 1   condition 2   result(cond1 && cond2)
    true            true         true
    true            false        true
    false           true         true
    false           false        false
*/

// Task 13 : 
console.log("num1 !=(Not equal to) 10 : ",num1!=10 )

// Task 14 : 
let result = num1 > 0 ? "yes" : "no";
console.log("Num1 is +ve : ",result)