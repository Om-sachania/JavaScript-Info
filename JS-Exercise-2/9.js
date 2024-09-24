function convertUnixtimestamp(timeStamp) {
    let date=new Date(timeStamp);
    return date;
}

let convertedDate=convertUnixtimestamp(1607518718000 );
console.log(convertedDate);

console.log(Date())