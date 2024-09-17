let table = document.getElementById('table');

let searchInputField = document.getElementById('searchItems');
let searchButton = document.getElementById('search');

console.log(searchInputField);

let arrayOfItems = JSON.parse(localStorage.getItem('Items'))
// console.log(arrayOfItems)

let cart = [];

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

function createRows(item){
    let row = table.insertRow();

    let itemTableCell = row.insertCell(0);
    let priceTableCell = row.insertCell(1);
    let cartButtonTableCell = row.insertCell(2);

    let itemInputField = document.createElement('input')
    let priceInputField = document.createElement('input')
    let cartButtonInputField = document.createElement('input')

    setAttributeForInputFields(itemInputField,item.name,'itemName');
    setAttributeForInputFields(priceInputField,item.price,'itemPrice');

    setAttributeForButtons(cartButtonInputField,'Add to Cart','CartButton');
    cartButtonInputField.onclick = ()=> addToCart(item);

    itemTableCell.append(itemInputField);
    priceTableCell.append(priceInputField);
    cartButtonTableCell.append(cartButtonInputField);
}

arrayOfItems.forEach((item)=>{
    let length = Object.keys(item).length
    // console.log(length)
    createRows(item,length)
});

function addToCart(item){
    let numberOfItems = prompt('Enter the quantity of items');
    if(+numberOfItems){
        let currentItem = cart.find((object)=>object.name == item.name);
        if(currentItem){
            currentItem.quantity+=(+numberOfItems)
        }
        else{
            item.quantity = +numberOfItems;
            cart.push(item);
        }
    }
    else{
        console.log('Enter data in number only')
    }
}

function displayCart(){
    if(cart.length == 0){
        alert('Cart does not have any items!!!');
    }
    else{
        
    }
}

