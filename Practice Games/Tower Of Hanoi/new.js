// const data = [
//     {
//     id: 1,
//     arr: [
//             {
//                 value : '1',
//                 id: 2,
//                 arr: [
//                         {
//                             value : '2',
//                             id: 3,
//                             arr: [
//                                     {
//                                         value : '3',
//                                         id: 4,
//                                         arr: [
//                                                 { 
//                                                     value: '4'
//                                                 }
//                                             ]
//                                     }
//                                 ]
//                         }
//                     ]
//             }
//         ]
//     }
// ];

// let myData = data[0].arr[0]
// console.log("Before : ",data[0].arr[0].arr[0])
// console.log(data[0].arr[0].arr[0].arr[0].arr[0].value)

// let myData = data[0].arr[0]
// while(myData.value !== '4'){
//     myData = myData.arr[0];
// }
// console.log(myData.value);

// if(myData.value !== '4'){
    
// }
// else{
//     console.log(myData.value)
// }

let unOrderList = document.body.firstElementChild
console.log(unOrderList.firstElementChild.firstChild)
let myData = unOrderList.firstElementChild.firstChild

while(myData.nodeValue !== '3'){
    myData = myData.nextSibling.firstElementChild.firstChild
}

console.log(myData.nodeValue)
//.nextSibling.firstElementChild.firstChild