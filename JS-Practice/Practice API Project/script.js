let arrayOfData = [];
let countOfCheckBox = 0;
let editIndex = -1;
let editObject;
let selectedRowsHeaderBold = document.getElementById("selectedRowsHeader");
selectedRowsHeaderBold.innerHTML = `Total ${countOfCheckBox} selected row(s)`;

let checkBoxAll = document.getElementById('checkAll');
let deleteAllButton = document.getElementById('deleteAllButton');
let addButton = document.getElementById('add');
let titleInputField = document.getElementById('title');
let updateButton = document.getElementById('update');
let table = document.getElementById('table');

let editAllTextField = document.getElementById('editAll');
let editAllButton = document.getElementById('editAllButton');

editAllButton.addEventListener('click',editAllTitles);

addButton.addEventListener('click',addRow);

async function getData(){
    let apiData;

    let url = 'https://jsonplaceholder.typicode.com/posts';
    let response = await fetch(url);
    let jsonData = await response.json();
    
    apiData = jsonData.splice(0,30);
    apiData.forEach(element => {
        delete element.userId;
        delete element.id;
        delete element.body;
    });
    // console.log(apiData)
    localStorage.setItem('API Data',JSON.stringify(apiData));

    arrayOfData = JSON.parse(localStorage.getItem('API Data'));
    arrayOfData.forEach((item)=>{
        displayData(item)
    });
}
window.onload = function(e){
    if(localStorage.length === 0){
        getData();
        console.log(localStorage.length)
    }
    else{
        arrayOfData = JSON.parse(localStorage.getItem('API Data'));
        arrayOfData.forEach((item)=>{
            displayData(item)
        });
    }
}

function createInputField(type,value,className){
    let inputField = document.createElement('input');
    inputField.setAttribute('type',type);
    inputField.classList.add(className)
    // inputField.setAttribute('id',id)
    if(type === 'text'){
        inputField.setAttribute('value',value);
        inputField.setAttribute('disabled','');
    }
    else{
        inputField.addEventListener('click',checkBoxCounting);
    }

    return inputField
}

function createButton(label,className,onclick){
    let button = document.createElement('input');
    button.setAttribute('type','button');
    button.setAttribute('value',label);
    button.classList.add(className);
    button.onclick = onclick

    return button
}

function checkTitleExistence(){
    let titleName = titleInputField.value.trim();
    // console.log(titleName);

    for (const item of arrayOfData) {
        if(item.title === titleName){
            return true;
        }
    }
    return false;
}

function displayData(data){
    let row = table.insertRow();

    let cells = [
        {type : 'checkbox',className:'checkBox'},
        {type : 'text' , value : data.title, className:'title'},
        {type : 'button' , value : 'Edit', className:'EditButton' , onclick : ()=>editItem(row)},
        {type : 'button' , value : 'Delete', className:'DeleteButton' , onclick : ()=>deleteItem(row)},
    ];

    cells.forEach((cellObject,index)=>{
        let cell = row.insertCell(index);

        let element;
        if(cellObject.type == 'button'){
            element = createButton(cellObject.value , cellObject.className , cellObject.onclick);
        }
        else{
            element = createInputField(cellObject.type , cellObject.value , cellObject.className);
        }
        cell.append(element);
    })
}

function addRow(){
    let titleName = titleInputField.value.trim();
    if (!titleName) {
        alert('Enter some data!!')
        titleInputField.value = '';
    } else {
        // console.log(titleName)
        if (checkTitleExistence()) {
            alert("Title already exists!!")
        } else {
            let newObject = {title : titleName};
            displayData(newObject);
            arrayOfData.push(newObject);
            localStorage.setItem('API Data',JSON.stringify(arrayOfData));
            allSelected();
        }
        titleInputField.value = '';
    }
}   

function editItem(row){
    // Below If : Updating The EDIT if ONCE CLICKED
    // Below If statement is for (Once i have clicked on one edit and now i click on another edit)
    if(titleInputField.value){
        // console.log('True');
        console.log(titleInputField.value);
        let previousRowIndex = arrayOfData.findIndex((item)=>item.title === titleInputField.value);
        let previousRow = table.children[0].children[previousRowIndex+1];
        let previousRowCheckBox = previousRow.children[0].firstElementChild
        previousRow.children[3].firstElementChild.disabled = false
        previousRow.children[0].firstElementChild.disabled = false;
        if(previousRowCheckBox.checked){
            deleteAllButton.disabled = false;
            editAllButton.disabled = false;
        }
    }
    // General edit functionality : 
    let currentTitle = row.children[1].firstElementChild.value;
    let currentDeleteButton = row.children[3].firstElementChild;
    let currentCheckBox = row.cells[0].firstElementChild

    currentCheckBox.disabled = true;    
    titleInputField.value = currentTitle;
    currentDeleteButton.disabled = true;


    addButton.classList.add('disabled');
    updateButton.classList.remove('disabled');

    editIndex = (row.rowIndex);
    editObject = arrayOfData.find((obj)=>obj.title == currentTitle);
    // console.log(editObject)
    // console.log(editIndex);

    // Below logic is for if the checkBox of row is checked when i click on that particular edit 
    // Then the deleteAll & EditAll button should be disabled 
    
    if(currentCheckBox.checked){
        deleteAllButton.disabled = true;
        editAllButton.disabled = true;
    }
}

