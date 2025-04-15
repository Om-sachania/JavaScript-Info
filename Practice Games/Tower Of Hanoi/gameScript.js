
let diskNumberInputField = document.getElementById('diskNumber');
let towerNumberInputField = document.getElementById('towerNumber');
let moveButton = document.getElementById('move');

// let disk1 = document.getElementById('disk1')
// let disk2 = document.getElementById('disk2')
// let disk3 = document.getElementById('disk3')
let tower1 = document.getElementById('tower1')
let tower2 = document.getElementById('tower2')
let tower3 = document.getElementById('tower3')

let countOfDisks = document.getElementById('countOfDisks');
let displayDisksButton = document.getElementById('displayDisks');

displayDisksButton.addEventListener('click',function(){
    console.log(countOfDisks.value)
    createDisks(countOfDisks.value)
})

let disksObject = {
    // '1' : disk1,
    // '2' : disk2,
    // '3' : disk3
}

let towersObject = {
    '1' : tower1,
    '2' : tower2,
    '3' : tower3
}

function createDisks(countOfDisksValue){
    let widthOfDisk = 50;
    for (let i = 1; i <= countOfDisksValue; i++) {
        let disk = document.createElement('div');
        disk.classList.add('disks');
        disk.id= `disk${i}`;
        disk.setAttribute('diskNumber',i);
        disk.innerHTML = `Disk ${i}`;
        disk.style.width = widthOfDisk + "px";
        tower1.appendChild(disk);
        widthOfDisk+=20;
        disksObject[i] = disk
    }
    // clearInputFields()
    countOfDisks.disabled =true
    displayDisksButton.disabled =true
    console.log(disksObject)
    // console.log('IN function',countOfDisks)
}

moveButton.addEventListener('click',function(e){
    console.log(diskNumberInputField.value);
    console.log(towerNumberInputField.value);
    moveDisk(+diskNumberInputField.value,towerNumberInputField.value)
    // console.log('Count : ',count)
    clearInputFields();
    checkWin();
});

function clearInputFields(){
    diskNumberInputField.value = '';
    towerNumberInputField.value = '';
    // countOfDisks.value = ''
}

function moveDisk(diskNumber,towerNumber){
    let currentDisk = disksObject[diskNumber];
    let currentTower = currentDisk.parentElement
    let destinationTower = towersObject[towerNumber];
    let destinationTowerLastChild = destinationTower.lastElementChild;

    // console.log(destinationTower.lastElementChild)
    if(checkDiskSelection(currentDisk)){
        alert('You Cannot Move that disk');
    }
    else{
        movementOfDisk(currentTower,destinationTower,currentDisk,destinationTowerLastChild);
    }
}
function checkDiskSelection(currDisk){
    if(currDisk.previousElementSibling.className === 'disks'){
        return true;
    }
}

function movementOfDisk(currentTower,destinationTower,currentDisk,destinationTowerLastChild){
    let deletedElement;
    let firstChildOfDestinationTower = destinationTower.firstElementChild;
    if (destinationTowerLastChild.className == 'pole') {
        deletedElement = currentTower.removeChild(currentDisk);
        destinationTower.appendChild(deletedElement);
        printMoves(currentTower,deletedElement,destinationTower);
    } 
    else{
        let lastDiskattribute = destinationTowerLastChild.getAttribute('diskNumber');
        let currDiskattribute = currentDisk.getAttribute('diskNumber');
        if(+lastDiskattribute < +currDiskattribute){
            alert('You can not place large disk on smaller disk')
            return;
        }
        else{
            deletedElement = currentTower.removeChild(currentDisk);
            firstChildOfDestinationTower.after(deletedElement);
            printMoves(currentTower,deletedElement,destinationTower);
        }
    }
}
function checkWin(){
    let arrayOfTower3Childrens = Array.from(tower3.children);
    console.log('Array Length : ',arrayOfTower3Childrens.length);
    console.log('Count of Disks : ',countOfDisks.value)
    if(arrayOfTower3Childrens.length == (+countOfDisks.value+1)){
        alert("Hurray!!! You won the game!!!!");
        resetGame();
    }
}

function resetGame(){
    let arrayOfTower3Childrens = Array.from(tower3.children);
    arrayOfTower3Childrens.forEach((item)=>{
        if(item.className == 'disks'){
            tower3.removeChild(item);   
        }
    });
    countOfDisks.disabled =false
    displayDisksButton.disabled =false
    countOfDisks.value = ''
}

function printMoves(currentTower,currentDisk,destinationTower){
    console.log(`${currentDisk.id} moved from ${currentTower.id} to ${destinationTower.id}`)
}
// let pole = tower3.firstElementChild
// console.log(Array.from(tower3.children).includes(pole))