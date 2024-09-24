let person=[
    {
        id : 1,
        age : 64,
        name : "John"
    },
    {
        id : 2,
        age : 17,
        name : "Micheal"
    },
    {
        id : 3,
        age : 14,
        name : "David"
    },
    {
        id : 4,
        age : 37,
        name : "Brandon"
    },
    {
        id : 5,
        age : 87,
        name : "Perry"
    },
    {
        id : 6,
        age : 28,
        name : "Garry"
    },
    {
        id : 7,
        age : 45,
        name : "Nathan"
    },
    {
        id : 8,
        age : 19,
        name : "Carmelo"
    },
    {
        id : 9,
        age : 31,
        name : "Danny"
    },
    {
        id : 10,
        age : 49,
        name : "Jerry"
    }
];

function arrangeArray(arr) {
    arr.sort((a,b)=>a.age-b.age && b.name > a.name ? 1 : -1);    
    return arr;
}

person=arrangeArray(person);
console.log(person);