function deleteItem(row){
    // console.log(arrayOfData.findIndex((item)=>item.title == editObject.title))
    let currentItemTitle = row.children[1].firstElementChild.value;
    // console.log(currentItemTitle);
    let index = arrayOfData.findIndex((item)=>item.title == currentItemTitle);
    // console.log(index);    

    arrayOfData.splice(index,1)
    row.remove();
    localStorage.setItem('API Data',JSON.stringify(arrayOfData));
    if(row.firstElementChild.firstElementChild.checked){
        countOfCheckBox--;
        selectedRowsHeaderBold.innerHTML = `Total ${countOfCheckBox} selected row(s)`;
    }
    // Below function checks that all checkBoxes are checked or not
    allSelected()
    if(editObject){
        editIndex = (arrayOfData.findIndex((item)=>item.title == editObject.title))+1;
        console.log(editIndex)
    }
    if(arrayOfData.length == 0){
        localStorage.clear()
    }
}

checkBoxAll.addEventListener('click',function(e){
    let totalCheckBoxes = Array.from(document.getElementsByClassName('checkBox'));
    if(checkBoxAll.checked){
        totalCheckBoxes.forEach((checkbox)=>{
            checkbox.checked = true;
        });
        countOfCheckBox = totalCheckBoxes.length;
        selectedRowsHeaderBold.innerHTML = `Total ${countOfCheckBox} selected row(s)`;
    }
    else{
        totalCheckBoxes.forEach((checkbox)=>{
            checkbox.checked = false;
        });
        countOfCheckBox = 0;
        selectedRowsHeaderBold.innerHTML = `Total ${countOfCheckBox} selected row(s)`;
    }
})

function checkBoxCounting(e){
    let checkBox = e.target
    if(checkBox.checked){
        countOfCheckBox++;
        selectedRowsHeaderBold.innerHTML = `Total ${countOfCheckBox} selected row(s)`;
    }
    else{
        countOfCheckBox--;
        selectedRowsHeaderBold.innerHTML = `Total ${countOfCheckBox} selected row(s)`;
    }
    allSelected();
}

function allSelected(){
    let totalCheckBoxes = Array.from(document.getElementsByClassName('checkBox'));

    if(countOfCheckBox == totalCheckBoxes.length){
        checkBoxAll.checked = true;
    }
    else{
        checkBoxAll.checked = false
    }
}

deleteAllButton.addEventListener('click',function(e){
    let totalCheckBoxes = Array.from(document.getElementsByClassName('checkBox'));
    
    for (let i = 0; i < totalCheckBoxes.length; i++) {
        if(totalCheckBoxes[i].checked){
            let selectedRow = totalCheckBoxes[i].parentElement.parentElement;
            deleteItem(selectedRow);
        }
    }
    countOfCheckBox = 0;
    selectedRowsHeaderBold.innerHTML = `Total ${countOfCheckBox} selected row(s)`;
    checkBoxAll.checked = false;
    // titleInputField.value = '';
    // console.log(updateButton.classList.contains('disabled'))
    if(!updateButton.classList.contains('disabled')){
        console.log('ok')
    }
    console.log(arrayOfData)
})

function updateTitle(){
    if(editIndex>=0 && (titleInputField.value) && !checkTitleExistence() ){
        let row = table.children[0].children[editIndex];
        let updateTitleField = row.cells[1].firstElementChild;
        updateTitleField.disabled = false;

        updateTitleField.value = titleInputField.value;
        arrayOfData[editIndex-1].title = titleInputField.value

        updateButton.classList.add('disabled');
        addButton.classList.remove('disabled');

        let currentDeleteButton = row.cells[3].firstElementChild;
        let currentCheckBox =row.cells[0].firstElementChild;
        currentDeleteButton.disabled = false;
        updateTitleField.disabled = true;
        currentCheckBox.disabled = false;

        localStorage.setItem('API Data',JSON.stringify(arrayOfData));
        if(deleteAllButton.disabled){
            deleteAllButton.disabled = false;
            editAllButton.disabled = false;
        }
    }
    else{
        alert('Enter some data OR Enter different title')
    }
    titleInputField.value = '';
}

function editAllTitles(){
    //let index = 0;
    let totalCheckBoxes = Array.from(document.getElementsByClassName('checkBox'));
    let selectedCheckBoxes = totalCheckBoxes.filter((checkBox)=>checkBox.checked === true);
    let currentTitleField;

    if(selectedCheckBoxes.length!=0){
        if(editAllTextField.value.trim()){
            selectedCheckBoxes.forEach((currentCheckBox,index)=>{
                let currentCheckBoxIndex = totalCheckBoxes.indexOf(currentCheckBox);
                currentTitleField =currentCheckBox.parentElement.nextElementSibling.firstElementChild
                currentTitleField.value = `${editAllTextField.value} ${index}`;
                currentCheckBox.checked = false;
                arrayOfData[currentCheckBoxIndex].title = `${editAllTextField.value} ${index}`;
                countOfCheckBox--;
                //index++;        
            })
            localStorage.setItem('API Data',JSON.stringify(arrayOfData));
        }
        else{
            alert('Please enter title!!!')
        }
        allSelected()
        selectedRowsHeaderBold.innerHTML = `Total ${countOfCheckBox} selected row(s)`;
    }
    else{
        alert('Please select some titles!!!');
    }
    editAllTextField.value = ''
}

