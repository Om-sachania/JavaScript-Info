let arr_a=[0,1,2,3];
let arr_b=[3,4,5];
let arr_c=arr_a.concat(arr_b);

let aUnionb=arr_c.filter((value,index,arr)=>{
    return arr.indexOf(value) === index;
})
console.log("Union_Array : ",aUnionb);

function aIntersectionb(arr,arr1) {
    let aInterb=[];
    for (let i = 0; i < arr.length; i++) {
        if (arr1.includes(arr[i])) {
            aInterb.push(arr[i]);
        }
    }
    return aInterb;
}
console.log("Intersection_Array : ",aIntersectionb(arr_a,arr_b));

function arrDiff(arr,arr1) {
    let a=[];
    for (let i = 0; i < arr.length; i++) {
        if(!arr1.includes(arr[i])){
            a.push(arr[i]);
        }
    }

    let b=[];
    for (let i = 0; i < arr1.length; i++) {
        if(!arr.includes(arr1[i])){
            b.push(arr1[i]);
        }
    }

    return [a,b];
}
let diffArr=arrDiff(arr_a,arr_b);
let aMinusb=diffArr[0];
let bMinusa=diffArr[1];
console.log("a-b_array : ",aMinusb);
console.log("b-a_array : ",bMinusa);
