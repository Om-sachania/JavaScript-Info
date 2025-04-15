// LET VAR DIFFERENCE : 

// Using VAR : 
// console.log(a)
// var a = 10

// Note : The above code does not generate error as output is undefined

// Using LET : 
// console.log(a)
// let a = 10

// Note : This generates error as variables declared with let are not allowed to use before initialization


// Swapping two numbers : 

// Method : 1 : Using extra variable
// let a = 5;
// let b = 20;

// let c = a; // c=5, a=5
// a = b; // a = 20, b=20
// b = c; // b = 5, c=5

// console.log('a: ',a)
// console.log('b: ',b)

// Method 2 : Addition and subtraction 

// let a = 5;
// let b = 20;

// a = a+b // a=25
// b = a-b // b = 25-20 :- b=5
// a = a-b // a = 25-5  :- a=20

// Method 3 : Using destructuring

// let a = 5;
// let b = 20;

// [a,b] = [b,a];
// console.log('A : ',a);
// console.log('B : ',b)

// Modulus Operator : (%) It gives you remainder

// console.log(4 % 6) // Note : when the left hand side operand is less than the right hand side operand the output will always be left side operand

// Unary Operator : ++ , --

    // let a = 11, b = 22;

    // let c = a + b + a++ + b++ + ++a + ++b;

    // console.log('A : ',a);
    // console.log('B : ',b);
    // console.log('C : ',c);

    // let i = true;
    // i++;
    // console.log(i) // This will give 2 and true is converted into integer(1)

    // let x = '13';
    // x++;
    // console.log(x)

    // let j = 12++;
    // console.log(j) // This will throw an error as you cannot give ++ or -- directly to constant

    // Tricky Example : 
    // let a = 10;
    // let b = ++(a++);
    // console.log(b) // because b = ++(10) 