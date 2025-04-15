let productName = document.getElementById('product');
let category = document.getElementById('category');
let price = document.getElementById('price');
let addButton = document.getElementById('add');

function clearInputFields(){
    price.value = '';
    productName.value = '';
    category.value = '';
}
function addItem(){
    let obj ={
        productName : productName.value,
        category : category.value,
        price : +price.value
    }
    console.log(obj)
    tableData.push(obj)

    let myTable = new Table;
    myTable.render();
    let mySideBar = new SideBar;
    mySideBar.render();

    clearInputFields();
}
addButton.addEventListener('click',addItem)

const tableData = [
    { productName: 'a', category: 'a1', price: 3 },
    { productName: 'b', category: 'a1', price: 2 },
    { productName: 'c', category: 'a2', price: 2 },
    { productName: 'd', category: 'a3', price: 2 },
    { productName: 'e', category: 'a3', price: 2 },
];
