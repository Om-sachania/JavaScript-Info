// OR ( || ) Operator : 
    // It returns true if any one of the values are true

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// If the operand is not an boolean then it converts the operand into boolean value

if(1 || 0){
    console.log('truthy');
}

// IMPORTANT NOTE : The OR finds first 'TRUTHY' value

/*
    Working of OR Operator : 
        it evaluates from left to right

        For each operand, converts it to boolean. If the result is true, 
        stops and returns the original value of that operand.

        If all operands have been evaluated (i.e. all were false), 
        returns the last operand.
*/

// AND ( && ) Operator : 
    // It returns true if both the arguments are true otherwise false

console.log(true || true); // true
console.log(true || false); // false
console.log(false || true); // false
console.log(false || false); // false

// If the operand is not an boolean then it converts the operand into boolean value

if(1 && 0){
    console.log('It will not work as result falsy!');
}

// IMPORTANT NOTE : The AND finds first 'FALSY' value

/*
    Working of AND Operator : 
        Evaluates operands from left to right.

        For each operand, converts it to a boolean. If the result is false, 
        stops and returns the original value of that operand.

        If all operands have been evaluated (i.e. all were truthy), returns the 
        last operand.
*/

console.log(1 && 5); // 5

// NOTE : PREDENCE of AND(&&) is more than OR(||)

console.log(Boolean(-1))


