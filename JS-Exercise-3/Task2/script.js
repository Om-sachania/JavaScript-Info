let users=  [
    {
        Name: 'Ravindra',
        Sports: ['Chess', 'Cricket'],
    },
    {
        Name:'Ravi',
        Sports: ['Cricket', 'Football'],
    },
    {
        Name:'Rishabh',
        Sports: ['Table-Tennis', 'Football'],
    },
]

let Sports=users.reduce((groupOfSport,user)=>{
    user.Sports.forEach((i)=>{
        groupOfSport[i]??=[];
        groupOfSport[i].push(user.Name);
    })
    return groupOfSport;        
},{})
console.log(Sports);