let count=0;    
let count1=0;
function check(str){
    for (let i = 0; i < str.length; i++) {
        if(str[i]=="("){
            count++;
        }
        else{
            count1++;
        }
    }
    if(count == count1){
        return true;
    }
    else if(count < 0 && count1 < 0)
        {
        return false;
    }
    else{
        return false;
    }


}
console.log(check(")()()()()("));

