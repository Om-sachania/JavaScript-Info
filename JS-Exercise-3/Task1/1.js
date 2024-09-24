function isValidEmail(email) {
    let value = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return value.test(email);
}

console.log(isValidEmail("abc@mail.com"));