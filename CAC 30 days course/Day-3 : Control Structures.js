// Task 1 : 
let num = 15;
if (num > 0) {
    console.log(`${num} : is positive num`)
}else if (num == 0){
    console.log(`${num} : is 0`)
} else {
    console.log(`${num} : is negative num`)
}

// Task 2 : 
let age = 54;
if (age>=18) {
    console.log("You are eligible to vote!!");
} else {
    console.log("You are not eligible to vote!!");
}

// Task 3 : 
let num1 = 4;
let num2 = 414;
let num3 = 185;

if (num1 > num2) {
    if (num1 > num3) {
        console.log(`${num1} is largest!!`);
    }
    else{
        console.log(`${num3} is largest!!`);
    }
} else if(num2 > num1) {
    if (num2 > num3) {
        console.log(`${num2} is largest!!`);
    }
    else{
        console.log(`${num3} is largest!!`);
    }
}
else{
    console.log(`${num3} is largest!!`);
}

// Task 4 : 
let dayOfWeek = 5;
switch (dayOfWeek) {
    case 1:
        console.log("Monday!!");
        break;

    case 2:
        console.log("Tuesday!!");
        break;
    
    case 3:
        console.log("Wednesday!!");
        break;

    case 4:
        console.log("Thursday!!");
        break;

    case 5:
        console.log("Friday!!");
        break;

    case 6:
        console.log("Saturday!!");
        break;

    case 7:
        console.log("Sunday!!");
        break;

    
    default:
        console.log("There are only 7 days in a week")
        break;
}

// Task 5 :

let marks = 42;

switch (true) {
    case (marks>=90 && marks<100):
        console.log("A Grade")
        break;

    case (marks>=80 && marks<90):
        console.log("B Grade")
        break;

    case (marks>=70 && marks<80):
        console.log("C Grade")
        break;

    case (marks>=60 && marks<70):
        console.log("D Grade")
        break;

    case (marks>=50 && marks<60):
        console.log("E Grade")
        break;

    case (marks<=50):
        console.log("F Grade")
        break;

    default:
        console.log("Invalid Marks!!!");
        break;
}

// Task 6 : 
let x=4;
let evenOrOdd = x%2==0 ? "Even Number" : "Odd Number";
console.log(`${x} is an ${evenOrOdd}`);

// Task 7 : 
let year = 2024;
if ((year%4 ==0) && (year%100 != 0) || (year%400 == 0)) {
    console.log("Leap Year!!")
} else {
    console.log("Not a leap year!!");
}