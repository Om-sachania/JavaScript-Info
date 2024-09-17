let mainDiv = document.getElementById('main');
let startButton = document.getElementById('startButton');

startButton.addEventListener('click',()=>inputNodeValue(mainDiv))

function inputNodeValue(div){
    let nodeNumber = +prompt("Enter node number");
    if(checkNodeNumber(nodeNumber)){
        alert("Enter number only!!!");
        return
    }
    else{
        createNode(nodeNumber,div);
    }
}
function checkNodeNumber(nodeNumber){
    console.log(nodeNumber)
    if(nodeNumber === 0 || isNaN(nodeNumber)){
        return true
    }
    else{
        return false
    }
}

function createNode(nodeNumber,parentDiv){
    let nodeDiv = document.createElement('div'); 
    let contentsDiv = document.createElement('div');
    let numDiv = document.createElement('div');
    let buttonsDiv = document.createElement('div');
    numDiv.innerHTML = nodeNumber;
    nodeButtons(parentElement,buttonsDiv,"Add",inputNodeValue);
    nodeButtons(parentElement,buttonsDiv,"Delete");
    nodeButtons(parentElement,buttonsDiv,"Merge");
    nodeButtons(parentElement,buttonsDiv,"Move");
    nodeDiv.classList.add('node');
    contentsDiv.classList.add('contents');
    numDiv.classList.add('numDiv');
    buttonsDiv.classList.add('buttonDiv');
    contentsDiv.append(numDiv,buttonsDiv);
    nodeDiv.append(contentsDiv);
    parentDiv.append(nodeDiv);    
    startButton.style.display = 'none';
}

function nodeButtons(parentDiv,div,buttonValue,onclickFunc){
    console.log(parentDiv)
    let button = document.createElement('button');
    button.innerHTML = buttonValue;
    button.classList.add('crudButtons');
    button.classList.add(buttonValue);
    if(buttonValue == 'Add'){
        button.onclick = ()=>onclickFunc(parentDiv)
    }
    div.append(button);
}

let nodeAddButtons = document.getElementsByClassName('Add');
console.log(nodeAddButtons[0])