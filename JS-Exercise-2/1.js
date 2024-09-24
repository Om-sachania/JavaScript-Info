let arr=[0,1,2,3,4,5,6,7,8,9];
    let n=prompt("How many numbers you want to see : ");
    function getNElements(arr,n) {
        let a =arr.filter(index=>index<n);
        let b = arr.filter(index=>index>=arr.length-n);
        return [a,b];
    }

    let newArr=getNElements(arr,n);
    let firstNElements=newArr[0];
    let lastNElements=newArr[1];
    console.log(`First ${n} elements : ${firstNElements}, Last ${n} elements : ${lastNElements}`);

/*
    Alternate Method : 
        let fe=arr.slice(0,n);
        let le=arr.slice(-n);

        console.log(fe);
        console.log(le);
*/