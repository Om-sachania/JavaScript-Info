//Question-1
/*
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (i==j || (5-i+1) == j) {
            document.write("* ");
        } else {
            document.write("&nbsp;&nbsp;");
        }
        
    }
    document.write("<br/>");
}
*/

//Question-2
/*
for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 4; j++) {
        if (i==1 || i==4 || j==1 || j==4) {
            document.write("* ");
        } else {
            document.write("&nbsp;&nbsp;&nbsp;");
        }
        
    }   
    document.write("<br/>");
}
*/

//Question-3
/*
let n=5;
//console.log(Math.floor(5/2));
let half=Math.floor(n/2);
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if (i==j-half || i==j+half || n-i+1==j-half || n-i+1==j+half) {
            document.write("* ");
        } else {
            document.write("&nbsp&nbsp");
        }
        
    }
    document.write("<br/>");
}
*/


//Question-4
let n=5;
let half=Math.floor(n/2);
console.log(half);
for (let i = 1; i <= n; i++) {
    for (let j = n; j >= 1; j--) {
        if (n-i+1<i+j && n-i+1>i-j) {
            document.write("*");
        }
    }   
    document.write("<br/>");
}


//Question-5

// for (let i = 1; i <= 5; i++) {
//     let x=i;
//     for (let j = 5; j >= i; j--) {
//         if(j<i){
//             document.write("&nbsp");
//         }
//         else{
//             document.write("&nbsp"+x);
//             x++;
//         }
//     }
//     document.write("<br/>");
// }
// for (let i = 4; i >= 1; i--) {
//     let x=i;
//     for (let k = 1; k < i; k++) {
//         document.write("&nbsp");
//     }
//     for (let j = 5; j >= i; j--) {
//         document.write("&nbsp"+x);
//         x++;
//     }
//     document.write("<br/>");
// }
