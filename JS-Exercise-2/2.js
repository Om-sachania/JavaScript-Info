//let num='02544168';
let num=prompt("Enter any num")
let numArr= num.split('');
for(let i=0;i<numArr.length;i++){
    if(numArr[i]%2==0 && numArr[i+1]%2==0){
        numArr[i]=numArr[i]+"-";
    }
}
let newNum=numArr.join("");
console.log(newNum);