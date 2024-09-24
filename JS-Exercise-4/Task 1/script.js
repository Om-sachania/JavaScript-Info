function displayDateTime(){

    setInterval(()=>{
        let date = new Date();

        let hours = date.getHours();
        if(hours<10) hours='0'+hours;
        clock.children[1].innerHTML = hours;

        let mins = date.getMinutes();
        if(mins<10) mins='0'+mins;
        clock.children[2].innerHTML = mins;

        let secs = date.getSeconds();
        if(secs<10) secs='0'+secs;
        clock.children[3].innerHTML = secs;
    },0);

    let date = new Date();
    let tDate = date.toLocaleString(undefined , {year: 'numeric',month:'short', day: '2-digit'})
    displayDate.children[1].innerHTML = tDate;
}

displayDateTime();

let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let resumeBtn = document.getElementById('resumeBtn');
let resetBtn = document.getElementById('resetBtn');

let stopWatch = document.getElementById('stopWatch');

stopBtn.setAttribute('disabled',"");
resumeBtn.setAttribute('disabled',"");
resetBtn.setAttribute('disabled',"");

let stopWatchMiliSec = 0;
let stopWatchSec = 0;
let stopWatchMins = 0;
let stopWatchHour = 0;

function displayStopWatch(){
        stopWatchMiliSec ++;

        if (stopWatchMiliSec == 100) {
            stopWatchSec++;
            stopWatchMiliSec=0;
        }

        if (stopWatchSec == 60) {
            stopWatchMins++;
            stopWatchSec=0;
        }

        if (stopWatchMins == 60) {
            stopWatchHour++;
            stopWatchMins = 0;
            stopWatchSec=0;
        }

        let miliSecString = stopWatchMiliSec;
        let secString = stopWatchSec;
        let minString = stopWatchMins;
        let hourString = stopWatchHour;

        if (hourString<10) hourString='0'+stopWatchHour;
        if (minString<10) minString='0'+stopWatchMins;
        if (secString<10) secString='0'+stopWatchSec;
        if (miliSecString<10) miliSecString='0'+stopWatchMiliSec;

        stopWatch.children[1].innerHTML = hourString;
        stopWatch.children[2].innerHTML = minString;
        stopWatch.children[3].innerHTML = secString;
        stopWatch.children[4].innerHTML = miliSecString;
}

let timer;

function startStopWatch() {
    if (!timer) {
        timer=setInterval(displayStopWatch,10)
    }

    startBtn.setAttribute('disabled',"");
    resumeBtn.setAttribute('disabled',"");

    stopBtn.removeAttribute('disabled',"");
    resetBtn.removeAttribute('disabled',"");
}

function stopStopWatch() {
    clearInterval(timer);
    timer = null;

    startBtn.setAttribute('disabled',"");
    stopBtn.setAttribute('disabled',"");

    resumeBtn.removeAttribute('disabled',"");
    resetBtn.removeAttribute('disabled',"");
}

function resumeStopWatch() {
    if (stopWatchMiliSec!=0) {
        timer=setInterval(displayStopWatch,10);
    }
    startBtn.setAttribute('disabled',"");
    resumeBtn.setAttribute('disabled',"");

    stopBtn.removeAttribute('disabled',"");
    resetBtn.removeAttribute('disabled',"");
}

function resetStopWatch() {
    clearInterval(timer);
    timer=null;
    stopWatchHour=0;
    stopWatchMins=0;
    stopWatchSec=0;
    stopWatchMiliSec=0;

    stopWatch.children[1].innerHTML='00';
    stopWatch.children[2].innerHTML='00';
    stopWatch.children[3].innerHTML='00';
    stopWatch.children[4].innerHTML='00';

    stopBtn.setAttribute('disabled',"");
    resumeBtn.setAttribute('disabled',"");
    resetBtn.setAttribute('disabled',"");

    startBtn.removeAttribute('disabled',"");
}


