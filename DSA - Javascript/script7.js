let prompt = require('prompt-sync')();
let a = prompt("Enter a number : ");
// process.stdout.write(a);
// console.log();

// PATTERN 1 : BASIC SQUARE

// for(let i=1;i<=a;i++){
//     for(let j=1;j<=a;j++){
//         process.stdout.write("* ");
//     }
//     console.log();
// }

// PATTERN 2 : RIGHT ANGLE TRIANGLE

// for(let i=1;i<=a;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write("* ");
//     }
//     console.log();
// }

// PATTERN 3 : RIGHT ANGLE ALPHABETIC TRIANGLE

// for(let i=1;i<=a;i++){
//     let ascii = 65;
//     for(let j=1;j<=i;j++){
//         process.stdout.write(String.fromCharCode(ascii) + " ");
//         ascii++;
//     }
//     console.log();
// }

// PATTERN 4 : INVERTED RIGHT ANGLE TRINAGLE 

for(let i=a;i>0;i--){
    for(let j=i;j>0;j--){
        process.stdout.write("* ");
    }
    console.log();
}