let emailId = document.getElementById('email');
let password = document.getElementById('password');
let loginButton = document.getElementById('Submit');

function checkDetails(){
    if(!(emailId.value && password.value))
    {
        return false;
    }
    else{
        return true;
    }
}
loginButton.addEventListener('click',function(e){
    if(checkDetails()){
        sessionStorage.setItem('email',emailId.value)
        sessionStorage.setItem('password',password.value);
        window.location.href = 'dashboard.html';
    }
    else{
        alert("Enter some value!!!");
    }
});

if(sessionStorage.getItem('email') && sessionStorage.getItem('password')){
    console.log(sessionStorage.getItem('email'))
    console.log(sessionStorage.getItem('password'))
    window.location.href = 'dashboard.html'
}



