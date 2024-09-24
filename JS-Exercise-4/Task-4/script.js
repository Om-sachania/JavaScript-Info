let table = document.getElementById('table');
let inputFirst = document.getElementById('fName');  
let inputLast = document.getElementById('lName');

let arr=[];
let editIndex = -1;
let countCheckBox=0;

// Creating the table header items
let headerOne = document.createElement('th');
let headerTwo = document.createElement('th');
let headerThree = document.createElement('th');
let headerFour = document.createElement('th');

let headerOneInput = document.createElement('input');
let headerFourInput = document.createElement('input');
let headerTwoBold = document.createElement('b');
let headerThreeBold = document.createElement('b');

headerOneInput.setAttribute("type","checkbox");
headerOneInput.id="check";

headerFourInput.setAttribute("type","button");
headerFourInput.value="Delete";
headerFourInput.id="deleteAllBtn";
headerFourInput.setAttribute("disabled","");
headerFourInput.onclick=deleteAll;

headerTwoBold.innerHTML="Select All";

headerThreeBold.innerHTML=`Total ${countCheckBox} selected row(s)`;
headerThreeBold.id="ThreeBold";

headerOne.append(headerOneInput);
headerTwo.append(headerTwoBold);
headerThree.append(headerThreeBold);
headerFour.append(headerFourInput);

table.append(headerOne,headerTwo,headerThree,headerFour);
//Finished the table header

function checkData() {
    for (const elem of arr) {
        if(elem.first == inputFirst.value && elem.last == inputLast.value){
            return true;
        }
        else{
            return false;
        }
    }
}
function addRow() {
    inputFirst.value=inputFirst.value.trim();
    inputLast.value=inputLast.value.trim();

    if(inputFirst.value.length == 0 || inputLast.value.length == 0){
        alert("Please fill details properly!!!");
    }
    else{
        if (checkData()) {
            alert("Row already Exists!!");
            inputFirst.value='';
            inputLast.value='';
        }
        else{
            let row = table.insertRow();
    
            let checkBox = row.insertCell(0)
            let tableDataFirst = row.insertCell(1)
            let tableDataLast= row.insertCell(2)
            let editBtn = row.insertCell(3)
            let deleteBtn = row.insertCell(4)
    
            let checkBoxData = document.createElement('input');
            let firstNameInput = document.createElement('input');
            let lastNameInput = document.createElement('input');
            let editBtnInput = document.createElement('input');
            let deleteBtnInput = document.createElement('input');

            checkBoxData.setAttribute("type","checkbox");
            checkBoxData.classList.add('checkClass');
            checkBoxData.addEventListener('click',function(e){
                if(checkBoxData.checked){
                    countCheckBox++;
                    headerThreeBold.innerHTML=`Total ${countCheckBox} selected row(s)`;
                }
                else{
                    countCheckBox--;
                    console.log(countCheckBox);
                    headerThreeBold.innerHTML=`Total ${countCheckBox} selected row(s)`;
                }
                checkStatusOfCheckBox();
                toggleDelete(row);
            })

            firstNameInput.setAttribute("type","text");
            firstNameInput.setAttribute("value",`${inputFirst.value}`);
            firstNameInput.setAttribute("disabled","");
            firstNameInput.classList.add('firstName');

            lastNameInput.setAttribute("type","text");
            lastNameInput.setAttribute("value",`${inputLast.value}`);
            lastNameInput.setAttribute("disabled","");
            lastNameInput.classList.add('lastName');

            editBtnInput.setAttribute("type","button");
            editBtnInput.setAttribute("value","Edit");
            editBtnInput.classList.add('EditBtn');
            editBtnInput.onclick= editElement;

            deleteBtnInput.setAttribute("type","button");
            deleteBtnInput.setAttribute("value","Delete");
            deleteBtnInput.classList.add('DeleteBtn');
            deleteBtnInput.onclick= deleteElement;
            deleteBtnInput.setAttribute("disabled","");

            checkBox.append(checkBoxData);
            tableDataFirst.append(firstNameInput);
            tableDataLast.append(lastNameInput);

            editBtn.append(editBtnInput);
            deleteBtn.append(deleteBtnInput);
            console.log(deleteBtn);

            let obj={
                first : inputFirst.value,
                last : inputLast.value
            }
            arr.push(obj);
            inputFirst.value='';
            inputLast.value='';
        }
        checkStatusOfCheckBox();
    }
}

