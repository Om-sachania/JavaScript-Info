let string="This is a sample string";
let input_string="Insert Me";
let input_position=3;

function insertingString(originalString,inputString,postion=1) {
    let arr=originalString.split("");
    arr.splice((postion-1),0,inputString);
    return arr.join("");
}

let insertedString=insertingString(string,input_string,input_position);
console.log("Output : ",insertedString);
