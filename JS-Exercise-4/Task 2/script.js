let table = document.getElementById('table');
let inputFirst = document.getElementById('fName');  
let inputLast = document.getElementById('lName');

let arr=[];
let editIndex = -1;

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
function clearInputFields() {
    inputFirst.value='';
    inputLast.value='';
}

function settingAttribute(elem,elemForValue,className){
    elem.setAttribute("type","text");
    elem.setAttribute("value",`${elemForValue.value}`);
    elem.setAttribute("disabled","");
    elem.classList.add(className);
}

function settingAttributeOfButton(elem,value,className){
    elem.setAttribute("type","button");
    elem.setAttribute("value",value);
    elem.classList.add(className)
}

function addRow() {
    inputFirst.value=inputFirst.value.trim();
    inputLast.value=inputLast.value.trim();

    if(!(inputFirst.value && inputLast.value)){
        alert("Please fill details properly!!!");
        clearInputFields();
    }
    else{
        if (checkData()) {      
            alert("Row already Exists!!");
            clearInputFields();
        }
        else{
            let row = table.insertRow();
    
            let firstNameInputField = row.insertCell(0)
            let lastNameInputField= row.insertCell(1)
            let editButton = row.insertCell(2)
            let deleteButton = row.insertCell(3)
    
            let firstNameInput = document.createElement('input');
            let lastNameInput = document.createElement('input');
            let editBtnInput = document.createElement('input');
            let deleteBtnInput = document.createElement('input');

            settingAttribute(firstNameInput,inputFirst,'firstName')

            settingAttribute(lastNameInput,inputLast,'lastName')

            settingAttributeOfButton(editBtnInput,"Edit",'EditBtn')
            editBtnInput.onclick= () => editElement(editBtnInput);

            settingAttributeOfButton(deleteBtnInput,"Delete",'DeleteBtn')
            deleteBtnInput.onclick= ()=> deleteElement(row);

            firstNameInputField.append(firstNameInput);
            lastNameInputField.append(lastNameInput);

            editButton.append(editBtnInput);
            deleteButton.append(deleteBtnInput);

            let obj={
                first : inputFirst.value,
                last : inputLast.value
            }

            arr.push(obj);

            localStorage.setItem('Data',JSON.stringify(arr));
            clearInputFields();
        }
    }
}

function deleteElement(row) {
    let tableBody = table.children[0];
    tableBody.removeChild(row);
    let firstName = row.cells[0].firstElementChild.value;
    let lastName = row.cells[1].firstElementChild.value;

    for (const elem of arr) {
        if(elem.first == firstName && elem.last == lastName){
            let index = arr.indexOf(elem);
            arr.splice(index,1);
            localStorage.setItem('Data',JSON.stringify(arr))
        }
    }
}

function editElement(editBtnInput){
    let addBtn = document.getElementById('add');
    let updateBtn = document.getElementById('update');

    let elem = editBtnInput.parentElement.parentElement;
    let val1 = elem.cells[0].firstElementChild.value;
    let val2 = elem.cells[1].firstElementChild.value;
    editIndex = Array.from(elem.parentElement.children).indexOf(elem);

    let deleteBtn = elem.cells[3].firstElementChild;
    deleteBtn.setAttribute("disabled","");
    addBtn.style.display='none';
    updateBtn.style.display='inline-block'

    inputFirst.value=val1;
    inputLast.value=val2;
}

function updateRow(){ 
    inputFirst.value=inputFirst.value.trim();
    inputLast.value=inputLast.value.trim();

    if(editIndex>=0 && (inputFirst.value && inputLast.value) && !checkData()){

        let row = table.firstElementChild.children[editIndex];
        row.children[0].firstElementChild.value=inputFirst.value;
        row.children[1].firstElementChild.value=inputLast.value;

        arr[editIndex].first=inputFirst.value;
        arr[editIndex].last=inputLast.value

        clearInputFields();
        document.getElementById('add').style.display = 'inline-block';
        document.getElementById('update').style.display = 'none';
        editIndex = -1;
        let deleteBtn = row.children[3].firstElementChild;
        deleteBtn.removeAttribute("disabled","");
        localStorage.setItem('Data',JSON.stringify(arr));

    }
    else{
        alert("Enter the details properly!!")
    }
}