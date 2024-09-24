function generateTable(rows,columns) {
    let table=document.createElement("table");
    let tableBody=document.createElement("tbody");

    for (let i = 0; i < rows; i++) {
        let row=document.createElement("tr");
        for (let j = 0; j < columns; j++) {
            let cell=document.createElement("td");
            let text=document.createTextNode(`Rows : ${i} , Columns : ${j}`);
            cell.appendChild(text);
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
    document.body.appendChild(table);
    table.setAttribute("border",2);
}
