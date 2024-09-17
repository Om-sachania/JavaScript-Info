// let a  = new  Promise((reslove,reject) => {
//   setTimeout(() => {
//      reslove("ok 5000")
//   }, 5000);
// })
// let b  = new  Promise((reslove,reject) => {
//   setTimeout(() => {
//      reslove("ok 3000")
//   }, 3000);
// })

// async function ans(){
//   let bb = await b;
//   console.log(bb);
//   let aa =await a;
//   console.log(aa);
// }
// ans()

// function firstOperation(callback) {
//   // Some async operation
//   setTimeout(() => {
//     callback(null, "First result");
//   }, 1000);
// }

// function secondOperation(result, callback) {
//   // Some async operation
//   setTimeout(() => {
//     callback(null, "Second result");
//   }, 1000);
// }

// firstOperation((err, result1) => {
//   if (err) {
//     console.error(err);
//   } else {
//     secondOperation(result1, (err, result2) => {
//       if (err) {
//         console.error(err);
//       } else {
//         console.log(result2);
//       }
//     });
//   }
// });

// .....................................
// function firstOperation() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("First result");
//     }, 1000);
//   });
// }

// function secondOperation(result) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Second result");
//     }, 1000);
//   });
// }

// firstOperation()
//   .then(result1 => {
//     console.log(result1)
//     return secondOperation(result1)
//   })
//   .then(result2 => console.log(result2))
//   .catch(error => console.error(error));

// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,...........

function performOperation(callback) {
  setTimeout(() => {
    const error = null; // or some error object
    const result = "Operation successful";
    callback(error, result);
  }, 1000);
}


performOperation((error, result) => {
  // if (error) {
  //   console.error(error);
  // } else {
  //   console.log(result); // Output: "Operation successful"
  // }
});
