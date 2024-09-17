let arrayOfData = [];
let countOfCheckBox = 0;
let editIndex = -1;
let editObject;
const selectedRowsHeaderBold = document.getElementById("selectedRowsHeader");
const checkBoxAll = document.getElementById('checkAll');
const deleteAllButton = document.getElementById('deleteAllButton');
const addButton = document.getElementById('add');
const titleInputField = document.getElementById('title');
const updateButton = document.getElementById('update');
const table = document.getElementById('table');
const editAllTextField = document.getElementById('editAll');
const editAllButton = document.getElementById('editAllButton');

editAllButton.addEventListener('click', editAllTitles);
addButton.addEventListener('click', addRow);
deleteAllButton.addEventListener('click', deleteSelectedRows);
checkBoxAll.addEventListener('click', toggleSelectAll);

async function getData() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const response = await fetch(url);
    let jsonData = await response.json();
    jsonData = jsonData.slice(0, 30).map(({ title }) => ({ title }));
    localStorage.setItem('API Data', JSON.stringify(jsonData));

    arrayOfData = jsonData;
    arrayOfData.forEach(displayData);
}

function createInputField(type, value, className, disabled = false) {
    const inputField = document.createElement('input');
    inputField.type = type;
    inputField.className = className;
    inputField.value = value || '';
    if (type === 'text' && disabled) {
        inputField.disabled = true;
    }
    if (type === 'checkbox') {
        inputField.addEventListener('change', checkBoxCounting);
    }
    return inputField;
}

function createButton(label, className, onclick) {
    const button = document.createElement('input');
    button.type = 'button';
    button.value = label;
    button.className = className;
    button.addEventListener('click', onclick);
    return button;
}

function checkTitleExistence(title) {
    return arrayOfData.some(item => item.title === title);
}

function displayData(data) {
    const row = table.insertRow();
    row.insertCell().appendChild(createInputField('checkbox', '', 'checkBox'));
    row.insertCell().appendChild(createInputField('text', data.title, 'title', true));
    row.insertCell().appendChild(createButton('Edit', 'EditButton', () => editItem(row)));
    row.insertCell().appendChild(createButton('Delete', 'DeleteButton', () => deleteItem(row)));
}

function addRow() {
    const titleName = titleInputField.value.trim();
    if (!titleName) {
        alert('Enter some data!');
        titleInputField.value = '';
        return;
    }
    if (checkTitleExistence(titleName)) {
        alert("Title already exists!");
        titleInputField.value = '';
        return;
    }
    const newObject = { title: titleName };
    displayData(newObject);
    arrayOfData.push(newObject);
    localStorage.setItem('API Data', JSON.stringify(arrayOfData));
    titleInputField.value = '';
    updateSelectedCount();
}

function editItem(row) {
    const currentTitle = row.cells[1].firstElementChild.value;
    const currentCheckBox = row.cells[0].firstElementChild;
    const currentDeleteButton = row.cells[3].firstElementChild;

    if (titleInputField.value && titleInputField.value !== currentTitle && !checkTitleExistence(titleInputField.value)) {
        const previousRow = table.rows[editIndex];
        previousRow.cells[1].firstElementChild.disabled = false;
        previousRow.cells[0].firstElementChild.disabled = false;
        if (previousRow.cells[0].firstElementChild.checked) {
            deleteAllButton.disabled = false;
            editAllButton.disabled = false;
        }
    }

    titleInputField.value = currentTitle;
    currentCheckBox.disabled = true;
    currentDeleteButton.disabled = true;

    addButton.classList.add('disabled');
    updateButton.classList.remove('disabled');

    editIndex = row.rowIndex;
    editObject = arrayOfData.find(obj => obj.title === currentTitle);

    if (currentCheckBox.checked) {
        deleteAllButton.disabled = true;
        editAllButton.disabled = true;
    }
}

function deleteItem(row) {
    const currentItemTitle = row.cells[1].firstElementChild.value;
    const index = arrayOfData.findIndex(item => item.title === currentItemTitle);
    arrayOfData.splice(index, 1);
    row.remove();
    localStorage.setItem('API Data', JSON.stringify(arrayOfData));
    if (row.cells[0].firstElementChild.checked) {
        countOfCheckBox--;
    }
    updateSelectedCount();
    if (editObject) {
        editIndex = arrayOfData.findIndex(item => item.title === editObject.title) + 1;
    }
}

function toggleSelectAll() {
    const isChecked = checkBoxAll.checked;
    document.querySelectorAll('.checkBox').forEach(checkbox => {
        checkbox.checked = isChecked;
    });
    countOfCheckBox = isChecked ? document.querySelectorAll('.checkBox').length : 0;
    updateSelectedCount();
}

function checkBoxCounting(e) {
    countOfCheckBox += e.target.checked ? 1 : -1;
    updateSelectedCount();
}

function updateSelectedCount() {
    selectedRowsHeaderBold.innerHTML = `Total ${countOfCheckBox} selected row(s)`;
    deleteAllButton.disabled = countOfCheckBox === 0;
    allSelected();
}

function allSelected() {
    const totalCheckBoxes = document.querySelectorAll('.checkBox').length;
    checkBoxAll.checked = countOfCheckBox === totalCheckBoxes;
}

function deleteSelectedRows() {
    document.querySelectorAll('.checkBox:checked').forEach(checkbox => {
        const row = checkbox.closest('tr');
        deleteItem(row);
    });
    countOfCheckBox = 0;
    updateSelectedCount();
}

function updateTitle() {
    if (editIndex >= 0 && titleInputField.value.trim() && !checkTitleExistence(titleInputField.value)) {
        const row = table.rows[editIndex];
        row.cells[1].firstElementChild.value = titleInputField.value;
        arrayOfData[editIndex - 1].title = titleInputField.value;

        updateButton.classList.add('disabled');
        addButton.classList.remove('disabled');

        row.cells[1].firstElementChild.disabled = true;
        row.cells[0].firstElementChild.disabled = false;

        localStorage.setItem('API Data', JSON.stringify(arrayOfData));
        if (deleteAllButton.disabled) {
            deleteAllButton.disabled = false;
            editAllButton.disabled = false;
        }
    } else {
        alert('Enter a different title or make sure it is not empty.');
    }
    titleInputField.value = '';
}

function editAllTitles() {
    const selectedCheckBoxes = Array.from(document.querySelectorAll('.checkBox:checked'));
    const newTitle = editAllTextField.value.trim();

    if (selectedCheckBoxes.length === 0) {
        alert('Please select some titles!');
        return;
    }
    if (!newTitle) {
        alert('Please enter a new title!');
        return;
    }

    selectedCheckBoxes.forEach((checkbox, index) => {
        const rowIndex = Array.from(table.querySelectorAll('tr')).indexOf(checkbox.closest('tr'));
        const titleField = table.rows[rowIndex].cells[1].firstElementChild;
        titleField.value = `${newTitle} ${index}`;
        arrayOfData[rowIndex].title = `${newTitle} ${index}`;
        checkbox.checked = false;
        countOfCheckBox--;
    });
    localStorage.setItem('API Data', JSON.stringify(arrayOfData));
    updateSelectedCount();
    editAllTextField.value = '';
}

getData();
