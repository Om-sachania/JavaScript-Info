let colorButtons = document.getElementById('colorButtons');
let logoutButton = document.getElementById('logout');

document.addEventListener('DOMContentLoaded',function(e){
    if(sessionStorage.getItem('userLoggedIn')!=='true'){
        window.location.href = 'login.html'
        console.log("got it");
    }
    let savedColor = sessionStorage.getItem('backgroundColor'); 
    if(savedColor){
        document.body.style.backgroundColor= savedColor
    }
    colorButtons.addEventListener('click',function(e){
        let target = e.target;
        let targetValue = target.value;
        document.body.style.backgroundColor = targetValue;
        sessionStorage.setItem('backgroundColor',targetValue);
    });

    logoutButton.addEventListener('click',function(e){
        sessionStorage.clear();
        window.location.href = 'login.html';
    });
})

