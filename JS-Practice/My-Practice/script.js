let numberButtons=document.querySelectorAll('.numbers');
let controlButton = document.getElementById('controlButtons');
let displayArea = document.getElementById('display');

controlButton.addEventListener('click',function(e){
    (displayArea.innerHTML) += (e.target.innerHTML)
    console.log(typeof (displayArea.innerHTML))
})


// buttons.addEventListener('click',function(e){
//     console.log(e.target.innerHTML);
// })