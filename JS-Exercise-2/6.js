let letters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function num_string_range(start,end,x,arr) {
    let rangeArr=arr.filter((value)=>value>=start && value<=end);
    //console.log(rangeArr);
    let newArr=rangeArr.filter((value,index)=>index%x==0);
    //console.log(newArr);
    return newArr;
}
//console.log(num_string_range('a','p',+2,letters));
let customizedArr=num_string_range('a','z',2,letters);
console.log(customizedArr);