function removeHtmlTags(string){
    let arr=string.split("");
    let start=arr.indexOf("<");
    let end;
    
    while(start>=0){
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]==">" && arr[i+1]!="<") {
                end=i+1;
                break;
            }
        }
        arr.splice(start,end);
        start=arr.indexOf("<");
    }
    return arr.join("");
}

let s="<p><strong><em>JavaScript Exercise</em></strong></p>";
let updatedString=removeHtmlTags(s);
console.log(updatedString);