class Table extends BaseTable{
    getRenderData() {
        return tableData
    }
    getCellData(data) {
        return [
            {text:data.productName, elementName:'td', handleClick:''},
            {text:data.category, elementName:'td', handleClick: ''},
            {text:data.price, elementName:'td', handleClick: '' },
            {text:'Delete', elementName:'button', handleClick:function(){
                let row = this.parentElement;
                row.remove();
                let index = tableData.indexOf(data);
                tableData.splice(index,1);

                const event = new CustomEvent('delete', { detail: { updatedData: tableData } });
                document.dispatchEvent(event);
            }}
        ]
    }
}