let person=[
    {
        name : "Jack",
        age : 23
    },
    {
        name : "Sam",
        age : 12
    },
    {
        name : "Max",
        age : 20
    }
];

console.log(person);

function updateArray(arr,delete_pos,insert_pos) {
    let element={
        name : "Harry",
        age: 45
    };

    let ans=prompt("What do you want to do : Delete or Insert");
    if (ans===null || ans==="") {
        console.log("Invalid Input!!!!");
    } 
    else {
        ans.toLowerCase();
        if (ans == "delete") {
            arr.splice(delete_pos,1);
            return arr;
        } 
        else if(ans == "insert"){
            arr.splice(insert_pos,0,element);
            return arr
        }
        else {
            console.log("PLEASE ENTER EITHER DELETE OR INSERT ONLY !!!!");
        }
    }
}

let newArray=updateArray(person,2,3);
console.log(newArray);