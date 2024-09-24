let email="abcd@mail.com"
function hiddenEmail(email){
    let splitting=email.split("@");
    let part1=splitting[0].split("");
    let part2=splitting[1];
    let part1Length=part1.length;
    part1.splice(1,(part1Length-2));
    for (let i = 0; i < (part1Length-2); i++) {
        part1.splice(1,0,"*");
    }
    part1.push("@");
    return part1.concat(part2).join("");
}
let updatedEmail=hiddenEmail(email);
console.log(updatedEmail);