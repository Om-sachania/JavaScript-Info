// function modifiedArr(originalArr,deleteElem,replace){
//     let index = originalArr.indexOf(deleteElem);
//     let newArr = Array.from(originalArr);
//     if (originalArr.includes(deleteElem)) {
//         newArr.splice(index,1);
//         console.log("new Array : ",newArr);
//         //console.log(originalArr);
//         let replacedArr = Array.from(newArr);
//         replacedArr.splice(index,0,replace);
//         console.log("Replace array",replacedArr)
//     } else {
//         console.log("Element is not present");
//     }

//     return originalArr
// }

// let arr =[1,2,3,4]
//console.log(modifiedArr(arr,3,5));
const departments = {
    'hr': { name: 'Human Resources', employees: { '1': 'Alice', '2': 'Bob' } },
    'it': { name: 'IT Department', employees: { '3': 'Charlie', '4': 'David' } },
};

// for (const key in departments) {
//     let a = departments[key].employees;
//     console.log(Object.values(a));
// }

// for (const elem of Object.entries(departments)) {
//     let value = elem[1].employees;
//     console.log(Object.values(value));
// }

