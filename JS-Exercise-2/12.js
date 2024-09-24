let string="RapidOpsSolution";
let length=2;
function chopString(string,length) {
    let arr=[];
    let i=0;
    let j=length;
    while(i<string.length){
        arr.push(string.slice(i,j));
        i=j;
        j+=length;
    }
    return arr;
}
let chopedStringArray=chopString(string,length);
console.log(chopedStringArray);