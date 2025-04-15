
function makeBubble(){
    let clutter = ``;
    for (let i = 0; i <168; i++) {
        clutter+=`<div class=bubble>${Math.floor(Math.random()*10)}</div>`;
    }
    document.querySelector('#pbtm').innerHTML = clutter;
}

let timer= 60;

function runTimer(){
    let timerInt = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector('.timerBox').textContent = timer;
        }
        else{
            let currentScore = +document.querySelector('.scoreBox').textContent;
            document.querySelector('#pbtm').innerHTML = `<h1>Game Over Your Score is : ${currentScore}</h1>`;
            clearInterval(timerInt)
        }
    },1000)
}

let random ;
function randomHit(){
    random = Math.floor(Math.random()*10);
    document.querySelector('.hitBox').textContent = random;
}

makeBubble()
runTimer()
randomHit()


// console.log(Array.from(allBubbles));
let timeout;
function resetTimer() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        // console.log("Hello");
        let allBubbles = Array.from(document.querySelectorAll('.bubble'));
        allBubbles.forEach((item)=>{
            if(+item.textContent === random){
                item.style.backgroundColor = 'red';
            }
        })
    }, 3000);
}

let panelBottom = document.querySelector('#pbtm');
panelBottom.addEventListener('click',(e)=>{
    resetTimer();
    if(+e.target.textContent === random){
        let currentScore = +document.querySelector('.scoreBox').textContent;
        currentScore+=10;
        document.querySelector('.scoreBox').textContent = currentScore;
        makeBubble();
        randomHit();
    }
})

resetTimer()