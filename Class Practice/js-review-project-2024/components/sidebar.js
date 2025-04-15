class SideBar extends BaseTable {
    getRenderData() {
        const categories = [];
        let categoryMap = new Map();
        tableData.forEach((item)=>{
            let {category,price} = item;
            if(!categoryMap.has(category)){
                categoryMap.set(category,{count:0,totalPrice:0});
            }
            let currCategory = categoryMap.get(category);
            currCategory.count+=1;
            currCategory.totalPrice+=price;
        })
        categoryMap.forEach((val,name)=>{
            let count = val.count;
            let price = val.totalPrice;
            categories.push({
                name,
                count,
                price,  
            })
        });

        return categories;
    }
    getCellData(data) {
        return [
            {text:data.name , elementName:'td', handleClick:''},
            {text:data.count, elementName:'td', handleClick: ''},
            {text:data.price, elementName:'td', handleClick: ''},
        ]
    }  
    listenEvent() {
        document.addEventListener('delete', () => this.render())
    }
}
