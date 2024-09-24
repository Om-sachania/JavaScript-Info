let form = document.getElementById('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
});

let email = document.getElementById('email');
let password = document.getElementById('password');
let role = document.getElementById('role');

function handleSignUp(){
        if(validationInputField()){
            let user={
                emailId : email.value,
                pass : password.value,
                userRole : role.value,
            } 
            if(role.value == 'admin'){
                let adminData=JSON.parse(localStorage.getItem('admin')) || [];
                adminData.push(user);
                localStorage.setItem('admin', JSON.stringify(adminData));
            }
            else if(role.value == 'student'){
                let studentData=JSON.parse(localStorage.getItem('student')) || [];
                studentData.push(user);
                localStorage.setItem('student', JSON.stringify(studentData));
            }

            alert("Successfully Signed-Up");
            email.value='';
            password.value='';
        }
}

function validationInputField() {
    let upperCase = /[A-Z]/g;
    let lowerCase = /[a-z]/g;
    let numbers = /[0-9]/g;
    if (!email.value) {
        alert("Enter the Email address");
        return false;
    }
    if (password.value.length<8) {
        alert('Password should have atleast 8 characters!!');
        return false
    }
    if(!password.value.match(upperCase)){
        alert('Atleast One UpperCase Character');
        return false;
    }
    if(!password.value.match(lowerCase)){
        alert('Atleast One LowerCase Character');
        return false
    }
    if(!password.value.match(numbers)){
        alert('Atleast One Number');
        return false
    }
    return true;
}

function handleSignIn() {
    window.location.href='SignInPage.html'
}