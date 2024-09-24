let form = document.getElementById('form');
let email = document.getElementById('email');
let password = document.getElementById('password');
let role = document.getElementById('role');
let signInBtn = document.getElementById('signInButton');
let user;

form.addEventListener('submit',function(e){
    e.preventDefault();
})

signInBtn.addEventListener('click',handleSignIn);

function handleSignIn(){
    if(role.value =='admin'){
        user=JSON.parse(localStorage.getItem('admin'));
    }
    else{
        user=JSON.parse(localStorage.getItem('student'));
    }

    let userCheck= user.find((obj)=>obj.emailId==email.value && obj.pass==password.value);

    if(userCheck){
        if(userCheck.userRole=='admin'){
            window.location.href='adminDashboard.html';
        }
        else{
            window.location.href='studentDashboard.html';
        }
    }
    else{
        alert("Incorrect email or password");
    }
    console.log(user);
}