function deleteElement(deleteBtnInput) {
    let row =deleteBtnInput.target.parentElement.parentElement;
    let val1 = row.cells[1].firstElementChild.value;
    let val2 = row.cells[2].firstElementChild.value;

    for (const elem of arr) {
        if(elem.first == val1 && elem.last == val2){
            let index = arr.indexOf(elem);
            arr.splice(index,1);
        }
    }

    row.remove();
    countCheckBox--;
    headerThreeBold.innerHTML=`Total ${countCheckBox} selected row(s)`;
}

function editElement(editBtnInput){
    let addBtn = document.getElementById('add');
    let updateBtn = document.getElementById('update');

    let elem = editBtnInput.target.parentElement.parentElement;
    let val1 = elem.cells[1].firstElementChild.value;
    let val2 = elem.cells[2].firstElementChild.value;
    editIndex = Array.from(elem.parentElement.children).indexOf(elem);

    let deleteBtn = elem.cells[4].firstElementChild;
    deleteBtn.setAttribute("disabled","");
    addBtn.style.display='none';
    updateBtn.style.display='inline-block'

    inputFirst.value=val1;
    inputLast.value=val2;
}
function updateRow(){ 
    inputFirst.value=inputFirst.value.trim();
    inputLast.value=inputLast.value.trim();

    if(editIndex>=0){
        let row = table.children[4].children[editIndex];
        console.log(row)
        row.children[1].firstElementChild.value=inputFirst.value;
        row.children[2].firstElementChild.value=inputLast.value

        inputFirst.value='';
        inputLast.value='';
        document.getElementById('add').style.display = 'inline-block';
        document.getElementById('update').style.display = 'none';
        editIndex = -1;
    }
}

function checkStatusOfCheckBox(){
    let separateCheckBox = document.getElementById('check');
    let groupCheckBoxes = Array.from(document.getElementsByClassName('checkClass'));

    if((groupCheckBoxes.length) == countCheckBox){
        console.log(groupCheckBoxes.length);
        console.log(countCheckBox);
        separateCheckBox.setAttribute("checked","")
    }
    else{
        separateCheckBox.removeAttribute('checked',"")
    }
}

check.addEventListener('click',(e)=>{
    let itemCount=0
    let groupCheckBoxes = Array.from(document.getElementsByClassName('checkClass'));
    groupCheckBoxes.forEach((item)=>{
        item.checked=true;
        itemCount++
    })

    if (check.checked==false) {
        groupCheckBoxes.forEach((item)=>{
            item.checked=false;
            itemCount--;
        })
    }
    headerThreeBold.innerHTML=`Total ${itemCount} selected row(s)`;
})

function deleteAll() {
    let rows = document.querySelectorAll('input.checkClass:checked')
    let deleteAllBtn = document.getElementById('deleteAllBtn');
    rows.forEach((item)=>{
        item.closest('tr').remove();
    })
    countCheckBox=0;
    headerThreeBold.innerHTML=`Total ${countCheckBox} selected row(s)`;
    headerOneInput.checked=false;
    deleteAllBtn.setAttribute("disabled","");
    countCheckBox=0;
    checkStatusOfCheckBox();
}

function toggleDelete(row) {
    let deleteBtn = row.children[4].firstElementChild;
    let checkBox = row.children[0].firstElementChild;
    deleteBtn.removeAttribute("disabled","");
    if (checkBox.checked == false) {
        deleteBtn.setAttribute("disabled","")
    }

    let separateCheckBox = document.getElementById('check');
    let deleteAllBtn = document.getElementById('deleteAllBtn');
    deleteAllBtn.removeAttribute("disabled","")
    if (separateCheckBox.checked==false) {
        deleteAllBtn.setAttribute("disabled","");
    }
}