let arr=[0,1,1,2,3,4,5,5,5,6,7,7,8,9];

    arr.sort((a,b)=>a-b);
    //console.log(arr);
    let count=1,max=0,element;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i+1]) {
            count++;
        } else {
            count=1;
        }
        if(count>max){
            max=count;
            element=arr[i];
        }
    }
    
    console.log("Most frequent item of array is : ",element);