let table = document.getElementById('table');
let inputFirst = document.getElementById('fName');  
let inputLast = document.getElementById('lName');

let arr=[];
let editIndex = -1;
let renderDataArr=[
    {firstName : "John" , lastName : "Adams"},
    {firstName : "Oliver" , lastName : "Brown"},
    {firstName : "Harry" , lastName : "Davis"},
    {firstName : "Jacob" , lastName : "Allen"},
    {firstName : "Charlie" , lastName : "Anderson"},
    {firstName : "Thomas" , lastName : "Clarke"},
    {firstName : "George" , lastName : "Evans"},
    {firstName : "Oscar" , lastName : "Jones"},
    {firstName : "James" , lastName : "Smith"},
    {firstName : "William" , lastName : "Tailor"},
];

let count=0;

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

function checkDuplicate() {
    for (const elem of renderDataArr) {
        if(elem.firstName == inputFirst.value && elem.lastName == inputLast.value){
            return true;
        }
        else{
            return false;
        }
    }
}

function createRowElements(firstName,lastName) {
    let row = table.insertRow();

    let tableDataFirst = row.insertCell(0)
    let tableDataLast= row.insertCell(1)
    let editBtn = row.insertCell(2)
    let deleteBtn = row.insertCell(3)
    
    let firstNameInput = document.createElement('input');
    let lastNameInput = document.createElement('input');
    let editBtnInput = document.createElement('input');
    let deleteBtnInput = document.createElement('input');

    firstNameInput.setAttribute("type","text");
    firstNameInput.setAttribute("disabled","");
    firstNameInput.classList.add('firstName');
    firstNameInput.setAttribute("value",`${firstName}`);

    lastNameInput.setAttribute("type","text");
    lastNameInput.setAttribute("disabled","");
    lastNameInput.classList.add('lastName');
    lastNameInput.setAttribute("value",`${lastName}`);

    editBtnInput.setAttribute("type","button");
    editBtnInput.setAttribute("value","Edit");
    editBtnInput.classList.add('EditBtn');
    editBtnInput.onclick= editElement;

    deleteBtnInput.setAttribute("type","button");
    deleteBtnInput.setAttribute("value","Delete");
    deleteBtnInput.classList.add('DeleteBtn');
    deleteBtnInput.onclick= deleteElement;

    tableDataFirst.append(firstNameInput);
    tableDataLast.append(lastNameInput);

    editBtn.append(editBtnInput);
    deleteBtn.append(deleteBtnInput);

}

function addRow() {
    inputFirst.value=inputFirst.value.trim();
    inputLast.value=inputLast.value.trim();

    if(inputFirst.value.length == 0 || inputLast.value.length == 0){
        alert("Please fill details properly!!!");
    }
    else{
        if (checkDuplicate() || checkData()) {
            alert("Row already Exists!!");
            clearInputFields();
        }
        else{
            createRowElements(inputFirst.value,inputLast.value);
            let obj={
                first : inputFirst.value,
                last : inputLast.value
            }
            arr.push(obj);
            clearInputFields();
        }
    }
}

function deleteElement(deleteBtnInput) {
    let row =deleteBtnInput.target.parentElement.parentElement;
    let val1 = row.cells[0].firstElementChild.value;
    let val2 = row.cells[1].firstElementChild.value;

    for (const elem of arr) {
        if(elem.first == val1 && elem.last == val2){
            let index = arr.indexOf(elem);
            arr.splice(index,1);
        }
    }
    for (const elem of renderDataArr) {
        if(elem.firstName == val1 && elem.lastName == val2){
            let index = renderDataArr.indexOf(elem);
            renderDataArr.splice(index,1);
        }
    }
    row.remove();
}

function editElement(editBtnInput){
    let addBtn = document.getElementById('add');
    let updateBtn = document.getElementById('update');

    let elem = editBtnInput.target.parentElement.parentElement;
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
        row.children[1].firstElementChild.value=inputLast.value

        arr[editIndex].first=inputFirst.value;
        arr[editIndex].last=inputLast.value;

        clearInputFields();
        document.getElementById('add').style.display = 'inline-block';
        document.getElementById('update').style.display = 'none';
        editIndex = -1;
        let deleteBtn = row.children[3].firstElementChild;
        deleteBtn.removeAttribute("disabled","");
    }
    else{
        alert("Enter the details properly!!")
    }
}

function renderData() {
    if (count>=1) {
        alert("Data already added!!");
    } else {
        for (let i = 0; i < renderDataArr.length; i++) {
            createRowElements(renderDataArr[i].firstName,renderDataArr[i].lastName);
            count++;
        }
    }
}
