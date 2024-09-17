let table = document.getElementById('table');
let userInputFieldItem = document.getElementById('item');
let userInputFieldPrice = document.getElementById('price');
let updateButton = document.getElementById('update');
let addButton = document.getElementById('add');
let uploadButton = document.getElementById('upload');

function setAttributeForInputFields(element,inputFieldValue,className){
    element.setAttribute('type','text');
    element.setAttribute('value',`${inputFieldValue}`);
    element.setAttribute('disabled','');
    element.classList.add(className);
}

function setAttributeForButtons(element,buttonValue,className){
    element.setAttribute('type','button');
    element.setAttribute('value',buttonValue);
    element.classList.add(className);
}

let arrayOfItems = [];
let editIndex = -1;

function clearInputFields(){
    userInputFieldItem.value = '';
    userInputFieldPrice.value = '';
}

function checkItemExistence(){
    let itemName = userInputFieldItem.value.trim();
    let itemPrice = +(userInputFieldPrice.value.trim());

    for (const item of arrayOfItems) {
        if(item.name == itemName && item.price == itemPrice){
            return true;
        }
        else{
            return false;
        }
    }
}

function addRow(){
    let itemName = userInputFieldItem.value.trim();
    let itemPrice = +(userInputFieldPrice.value.trim());

    if(!(itemName && itemPrice)){
        alert('Please fill both field Or Enter Number in item price field');
    }
    else{
        if(checkItemExistence()){
            alert('Item already Exists!!');
        }
        else{
            let row = table.insertRow();

            let itemTableCell = row.insertCell(0);
            let priceTableCell = row.insertCell(1);
            let editButtonTableCell = row.insertCell(2);
            let deleteButtonTableCell = row.insertCell(3);
        
            let itemInputField = document.createElement('input')
            let priceInputField = document.createElement('input')
            let editButtonInputField = document.createElement('input')
            let deleteButtonInputField = document.createElement('input')
        
            setAttributeForInputFields(itemInputField,itemName,'itemName');
            setAttributeForInputFields(priceInputField,itemPrice,'itemPrice');
        
            setAttributeForButtons(editButtonInputField,'Edit','EditButton');
            editButtonInputField.onclick = ()=> editItem(row);
        
            setAttributeForButtons(deleteButtonInputField,'Delete','DeleteButton');
            deleteButtonInputField.onclick = ()=> deleteItem(row);
        
            itemTableCell.append(itemInputField);
            priceTableCell.append(priceInputField);
            editButtonTableCell.append(editButtonInputField);
            deleteButtonTableCell.append(deleteButtonInputField);
        
            let item = {
                name : itemName,
                price : itemPrice,
            }
        
            arrayOfItems.push(item);
            // console.log(arrayOfItem)
        }
    }

    clearInputFields();
}

function deleteItem(row){
    let currentItemName = row.children[0].firstElementChild.value;
    let currentItemPrice = row.children[1].firstElementChild.value;
    let index = arrayOfItems.findIndex((item)=>item.name == currentItemName && item.price == currentItemPrice);

    arrayOfItems.splice(index,1)
    row.remove();
}

function editItem(currentRow){
    let currentItemName = currentRow.children[0].firstElementChild.value;
    let currentItemPrice = currentRow.children[1].firstElementChild.value;
    let currentDeleteButton = currentRow.children[3].firstElementChild

    userInputFieldItem.value = currentItemName;
    userInputFieldPrice.value = currentItemPrice;

    currentDeleteButton.disabled = true
    updateButton.classList.remove('disabled');
    addButton.classList.add('disabled');

    editIndex = currentRow.rowIndex
}

function updateItem(){
    let itemName = userInputFieldItem.value.trim();
    let itemPrice = +(userInputFieldPrice.value.trim());

    if(editIndex>=0 && (itemName && itemPrice) && !checkItemExistence()){
        let row = table.firstElementChild.children[editIndex];
        let updateItemNameField = row.cells[0].firstElementChild
        let updateItemPriceField = row.cells[1].firstElementChild;

        updateItemNameField.value = itemName;
        updateItemPriceField.value = itemPrice;

        arrayOfItems[editIndex-1].name = itemName;
        arrayOfItems[editIndex-1].price = itemPrice;

        updateButton.classList.add('disabled');
        addButton.classList.remove('disabled');

        let currentDeleteButton = row.cells[3].firstElementChild;
        currentDeleteButton.disabled = false;

        // console.log(row)
        console.log(arrayOfItems)
        clearInputFields();
    }
}

function uploadItems(){
    if(arrayOfItems.length == 0){
        alert('No items added!! Please add items and then upload');
    }
    else{
        alert('Items Successfully uploaded!!');
        console.log(arrayOfItems);
        localStorage.setItem('Items',JSON.stringify(arrayOfItems));

        let arrayOfTableRows = Array.from(table.children[0].children);
        for (let i = 1; i < arrayOfTableRows.length; i++) {
            arrayOfTableRows[i].remove();
        }
        arrayOfItems.length = 0;
        console.log(arrayOfItems);  
    }
}