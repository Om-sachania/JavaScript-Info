let num=1023165454197;

function commaSeparator(num) {
    num=num.toString();
    let wholeNum='';

    if (num.length>3) {
        let temp="",j=0;
        for (let i = num.length-1; i >=0; i--) {
            temp=num[i] + temp;
            j++;
            if (j%3==0 && i!=0) {
                temp=","+temp;
            }
        }
        wholeNum=temp;
    }
    return wholeNum;
}


let commaSeparatedNum= commaSeparator(num);
console.log(commaSeparatedNum);

