// Iterables : Basically this concept allows us to make an object useable in for-of loop : 

// Example : 
let range = {
    from : 1,
    to : 5,
}

let arr = [1,2,3];

range[Symbol.iterator]= function(){
    
    return {
        current : this.from,
        last : this.to,

        next(){
            if(this.current<=this.last){
                return {done:false,value:this.current++}
            }
            else{
                return {done:true};
            }
        }
    }
}

console.log(range);
console.log(arr);

// for (const a of range) {
//     console.log(a)
// }

let array = [1, 2, 3,4,5,6];    
let [first, second, ...third] = array;
console.log(first, second, third); // Output: 1 2 3
