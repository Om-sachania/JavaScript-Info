let boxes = document.querySelectorAll('.box');
let newGameButton = document.getElementById('new-game');
let msgContainer = document.querySelector('.messageContainer');
let msg = document.querySelector('#message');

const winningResult = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
let playerTurn = true;

boxes.forEach((item)=>{
    item.addEventListener('click',function(){
        if(playerTurn){
            item.innerHTML = 'X';
            playerTurn = false;
        }
        else{
            item.innerHTML = 'O';
            playerTurn = true;
        }
        item.disabled=true;
        checkWin();
    })
})

function checkWin(){
    for (const pattern of winningResult) {
        if(boxes[pattern[0]].innerHTML != '' && boxes[pattern[1]].innerHTML != '' && boxes[pattern[2]].innerHTML != ''){
            if(boxes[pattern[0]].innerHTML == boxes[pattern[1]].innerHTML && boxes[pattern[1]].innerHTML == boxes[pattern[2]].innerHTML){
                console.log(`Winner ${boxes[pattern[0]].innerHTML}`);
                showWinner(boxes[pattern[0]].innerHTML)
            }
        }
    }
}

function resetGame(){
    playerTurn = true;
    enableButtons();
    msgContainer.classList.add("hide");
}

function disableButtons(){
    for (const button of boxes) {
        button.disabled = true;
    }
}

function enableButtons(){
    for (const button of boxes) {
        button.disabled = false;
        button.innerHTML = ''
    }
}

function showWinner(winner){
    msg.innerHTML = `Congratulations , Winner ${winner}`;
    msgContainer.classList.remove('hide');
    disableButtons();
}

newGameButton.addEventListener('click',resetGame);