let arr=[0,1,2,3,4,5,6,7,8,9];
    arr.sort(()=>Math.random()-0.5);
    console.log(arr);

/*
Another a better solution : 

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let arr=[0,1,2,3,4,5,6,7,8,9];
console.log(shuffle(arr));
*/  