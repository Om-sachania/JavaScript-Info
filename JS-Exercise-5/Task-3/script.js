let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');

let colorArrOfBox4 = ['lime','deeppink','orange','cyan','olive'];
let colorArrOfBox2 = ['red','blue','green'];
let countOfColorChangeBox2 = 0 , countOfColorChangeBox4 = 0;

window.onload=function(){
    alert('Greetings Mr.X Please choose the surprise box');
    box1.innerHTML+=`<br>Click Me First`;
    randomColor();
}

function randomColor(){
    setInterval(()=>{
        if(countOfColorChangeBox2==3){
            countOfColorChangeBox2=0;
        }
        box2.style.backgroundColor=colorArrOfBox2[countOfColorChangeBox2];
        countOfColorChangeBox2++;
    },3000)
}

function randomColorForBox4() {
    box3.innerHTML+=`<br>Oops!`;
    setInterval(()=>{
        if(countOfColorChangeBox4==5){
            countOfColorChangeBox4=0;
        }
        box4.style.backgroundColor=colorArrOfBox4[countOfColorChangeBox4];
        countOfColorChangeBox4++;
    },5000)
}

box1.addEventListener('click',randomColorForBox4);

document.onkeydown=function(e){
    let currentIndex = colorArrOfBox4.indexOf(box4.style.backgroundColor);
    if(e.keyCode==37 || e.keyCode == 40){
        if(currentIndex==0){
            box4.style.backgroundColor=colorArrOfBox4[4]
        }
        else{
            box4.style.backgroundColor=colorArrOfBox4[currentIndex-1];
        }
    }

    if(e.keyCode==38 || e.keyCode==39){
        if(currentIndex==4){
            box4.style.backgroundColor=colorArrOfBox4[0]
        }
        else{
            box4.style.backgroundColor=colorArrOfBox4[currentIndex+1];
        }
    }
}